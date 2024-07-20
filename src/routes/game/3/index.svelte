<script lang="ts">
	import { game } from '../../../lib/'
	import BgImage from './BgImage.svelte'
	import { Canvas, Layer } from 'svelte-canvas'

</script>

<section
	class="layer nwp fix"
	bind:clientHeight={height}
	bind:offsetWidth={width}>
	<Canvas autoplay {width} {height}>
		<BgImage></BgImage>
	</Canvas>
</section>

