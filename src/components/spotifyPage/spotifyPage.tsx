import { useState } from "react"
import { Spotify } from "react-spotify-embed"
import SpotifyLogo from "src/components/spotifyPage/spotifyLogo/spotifyLogo"
import { useViewport } from "src/hooks/useViewport"

const SpotifyPage = () => {
	const [pageIsOpen, setPageIsOpen] = useState(false);
	const width = useViewport().width;

	return (
		<>
			<div className={"h-full w-full bg-black p-10"}>
				<div onClick={() => { setPageIsOpen(true) }} className={"h-full w-full bg-black rounded-md border-spotifyGreen border-8 flex items-center justify-center relative"}>
					{!pageIsOpen
						? <SpotifyLogo />
						: <div className={"justify-end items-end flex w-full h-full p-4 self-end"}>
							{width < 800
								? <Spotify wide height={"15%"} link="https://open.spotify.com/playlist/0pJnmJc4qYu6IKVtSDyqJG?si=3f8737eb991141c9" />
								: <div className={"h-1/2 w-1/3 justify-end items-end flex rounded-xl self-end"}><Spotify width="100%" height={"100%"} link="https://open.spotify.com/playlist/0pJnmJc4qYu6IKVtSDyqJG?si=3f8737eb991141c9" /></div>
							}
						</div>
					}
				</div>
			</div>
		</>
	)
}

export default SpotifyPage
