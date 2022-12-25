<script lang="ts">
	import clsx from 'clsx';

	let className: string | undefined = undefined;
	export { className as class };

	/**
	 * @summary the size of the heading. This property informs the DOM node type.
	 */
	export let level: 1 | 2 | 3;

	/**
	 * @summary explicitly sets the DOM node type irrespective of `level`.
	 */
	export let as: 'h1' | 'h2' | 'h3' | undefined = undefined;

	/**
	 * @summary specifies the font-color.
	 */
	export let color: 'base' | 'weak' | 'weaker' | 'primary' | undefined = undefined;

	const baseClasses = 'block';
	const levelClasses = {
		1: 'text-6xl md:text-7xl font-normal',
		2: 'text-4xl md:text-5xl font-medium',
		3: 'text-2xl md:text-3xl font-semibold'
	};

	const colorClasses = {
		base: 'text-base-900 dark:text-base-50',
		weak: 'text-base-500 dark:text-base-400',
		weaker: 'text-base-400 dark:text-base-500',
		primary: 'text-primary-800 dark:text-primary-300'
	};

	const tag = as ?? level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';

	const classes = clsx(baseClasses, levelClasses[level], color && colorClasses[color], className);
</script>

<svelte:element this={tag} class={classes}><slot /></svelte:element>
