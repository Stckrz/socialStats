import spotifyLogo from 'src/library/logos/spotify-logo-5434.svg'
import './spotifyLogo.css';

const SpotifyLogo = () => {
	return (
		<>
			<div className={"spotify-logo-background flex items-center justify-center w-4/12 md:w-2/12 aspect-square rounded-full absolute top-auto"}>
				<img
					className={"spotify-logo-big bg-spotifyGreen h-5/6 aspect-square rounded-full border-black border-4 flex items-center justify-center"}
					src={spotifyLogo}
				/>
			</div>
		</>
	)
}

export default SpotifyLogo
