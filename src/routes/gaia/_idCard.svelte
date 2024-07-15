<script>
	import IdCardSvg from '../../lib/IdCardSvg.svelte'
	const test = {
		id: 1,
		title: 'Amirican Girl',
		tags: 'Schnelligkeit',
		info: 'In Batman Hush half Catwoman Batman bei der Loesung eines mysterioesen Falls und bewies dabei dass sie trotz ihres Rufes als Diebin eine moralische Seite hat.',
		imgUrl: 'https://www.zen-pictures.net/db_titles/zepe/zepe13/pac_s.jpg',
		width: 104,
		height: 148
	}
</script>

<IdCardSvg {...test}></IdCardSvg>
