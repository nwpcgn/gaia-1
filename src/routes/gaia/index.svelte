<script lang="ts">
	import { onMount } from 'svelte'
	import { sleep } from '../../lib'
	// import IdCardSvg from '../../lib/IdCardSvg.svelte'
	let time = 0
	let duration
	let paused = true
	let showControls = false
	let volume = 0.1
	let showControlsTimeout
	onMount(async () => {
		await sleep(12000)
		paused = false
	})
</script>

<section class="layer nwp flex flex-col fix">
	<header
		class="space-y-4 text-center grid place-content-center flex-1 bg-red-600 text-red-50">
		<h1 class="text-8xl font-bold">Gaia</h1>
	</header>
	<article class="h-2/3 flex items-center bg-black">
		<video
			class="w-full h-full object-contain"
			bind:currentTime={time}
			bind:duration
			bind:paused
			controls={showControls}
			src="/video/zepe61.mp4"
			poster="/img/gaia/511.jpg"
			bind:volume></video>
	</article>
</section>
