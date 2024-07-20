<script lang="ts">
	import { loadImage } from '../../../lib'
	import BgImage from './BgImage.svelte'

	import { Canvas, Layer } from 'svelte-canvas'
	let width = 0
	let height = 0
	const render = ({ context, width, height }) => {
		context.font = `${width / 10}px sans-serif`
		context.textAlign = 'center'
		context.textBaseline = 'middle'
		context.fillStyle = 'tomato'
		context.fillText('hello world', width / 2, height / 2)
	}
</script>

<section
	class="layer nwp fix"
	bind:clientHeight={height}
	bind:offsetWidth={width}>
	<Canvas autoplay {width} {height}>
		<BgImage></BgImage>
	</Canvas>
</section>

