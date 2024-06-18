import { useState } from "react"
import { Spotify } from "react-spotify-embed"
import SpotifyLogo from "src/components/spotifyPage/spotifyLogo/spotifyLogo"
import { useViewport } from "src/hooks/useViewport"
import SpotifyPanel from "./spotifyPanel/spotifyPanel";
import SpotifySidePanel from "./sidePanel/sidePanel";
import Playlists from "./playlists/playlists";
import { ItemType } from "./showcaseItem/showcaseItem";
import ShowcaseBox from "./showcaseBox/showcaseBox";

const SpotifyPage = () => {
	const [pageIsOpen, setPageIsOpen] = useState(false);
	const width = useViewport().width;
	const [playlist, setPlaylist] = useState("https://open.spotify.com/playlist/6mU8n9Xlp5W9bl7OVtQQ3C?si=44fd35fc58064134")

	return (
		<>
			<div className={"h-full w-full bg-black p-10"}>
				<div onClick={() => { setPageIsOpen(true) }} className={"h-full w-full bg-black rounded-md border-spotifyGreen border-8 flex items-center justify-center relative"}>
					{!pageIsOpen
						? <SpotifyLogo />
						: <div className={"justify-end items-end flex w-full h-full p-4 self-end"}>
							{width < 800
								?
								<div className={"flex flex-col h-full w-full gap-2"}>
									<div className={"h-5/6 flex flex-col gap-0"}>
										<Playlists setPlaylist={setPlaylist} />
										<ShowcaseBox itemType={ItemType.album} />
										<ShowcaseBox itemType={ItemType.artist} />
									</div>
									<div className={"h-1/6"}>
										<Spotify wide height={"100%"} link="https://open.spotify.com/playlist/0pJnmJc4qYu6IKVtSDyqJG?si=3f8737eb991141c9" />
									</div>
								</div>
								: <div className={"flex flex-col h-full w-full gap-2"}>
									<div className={"relative w-full h-5/6 flex p-0 gap-2"}>
										<SpotifySidePanel setPlaylist={setPlaylist} />
										<SpotifyPanel />
									</div>
									<div className={"h-1/6"}>
										<Spotify wide width="100%" height={"100%"} link={playlist} />
									</div>
								</div>
							}
						</div>
					}
				</div>
			</div>
		</>
	)
}

export default SpotifyPage
