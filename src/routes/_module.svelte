<script lang="ts">
	import { supabase, getUser, _user } from '../lib/db'
	// import nav from '../lib/nav';
	// import { goto } from '@roxi/routify'

	supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_IN') _user.set(session.user)
		else _user.set(null)
	})
	const checkUser = async () => {
		console.log('checkUser')
		const user = await getUser()
		_user.set(user)
	}

	let promise = checkUser()
</script>

<nav class="navbar bg-neutral text-neutral-content">
	<!-- <div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-5 w-5 stroke-current">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div> -->
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">daisyUI</a>
	</div>
	<div class="flex-none">
		<a href="/user" class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-5 w-5 stroke-current">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
				></path>
			</svg>
		</a>
	</div>
</nav>
<main class="main">
	{#await promise then value}
		<slot></slot>
	{/await}
</main>
