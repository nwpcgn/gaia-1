<script lang="ts">
	import { _user, fetchDb } from '../../../lib/db'
	import IdCardSvg from '../../../lib/IdCardSvg.svelte'
	const options = {
		// userid: $_user.id,
		db: 'gaia-1',
		keys: 'id,title,tags,info,imgUrl,width,height',
		od: 'id',
		aspending: true
	}
	let list = []
	let current = 0

	const fetchData = async () => {
		const data = await fetchDb(options)
		list = data
	}

	const changeHero = async (id: number = 0) => {
		current = id
	}

	let promise2
	let promise = fetchData()
</script>

<section class="layer nwp">
	<article class="content">
		<header class="space-y-4">
			<h1 class="text-4xl font-bold">Gaia</h1>
		</header>

		{#await promise then _}
			<div class="flex items-start gap-8 mt-8">
				<div class="p-4">
					<ul class="menu bg-base-200 shadow-xl rounded-box p-4">
						<li class="menu-title">Agents</li>
						{#each list as { id, title, tags, info, imgUrl, width, height }, i}
							<li>
								<button
									class:text-info={current == i}
									on:click={() => changeHero(i)}>
									{title}
								</button>
							</li>
						{/each}
					</ul>
				</div>
				<div class="flex-1">
					<IdCardSvg {...list[current]} />
				</div>
			</div>
		{/await}
	</article>
</section>
