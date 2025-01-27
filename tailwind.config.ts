import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Jetbrains Mono', "sans-serif"],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["black"]
	},
} satisfies Config;
