<script lang="ts">
	import './index.scss'
	import { onMount } from 'svelte'
	import { _user } from '../lib/db'
	import nav from '../lib/nav'
	import { sleep } from '../lib'
	// import { goto } from '@roxi/routify'
	let menu: HTMLElement | null

	onMount(async () => {
		await sleep(200)
		run()
	})

	const run = () => {
		console.log('app run')
		const listItems = menu.querySelectorAll('a')
		listItems.forEach((item, index) => {
			sleep(index * 100).then(() => {
				item.classList.add('on')
			})
		})
	}
</script>

<section class="layer nwp center" class_bg-error={!$_user}>
	<article class="text-center">
		<h3 class="text-2xl mb-4 font-bold">Welcome To NWP</h3>
		<nav bind:this={menu} class="grid grid-cols-2 gap-2">
			{#each nav as { name, href, icon }}
				<a {href} class="btn menu-link">{name}</a>
			{/each}
		</nav>
	</article>
</section>
