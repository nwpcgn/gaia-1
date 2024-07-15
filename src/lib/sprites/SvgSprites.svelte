<script>
	import FetherIcons from './FetherIcons.svelte'

	import { onMount } from 'svelte'
	// import Icons3 from './Icons3.svelte'
	import Gb42 from './Gb42.svelte'
	export let list = []
	let elem
	onMount(() => {
		const qe = elem.querySelectorAll('symbol')
		list = []
		qe.forEach((element) => {
			list.push(element.id)
		})
		console.log({ list })
	})
</script>

<svg
	bind:this={elem}
	width="0"
	height="0"
	fill="none"
	style="visibility: hidden; position: absolute"
	aria-hidden="true">
	<FetherIcons></FetherIcons>

	<Gb42 />
</svg>
