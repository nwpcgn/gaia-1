<script>
	import { goto, url, isActive } from '@roxi/routify'
	import { _user } from '../../lib/db'
	import { onMount } from 'svelte'
	const nav = [
		{ name: 'Game 1', href: '/game/1' },
		{ name: 'Game 2', href: '/game/2' },
		{ name: 'Game 3', href: '/game/3' }
	]
	onMount(() => {
		if (!$_user) $goto('/user')
	})
</script>

<section class="layer nwp fix flex flex-col">
	<article class="content" style="--py: 0;">
		<div class="flex items-end justify-between">
			<a href="/game" class="text-2xl font-bold py-2">Games</a>
			<nav role="tablist" class="tabs tabs-bordered">
				{#each nav as { name, href }}
					<a {href} class="tab" class:tab-active={$isActive(href)}>{name}</a>
				{/each}
			</nav>
		</div>
	</article>
	<div class="relative flex-1 border-t">
		<slot />
	</div>
</section>
