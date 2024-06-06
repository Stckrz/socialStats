import { useState } from "react"
import SpotifyLogo from "src/components/spotifyPage/spotifyLogo/spotifyLogo"

const SpotifyPage = () => {
	const [pageIsOpen, setPageIsOpen] = useState(false)
	return (
		<>
			<div className={"h-full w-full bg-black p-10"}>
				<div onClick={() => { setPageIsOpen(true) }} className={"h-full w-full bg-black rounded-md border-spotifyGreen border-8 flex items-center justify-center relative"}>
					{!pageIsOpen
						? <SpotifyLogo />
						: <div className={"justify-end items-end flex w-full h-full p-4 self-end"}>
							<iframe
								className={"flex h-3/4"}
								style={{ borderRadius: "12px", boxShadow: "0px 0px 4px 2px #1dd05d" }}
								src="https://open.spotify.com/embed/playlist/0pJnmJc4qYu6IKVtSDyqJG?utm_source=generator&theme=0"
								width="30%"
								height="252"
								// frameBorder="0"
								// allowfullscreen="true"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy">
							</iframe>
						</div>
					}
				</div>
			</div>
		</>
	)
}

export default SpotifyPage
