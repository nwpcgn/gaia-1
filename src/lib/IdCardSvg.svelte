<script lang="ts">
	import { onMount } from 'svelte'
	import './idCardSvg.scss'
	import { loadImage } from './'
	export let label: string = 'Galactic Defense Force'
	export let id: number | null = null
	export let title: string | null = null
	export let tags: string | null = null
	export let info: string | null = null
	export let imgUrl: string | null = null
	export let width: number | null = null
	export let height: number | null = null
	let canvas: HTMLCanvasElement | null = null
	let ctx: CanvasRenderingContext2D | null = null
	let img: HTMLImageElement | null = null
	let loading = false

	const drawImageCover = (
		ctx: CanvasRenderingContext2D,
		img: HTMLImageElement,
		canvasWidth: number,
		canvasHeight: number
	) => {
		const imgWidth = img.width
		const imgHeight = img.height

		// Berechne das Seitenverhältnis
		const imgAspectRatio = imgWidth / imgHeight
		const canvasAspectRatio = canvasWidth / canvasHeight

		let sx: number, sy: number, sWidth: number, sHeight: number
		if (imgAspectRatio > canvasAspectRatio) {
			// Bild ist breiter als Canvas
			sWidth = imgHeight * canvasAspectRatio
			sHeight = imgHeight
			sx = (imgWidth - sWidth) / 2
			sy = 0
		} else {
			// Bild ist höher als Canvas
			sWidth = imgWidth
			sHeight = imgWidth / canvasAspectRatio
			sx = 0
			sy = (imgHeight - sHeight) / 2
		}

		ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvasWidth, canvasHeight)
	}

	const draw = async () => {
		if (ctx && canvas) {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			loading = true
			img = await loadImage(imgUrl)
			loading = false
			drawImageCover(ctx, img, canvas.width, canvas.height)
		}
	}

	const initCanvas = async () => {
		if (!canvas) {
			console.error('No Canvas Element')
			return
		}
		ctx = canvas.getContext('2d')!
		if (!ctx) {
			console.error('2D-Kontext konnte nicht abgerufen werden')
			return
		}

		draw()
	}

	onMount(() => {
		initCanvas()
	})

	$: if (ctx && id) draw()
</script>

<section>
	<svg id="id-card" viewBox="0 0 1280 720">
		<defs>
			<path
				d="M1205 0C1246.43 0 1280 33.573 1280 75L1280 645C1280 686.427 1246.43 720 1205 720L75 720C33.573 720 0 686.427 0 645L0 75C0 33.573 33.573 0 75 0L1205 0Z"
				id="path_1" />
			<path
				d="M175.909 0L0 78.1818L0 195.455C0 303.932 75.0545 405.373 175.909 430C276.764 405.373 351.818 303.932 351.818 195.455L351.818 78.1818L175.909 0L175.909 0Z"
				id="path_2" />
			<path
				d="M475 200C486.047 200 495 208.953 495 220L495 640C495 651.047 486.047 660 475 660L135 660C123.953 660 115 651.047 115 640L115 220C115 208.953 123.953 200 135 200L475 200Z"
				id="path_3" />
			<path
				d="M1132 47C1143.05 47 1152 55.9528 1152 67L1152 127C1152 138.047 1143.05 147 1132 147L135 147C123.953 147 115 138.047 115 127L115 67C115 55.9528 123.953 47 135 47L1132 47Z"
				id="path_4" />
			<path d="M530 395L1161 395L1161 570L530 570L530 395Z" id="path_5" />
			<path d="M530 323L1161 323L1161 381L530 381L530 323Z" id="path_6" />
			<path d="M530 227L1161 227L1161 309L530 309L530 227Z" id="path_7" />
			<clipPath id="clip_1">
				<use xlink:href="#path_1" />
			</clipPath>
			<clipPath id="clip_2">
				<use xlink:href="#path_2" />
			</clipPath>
			<clipPath id="clip_3">
				<use xlink:href="#path_3" />
			</clipPath>
			<clipPath id="clip_4">
				<use xlink:href="#path_4" />
			</clipPath>
			<clipPath id="clip_5">
				<use xlink:href="#path_5" />
			</clipPath>
			<clipPath id="clip_6">
				<use xlink:href="#path_6" />
			</clipPath>
			<clipPath id="clip_7">
				<use xlink:href="#path_7" />
			</clipPath>
		</defs>
		<g id="card-wrapp">
			<g id="back">
				<use
					stroke="none"
					fill="currentColor"
					class="fill-base-300"
					xlink:href="#path_1" />
				<g clip-path="url(#clip_1)">
					<use
						xlink:href="#path_1"
						fill="none"
						stroke="#1EC2E7"
						class=" "
						stroke-width="20" />
				</g>
			</g>
			<g id="badge" transform="translate(882 215)" opacity="0.2">
				<g id="badge-out">
					<use stroke="none" fill="#000000" xlink:href="#path_2" />
					<g clip-path="url(#clip_2)">
						<use
							xlink:href="#path_2"
							fill="none"
							stroke="#1EC2E7"
							stroke-width="20" />
					</g>
				</g>
				<path
					d="M320.803 198.955C320.803 288.007 258.982 371.283 175.909 391.5C92.8364 371.283 31.0149 288.007 31.0149 198.955L31.0149 102.682L175.909 38.5L320.803 102.682L320.803 198.955M175.909 359.409C236.282 343.364 288.605 271.801 288.605 202.485L288.605 123.541L175.909 73.4792L63.2136 123.541L63.2136 202.485C63.2136 271.801 115.537 343.364 175.909 359.409M225.012 279.182L175.426 249.498L126.001 279.182L139.041 223.023L95.4124 185.476L153.048 180.502L175.426 127.552L197.965 180.342L255.6 185.316L211.81 223.023L225.012 279.182"
					id="Badge-Inner"
					fill="#FFFFFF"
					fill-rule="evenodd"
					stroke="none" />
			</g>
			<g id="pic">
				<use
					stroke="none"
					fill="#000000"
					fill-opacity="0.5"
					xlink:href="#path_3" />
				<g clip-path="url(#clip_3)">
					<use
						xlink:href="#path_3"
						fill="none"
						stroke="#1EC2E7"
						stroke-width="20" />
				</g>
			</g>
			<g id="header">
				<use
					stroke="none"
					fill="#000000"
					fill-opacity="0.5"
					xlink:href="#path_4" />
				<g clip-path="url(#clip_4)">
					<use
						xlink:href="#path_4"
						fill="none"
						stroke="#1EC2E7"
						class=""
						stroke-width="20" />
				</g>
			</g>
			<g id="text-bg3">
				<use
					stroke="none"
					fill="#000000"
					fill-opacity="0.5"
					xlink:href="#path_5"
					fill-rule="evenodd" />
				<g clip-path="url(#clip_5)">
					<use
						xlink:href="#path_5"
						fill="none"
						stroke="#1EC2E7"
						stroke-width="2"
						stroke-dasharray="4 4" />
				</g>
			</g>
			<g id="text-bg2">
				<use
					stroke="none"
					fill="#000000"
					fill-opacity="0.5"
					xlink:href="#path_6"
					fill-rule="evenodd" />
				<g clip-path="url(#clip_6)">
					<use
						xlink:href="#path_6"
						fill="none"
						stroke="#1EC2E7"
						stroke-width="2"
						stroke-dasharray="4 4" />
				</g>
			</g>
			<g id="text-bg1">
				<use
					stroke="none"
					fill="#000000"
					fill-opacity="0.5"
					xlink:href="#path_7"
					fill-rule="evenodd" />
				<g clip-path="url(#clip_7)">
					<use
						xlink:href="#path_7"
						fill="none"
						stroke="#1EC2E7"
						stroke-width="2"
						stroke-dasharray="4 4" />
				</g>
			</g>
		</g>

		<foreignObject x="136" y="52" width="1000" height="92" class="h1"
			>{label}</foreignObject>
		<foreignObject x="550" y="232" width="600" height="72" class="h2">
			{loading ? '' : title}
			<div
				class="layer nwp transition-opacity duration-300 ease-in center rounded-box"
				class:opacity-0={!loading}>
				<span class="loading loading-bars text-info loading-sm"></span>
			</div>
		</foreignObject>
		<foreignObject x="550" y="322" width="600" height="60" class="h3">
			{loading ? '' : tags}
			<div
				class="layer nwp transition-opacity duration-300 ease-in center rounded-box"
				class:opacity-0={!loading}>
				<span class="loading loading-bars text-info loading-sm"></span>
			</div>
		</foreignObject>
		<foreignObject x="550" y="400" width="600" height="160" class="h4">
			{loading ? '' : info}
			<div
				class="layer nwp transition-opacity duration-300 ease-in center rounded-box"
				class:opacity-0={!loading}>
				<span class="loading loading-bars text-info loading-lg"></span>
			</div>
		</foreignObject>
		<foreignObject x="136" y="220" width="342" height="422" class="c1">
			<canvas class="rounded-box" bind:this={canvas} width="340" height="420"
			></canvas>
			<div
				class="layer nwp bg-black bg-opacity-10 transition-opacity duration-300 ease-in center rounded-box"
				class:opacity-0={!loading}>
				<span class="loading loading-bars text-info loading-lg"></span>
			</div>
		</foreignObject>
	</svg>
</section>
