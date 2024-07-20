<script>
	import { url, isActive, node } from '@roxi/routify'
	export let parent = 'btm-nav'
</script>

<nav class={parent}>
	<!-- iterates over each child page -->
	{#each $node.linkableChildren as childNode}
		<a href={$url(childNode.path)} class:isActive={$isActive(childNode.path)}>
			<!-- title can be overwritten using `meta.title` -->
			{childNode.title}
		</a>
	{/each}
</nav>
