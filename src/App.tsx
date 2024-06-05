// import './App.css'
import FacebookPage from "./components/facebookPage/facebookPage"
import SpotifyPage from "./components/spotifyPage/spotifyPage"
import TikTokPage from "./components/tiktokPage/tiktokPage"

function App() {

	return (
		<>
			<div className={"snap-y snap-mandatory h-screen scroll-smooth overflow-y-scroll"}>
				<div className={"snap-center snap-always h-screen w-full"}>
					<FacebookPage />
				</div>
				<div className={"snap-center h-screen w-full bg-blue-900"}>
					<SpotifyPage />
				</div>
				<div className={"snap-center h-screen w-full bg-red-900"}>
					<TikTokPage />
				</div>
			</div>
		</>
	)
}

export default App
