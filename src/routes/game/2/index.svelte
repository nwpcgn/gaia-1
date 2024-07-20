<script lang="ts">
	import { onMount } from 'svelte'
	let canvas: HTMLCanvasElement
	let context: CanvasRenderingContext2D
	let scrollCounter: number
	let cameraY: number
	let current: number
	let mode: string
	let xSpeed: number
	let ySpeed: number = 5
	let height: number = 50
	export let boxWidth: number = 800
	export let boxHeight: number = 600
	interface Box {
		x: number
		y: number
		width: number
	}

	let boxes: Box[] = []
	boxes[0] = {
		x: 300,
		y: 300,
		width: Math.floor(boxWidth * 0.4)
	}

	let debris: Box = {
		x: 0,
		y: 0,
		width: 0
	}

	function newBox() {
		boxes[current] = {
			x: 0,
			y: (current + 10) * height,
			width: boxes[current - 1].width
		}
	}

	function gameOver() {
		mode = 'gameOver'
		context.fillText('Game over. Click to play again!', 50, 50)
	}

	function animate() {
		if (mode != 'gameOver') {
			context.clearRect(0, 0, canvas.width, canvas.height)
			context.fillText('Score: ' + (current - 1).toString(), 100, 200)
			for (let n = 0; n < boxes.length; n++) {
				let box = boxes[n]
				context.fillStyle = `rgb(${n * 16},${n * 16},${n * 16})`
				context.fillRect(box.x, 600 - box.y + cameraY, box.width, height)
			}
			context.fillStyle = 'red'
			context.fillRect(debris.x, 600 - debris.y + cameraY, debris.width, height)
			if (mode == 'bounce') {
				boxes[current].x = boxes[current].x + xSpeed
				if (
					xSpeed > 0 &&
					boxes[current].x + boxes[current].width > canvas.width
				)
					xSpeed = -xSpeed
				if (xSpeed < 0 && boxes[current].x < 0) xSpeed = -xSpeed
			}
			if (mode == 'fall') {
				boxes[current].y = boxes[current].y - ySpeed
				if (boxes[current].y == boxes[current - 1].y + height) {
					mode = 'bounce'
					let difference = boxes[current].x - boxes[current - 1].x
					if (Math.abs(difference) >= boxes[current].width) {
						gameOver()
					}
					debris = {
						x: 0,
						y: boxes[current].y,
						width: Math.abs(difference)
					}
					if (boxes[current].x > boxes[current - 1].x) {
						boxes[current].width = boxes[current].width - difference
						debris.x = boxes[current].x + boxes[current].width
					} else {
						debris.x = boxes[current].x - difference
						boxes[current].width = boxes[current].width + difference
						boxes[current].x = boxes[current - 1].x
					}
					if (xSpeed > 0) xSpeed++
					else xSpeed--
					current++
					scrollCounter = height
					newBox()
				}
			}
			debris.y = debris.y - ySpeed
			if (scrollCounter) {
				cameraY++
				scrollCounter--
			}
		}
		window.requestAnimationFrame(animate)
	}

	function restart() {
		boxes.splice(1, boxes.length - 1)
		mode = 'bounce'
		cameraY = 0
		scrollCounter = 0
		xSpeed = 2
		current = 1
		newBox()
		debris.y = 0
	}

	function run() {
		canvas = document.getElementById('myCanvas') as HTMLCanvasElement
		context = canvas.getContext('2d') as CanvasRenderingContext2D
		canvas.onpointerdown = function () {
			if (mode == 'gameOver') restart()
			else {
				if (mode == 'bounce') mode = 'fall'
			}
		}
		restart()
		animate()
	}

	onMount(() => {
		console.log('DOMContentLoaded')
		run()
	})
</script>

<section class="layer nwp fix center">
	<canvas id="myCanvas" width={boxWidth} height={boxHeight}></canvas>
</section>
