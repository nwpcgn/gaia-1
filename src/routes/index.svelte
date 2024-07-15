<script lang="ts">
	import { onMount } from 'svelte'
	import { _user } from '../lib/db'
	import nav from '../lib/nav'
	import { sleep } from '../lib'
	// import { goto } from '@roxi/routify'
	let dialog: HTMLElement | null

	onMount(async () => {
		await sleep(200)
		dialog.showModal()
	})
</script>

<section class="layer nwp center" class_bg-error={!$_user}>
	<article class="text-center">
		<header>
			<nav>
				<button class="btn btn-ghost" on:click={() => dialog.showModal()}
					>open modal</button>
			</nav>
		</header>
	</article>
</section>

<dialog bind:this={dialog} class="modal">
	<div class="modal-box max-w-xs text-center" class:text-error={!$_user}>
		<h3 class="text-2xl mb-4 font-bold">Welcome To NWP</h3>
		<nav class="grid grid-cols-2 gap-2">
			{#each nav as { name, href, icon }}
				<a {href} class="btn">{name}</a>
			{/each}
		</nav>
		<div class="modal-action">
			<form method="dialog" class="grid flex-1">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn btn-ghost btn-block">Close</button>
			</form>
		</div>
	</div>
</dialog>
