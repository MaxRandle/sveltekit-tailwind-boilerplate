<script lang="ts">
	import clsx from 'clsx';
	import { setAvatarGroupContext } from './@types';

	setAvatarGroupContext();

	const baseClasses = 'inline-flex items-center';

	const classes = clsx(baseClasses);
</script>

<div class={classes}><slot /></div>
