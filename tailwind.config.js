/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#7f21ff",
					200: "#5217a3",
					300: "#310d62",
				},
				secondary: "#ffbb3b",
			},
			transitionProperty: {
				height: "height",
			},
			backgroundImage: {
				"card-bg": "url('https://wallpaperaccess.com/full/1264671.jpg')",
			},
		},
	},
	plugins: [],
}
