const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			base: {
				25: 'var(--base-25)',
				50: 'var(--base-50)',
				100: 'var(--base-100)',
				200: 'var(--base-200)',
				300: 'var(--base-300)',
				400: 'var(--base-400)',
				500: 'var(--base-500)',
				600: 'var(--base-600)',
				700: 'var(--base-700)',
				800: 'var(--base-800)',
				900: 'var(--base-900)'
			},
			primary: {
				25: 'var(--primary-25)',
				50: 'var(--primary-50)',
				100: 'var(--primary-100)',
				200: 'var(--primary-200)',
				300: 'var(--primary-300)',
				400: 'var(--primary-400)',
				500: 'var(--primary-500)',
				600: 'var(--primary-600)',
				700: 'var(--primary-700)',
				800: 'var(--primary-800)',
				900: 'var(--primary-900)'
			}
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '24px',
				md: '40px'
			},
			screens: {
				DEFAULT: '100%',
				sm: '640px',
				md: '768px',
				lg: '1024px'
			}
		}
	},
	plugins: []
};
