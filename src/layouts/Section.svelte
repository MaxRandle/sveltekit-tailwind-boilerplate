<script lang="ts">
	import clsx from 'clsx';

	let className: string | undefined = undefined;
	export { className as class };

	/**
	 * @summary specifies the background color. Defaults to `transparent`.
	 */
	export let palette: 'primary' | 'base' | 'transparent' = 'transparent';

	/**
	 * @summary determines whether the section has top-margin. Defaults to `true`.
	 */
	export let hasTopMargin: boolean = true;

	/**
	 * @summary determines whether the section has vertical padding. Useful when palette is supplied. Defaults to `false`.
	 */
	export let isPadded: boolean = false;

	const baseClasses = 'my-20 sm:my-32';
	const marginClasses = !hasTopMargin && 'mt-0 sm:mt-0';
	const paddingClasses = isPadded && 'py-20 sm:py-32';
	const backgroundClasses = {
		base: 'bg-base-50 dark:bg-base-900',
		primary: 'bg-primary-50 dark:bg-primary-900',
		transparent: ''
	}[palette];

	const classes = clsx(baseClasses, marginClasses, paddingClasses, backgroundClasses, className);
</script>

<section class={classes}>
	<slot />
</section>
