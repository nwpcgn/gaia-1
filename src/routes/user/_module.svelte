<script>
	import { goto } from '@roxi/routify'
	import { _user } from '../../lib/db'
	import { onMount } from 'svelte'

	onMount(() => {
		if (!$_user) $goto('/user/signin')
	})
</script>

<!-- routify:meta order=2 -->

<slot />
