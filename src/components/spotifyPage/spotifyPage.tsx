import spotifyLogo from '../../library/logos/spotify-logo-5434.svg'
const SpotifyPage = () => {
	return (
		<>
			<div className={"h-full w-full bg-black p-10"}>
				<div className={"h-full w-full bg-black rounded-md border border-spotifyGreen dorder-8 flex items-center justify-center relative"}>
					<div className={"flex items-center justify-center w-4/12 md:w-2/12 aspect-square rounded-full m-4 border-spotifyGreen border-4 absolute top-0 md:top-auto"}>
						<img className={"bg-spotifyGreen rounded-full border-black border-8"} src={spotifyLogo} />
					</div>
				</div>
			</div>
		</>
	)
}

export default SpotifyPage
