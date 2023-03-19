/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				graphie: ['graphie', 'serif']
			},
			colors: {
				cgreen: '#00FF00'
			}
		}
	},
	plugins: []
};
