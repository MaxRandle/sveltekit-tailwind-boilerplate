<script lang="ts">
	import clsx from 'clsx';

	export let className: string | undefined = undefined;
	export { className as class };

	/**
	 * @summary specifies an href and causes the DOM node type to be an anchor tag.
	 */
	export let href: string | undefined = undefined;
	const tag = href ? 'a' : 'button';

	/**
	 * @summary determines the button color. Defaults to `base`.
	 */
	export let palette: 'base' | 'primary' = 'base';

	const baseClasses = 'px-4 py-2 font-bold tracking-wider text-sm rounded-lg border';
	const borderClasses = {
		base: 'border-base-300 dark:border-base-600 hover:border-base-400 hover:dark:border-base-500',
		primary: 'border-primary-900 hover:border-primary-800'
	};
	const paletteClasses = {
		base: 'bg-base-50 dark:bg-base-900 hover:bg-base-100 dark:hover:bg-base-800 text-base-900 dark:text-base-50 ',
		primary: 'text-base-50 bg-primary-900 hover:bg-primary-800'
	};
	const disabledClasses = 'cursor-not-allowed pointer-events-none opacity-50';

	const classes = clsx(
		className,
		baseClasses,
		borderClasses[palette],
		paletteClasses[palette],
		$$props.disabled && disabledClasses
	);
</script>

<svelte:element this={tag} class={classes}><slot /></svelte:element>
