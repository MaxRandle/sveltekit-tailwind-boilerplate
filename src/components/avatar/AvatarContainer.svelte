<script lang="ts">
	import clsx from 'clsx';
	import { setAvatarContainerContext } from './@types';

	setAvatarContainerContext();

	const baseClasses = 'flex items-center';

	const classes = clsx(baseClasses, $$props.class);
</script>

<div class={classes}>
	<slot />
</div>
