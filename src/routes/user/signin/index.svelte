<script lang="ts">
	import {
		supabase,
		signIn,
		signOut,
		getUser,
		fetchDb,
		_user
	} from '../../../lib/db'
	import { sleep } from '../../../lib'
	import { goto } from '@roxi/routify'

	let faded = false

	let email = ''
	let password = ''
	const submitForm = async () => {
		faded = true
		const data = await signIn({ email, password })
		if (data) {
			await sleep(100)
			$goto('/user')
		}

		faded = false
	}
</script>

{#await sleep(100) then _}
	<section class="layer nwp center">
		<article class="p-8 shadow-xl rounded-box">
			<h3 class="text-2xl font-bold mb-4">Sign In</h3>
			<form on:submit|preventDefault={submitForm} class="flex flex-col gap-4">
				<input
					type="email"
					bind:value={email}
					required
					placeholder="email@web.com"
					class="input input-bordered" />
				<input
					type="password"
					bind:value={password}
					required
					placeholder="...."
					class="input input-bordered" />
				<nav>
					<button type="submit" class="btn">Submit</button>
				</nav>
			</form>
		</article>
	</section>
{/await}
