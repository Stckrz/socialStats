/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				"spotifyGreen": "#1DD05D",
				"tiktokBlue": "#25EdE6",
				"tiktokRed": "#F62A51",
				"facebookBlueDark": "#3C5A99",
				"facebookBlueLight": "#1773EA",
				"facebookGrayDark": "#18191A",
				"facebookGrayLight": "#242526",
				"facebookGrayBorder": "#393A3B",
				"facebookGrayText": "#A3A6AA",
				"facebookLightIcon": "#E4E6EB"
			}
		},
  },
  plugins: [],
}

