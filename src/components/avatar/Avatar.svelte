<script lang="ts">
	import clsx from 'clsx';
	import { getAvatarGroupContext } from './@types';

	const group = getAvatarGroupContext();

	/**
	 * @summary Image url.
	 */
	export let src: string | undefined = undefined;

	/**
	 * @summary Alt text for the image. Required if `src` is supplied.
	 */
	export let alt: string | undefined = undefined;

	/**
	 * @summary Determines the width and height. Defaults to `md`.
	 *
	 * `sm` = `2rem`.
	 *
	 * `md` = `3rem`.
	 *
	 * `lg` = `4rem`.
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md';

	const baseClasses = [
		'avatar',
		'relative flex items-center justify-center',
		'rounded-full overflow-hidden',
		'bg-primary-50 text-primary-600',
		'tracking-wide font-medium'
	];
	const sizeClasses = {
		sm: 'avatar-sm w-10 h-10 text-base',
		md: 'avatar-md w-12 h-12 text-lg',
		lg: 'avatar-lg w-14 h-14 text-xl'
	};
	const groupClasses = '-ml-4 first:ml-0 border-2 border-current-bg';

	const classes = clsx(baseClasses, sizeClasses[size], group && groupClasses, $$props.class);

	const imageClasses = 'absolute inset';
</script>

<div class={classes}>
	{#if src}
		<img class={imageClasses} {src} {alt} />
	{/if}
	<slot />
</div>

<style>
	.avatar-sm {
		--avatar-icon-size: 1.5rem;
	}
	.avatar-md {
		--avatar-icon-size: 1.75rem;
	}
	.avatar-lg {
		--avatar-icon-size: 2rem;
	}

	.avatar :global(svg) {
		width: var(--avatar-icon-size);
		height: var(--avatar-icon-size);
	}
</style>
