<script lang="ts">
	import { Layer } from 'svelte-canvas'
	import { loadImage } from '../../../lib'
	import { onMount } from 'svelte'
	let image: HTMLImageElement | null = null
	let intId: number | null = null
	let sx = 0,
		sy = 0,
		sWidth = 0,
		sHeight = 0,
		dx = 0,
		dy = 0,
		dWidth = 0,
		dHeight = 0
	const render = ({ context, width, height, time }) => {
		sx = 0
		sy = 0
		sWidth = image?.width
		sHeight = image?.height
		dy = height - sHeight
		dWidth = sWidth
		dHeight = sHeight
		// console.log({ sWidth, sHeight, dWidth, dHeight, dx, dy })

		context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
		context.drawImage(
			image,
			sx,
			sy,
			sWidth,
			sHeight,
			dx + dWidth,
			dy,
			dWidth,
			dHeight
		)
		context.font = `${width / 10}px sans-serif`
		context.textAlign = 'center'
		context.textBaseline = 'middle'
		context.fillStyle = 'tomato'
		context.fillText('NWP-Studio', width / 2, height / 2)
	}

	const init = async () => {
		image = await loadImage('https://i.imgur.com/vd2CHER.png')
		return image
	}

	const update = () => {
		console.log('update')

	}

	onMount(() => {
		if (intId) clearInterval(intId)

		intId = setInterval(update, 100)

		return () => {
			if (intId) clearInterval(intId)
		}
	})
</script>

{#await init() then _}
	<Layer {render} />
{/await}
