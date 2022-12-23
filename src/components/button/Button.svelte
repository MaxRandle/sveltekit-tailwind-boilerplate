<script lang="ts">
	import clsx from 'clsx';
	import { getContext } from 'svelte';

	const group = getContext('group');

	/**
	 * @summary specifies an href and causes the DOM node type to be an anchor tag.
	 */
	export let href: string | undefined = undefined;
	const tag = href ? 'a' : 'button';

	/**
	 * @summary determines the button color. Defaults to `base`.
	 */
	export let palette: 'base' | 'primary' = 'base';

	const baseClasses = 'py-2 font-bold tracking-wider text-sm border';
	const groupClasses =
		'rounded-none first:rounded-l-full last:rounded-r-full px-4 first:pl-5 last:pr-5 hover:relative focus-visible:relative';
	const noGroupClasses = 'px-5 rounded-full shadow-sm';
	const borderClasses = {
		base: 'border-base-300 hover:border-base-400 dark:border-base-600 hover:dark:border-base-500',
		primary: 'border-primary-900 hover:border-primary-800'
	};
	const paletteClasses = {
		base: 'bg-base-50 dark:bg-base-900 hover:bg-base-100 dark:hover:bg-base-800 text-base-900 dark:text-base-50 ',
		primary: 'text-base-50 bg-primary-900 hover:bg-primary-800'
	};
	const disabledClasses = 'cursor-not-allowed pointer-events-none opacity-50';

	const classes = clsx(
		baseClasses,
		group ? groupClasses : noGroupClasses,
		borderClasses[palette],
		paletteClasses[palette],
		$$props.disabled && disabledClasses,
		$$props.class
	);
</script>

<svelte:element this={tag} class={classes}><slot /></svelte:element>
