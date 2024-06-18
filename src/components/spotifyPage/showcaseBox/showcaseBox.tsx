import ShowcaseItem, { ItemType } from "../showcaseItem/showcaseItem"
import { spotifyData } from "src/library/data/spotifyData"

interface ShowcaseBoxProps {
	itemType: ItemType
}
const ShowcaseBox: React.FC<ShowcaseBoxProps> = ({ itemType }) => {
	return (
		<div className={"flex w-full overflow-scroll md:overflow-visible md:m-0 h-3/5 md:h-full p-2"}>
			<div className={"items-start md:justify-start gap-2 flex flex-shrink-0 md:flex-shrink h-full w-full"}>
				{itemType === ItemType.album ?
					spotifyData.topTracksByPlayCount.map((track) => {
						return (
							<ShowcaseItem itemType={itemType} songItem={track} />
						)
					})
					:
					spotifyData.topArtistsByPlayTime.map((artist) => {
						return (
							<ShowcaseItem itemType={itemType} artistItem={artist} />
						)
					})

				}
			</div>
		</div>
	)
}
export default ShowcaseBox

