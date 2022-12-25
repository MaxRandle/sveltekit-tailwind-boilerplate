<script lang="ts">
	import clsx from 'clsx';

	let className: string | undefined = undefined;
	export { className as class };

	/**
	 * @summary the visual size of the text, defaults to 'body'
	 */
	export let level: 'body' | 'caption' = 'body';

	/**
	 * @summary specifies the text color, defaults to 'inherit'
	 */
	export let color: 'base' | 'weak' | 'primary' | undefined = undefined;

	/**
	 * @summary Defaults to `normal`.
	 *
	 * `normal` = `400`
	 *
	 * `medium` = `500`
	 *
	 * `semibold` = `600`
	 *
	 * `bold` = `700`
	 */
	export let weight: 'normal' | 'medium' | 'semibold' | 'bold' = 'normal';

	const baseClasses = '';
	const levelClasses = {
		body: 'text-base md:text-lg',
		caption: 'text-xs md:text-sm'
	};
	const colorClasses = {
		base: 'text-base-900 dark:text-base-50',
		weak: 'text-base-500 dark:text-base-400',
		weaker: 'text-base-400 dark:text-base-500',
		primary: 'text-primary-800 dark:text-primary-300'
	};
	const weightClasses = {
		normal: 'font-normal',
		medium: 'font-medium',
		semibold: 'font-semibold',
		bold: 'font-bold'
	};

	const classes = clsx(
		baseClasses,
		levelClasses[level],
		color && colorClasses[color],
		weightClasses[weight],
		className
	);
</script>

<p class={classes}>
	<slot />
</p>
