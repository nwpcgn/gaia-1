<script lang="ts">
	import { signOut, _user } from '../../../lib/db'
	import { sleep } from '../../../lib'
	import { goto } from '@roxi/routify'
	import { onMount } from 'svelte'
	onMount(async () => {
		await signOut()
		await sleep(100)
		$goto('/')
	})
</script>
