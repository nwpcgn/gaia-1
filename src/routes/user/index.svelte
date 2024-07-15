<script>
	import nav from '../../lib/nav'
	import {
		supabase,
		signIn,
		signOut,
		getUser,
		fetchDb,
		_user
	} from '../../lib/db'
</script>

<svelte:head>
	<title>User-Settings</title>
</svelte:head>

<section class="layer nwp center">
	<article class=" text-center p-12 card bg-base-100 rounded-box shadow-xl">
		<div class="admin">
			<header class="space-y-4">
				<h1 class="text-5xl font-bold">Admin-Panel</h1>
				{#if $_user}
					<h2 class="text-xl font-light text-neutral">{$_user.email}</h2>
					<nav>
						<a href="/user/signout" class="font-bold text-error">Sign Out</a>
					</nav>
					<nav class="flex justify-between gap-1">
						{#each nav as { name, href, icon }}
							{#if href !== '/user'}
								<a {href} class="font-bold text-info">{name}</a>
							{:else}
								<a href="/" class="font-bold text-info">Home</a>
							{/if}
						{/each}
					</nav>
				{:else}
					<h2 class="text-xl font-light text-neutral">
						Nothing to see here, yet...
					</h2>
				{/if}
			</header>
		</div>
	</article>
</section>
