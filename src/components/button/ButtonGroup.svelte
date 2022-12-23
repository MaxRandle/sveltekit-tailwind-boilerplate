<script lang="ts">
	import { setContext } from 'svelte';
	import clsx from 'clsx';

	const baseClasses = 'inline-flex rounded-full shadow-sm -space-x-px';

	setContext('group', {});
</script>

<div class={clsx(baseClasses, $$props.class)} role="group">
	<slot />
</div>
