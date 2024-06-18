import { SetStateAction } from "react"
import { useViewport } from "src/hooks/useViewport"
import { spotifyData } from "src/library/data/spotifyData"

interface PlaylistsProps {
	setPlaylist: React.Dispatch<SetStateAction<string>>
}
const Playlists: React.FC<PlaylistsProps> = ({ setPlaylist }) => {
	const width = useViewport().width
	const handleSpotifyLink = (link: string) => {
		setPlaylist(link)
	}
	return (
		width > 800
			? <div className={"flex flex-col"}>
				<div className={"text-white text-lg"}>Playlists</div>
				{spotifyData.playlists.map((item) => {
					return (
						<div onClick={() => { handleSpotifyLink(item.spotifyLink) }} className={"flex text-white gap-2 hover:bg-spotifyLightGray p-2 rounded-md cursor-pointer text-sm"}>
							<div className={"h-1/6 w-1/6"}>
								<img className={"rounded-md"} src={item.artUrl} />
							</div>
							<div>{item.name}</div>
						</div>
					)
				})
				}
			</div>
			: <div className={"grid grid-cols-2 gap-1 grid-rows-2"}>
				{spotifyData.playlists.map((item) => {
					return (
						<div onClick={() => { handleSpotifyLink(item.spotifyLink) }} className={"flex items-center text-white gap-2 bg-spotifyLightGray rounded-md cursor-pointer"}>
							<div className={"w-1/3 h-full"}>
								<img className={"rounded-md object-contain h-full"} src={item.artUrl} />
							</div>
							<div className={"text-xs"}>{item.name}</div>
						</div>
					)
				})
				}
			</div >

	)
}
export default Playlists
