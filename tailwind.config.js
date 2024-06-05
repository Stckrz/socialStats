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
				"tiktokRed": "#F62A51"
				"facebookBlueDark": "#394398"
				"facebookBlueLight": "#1773EA"
			}
		},
  },
  plugins: [],
}

