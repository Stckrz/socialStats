import { msToHours } from "src/library/data/dataFunctions"
import { artistModel, songModel } from "src/models/spotifyModels"

export enum ItemType {
	artist,
	album
}

interface ShowcaseItemProps {
	itemType: ItemType
	artistItem?: artistModel,
	songItem?: songModel
}

const ShowcaseItem: React.FC<ShowcaseItemProps> = ({ itemType, artistItem, songItem }) => {
	const itemMarkup = () => {
		if (itemType === ItemType.album) {
			if (songItem) {
				return (
					<div className={"text-spotifyText md:h-5/6 md:w-full text-sm h-full flex flex-col"}>
						<div className={"rounded h-1/2 md:h-1/2 md:aspcet-auto aspect-square"}>
							<img className={"rounded-md object-fit h-full aspect-square"} src={songItem.artUrl}></img>
						</div>
						<div className={"h-1/3"}>
							<div className={"text-white text-md"}>{songItem.trackName}</div>
							<div>{songItem.artistName}</div>
							<div>Playtime: {msToHours(songItem.msPlayed, "hoursAndMinutes")}</div>
							<div>Play Count: {songItem.playCount}</div>
						</div>
					</div>
				)
			}
		} else if (itemType === ItemType.artist) {
			if (artistItem) {
				return (
					<div className={"text-spotifyText md:h-5/6 md:w-full text-sm h-full flex flex-col"}>
						<div className={"rounded h-2/3 md:h-1/2 aspect-square md:aspect-auto"}>
							<img className={"rounded-full object-fit h-full aspect-square"} src={artistItem.artUrl}></img>
						</div>
						<div className={"text-white text-lg"}>{artistItem.artistName}</div>
						<div className={"border-b border-b-spotifyLightGray"}>Playtime: {msToHours(artistItem.totalMsPlayed, "hoursAndMinutes")}</div>
						<div>
							<div className={"p-1"}>
								<div>Top Track:</div>
								<div className={"px-2"}>
									<div>{artistItem.topTrack.trackName}</div>
									<div>{msToHours(artistItem.topTrack.msPlayed, "hoursAndMinutes")}</div>
									<div>Play Count: {artistItem.topTrack.playCount}</div>
								</div>
							</div>
						</div>
					</div>
				)
			}
		}

	}

	return (
		<div className={"h-full w-full"}>
			{itemMarkup()}
		</div>
	)
}
export default ShowcaseItem
