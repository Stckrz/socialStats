import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { ItemType } from "../showcaseItem/showcaseItem";
import { useState } from "react";
import ShowcaseBox from "../showcaseBox/showcaseBox";

const SpotifyPanel: React.FC = () => {
	const [viewType, setViewType] = useState("artists")
	return (
		<>
			<div className={"bg-spotifyGray text-spotifyText rounded-lg flex flex-col w-3/4"}>
				<div className={"flex gap-2 p-4"}>
					<button onClick={() => { setViewType("artists") }} className={"rounded-full bg-black text-spotifyText aspect-square flex items-center justify-center"}>
						<MdNavigateBefore size={"2em"} />
					</button>
					<button onClick={() => { setViewType("tracks") }} className={"rounded-full bg-black text-spotifyText aspect-square flex items-center justify-center"}>
						<MdNavigateNext size={"2em"} />
					</button>
				</div>
				<div className={"text-xl font-bold text-white px-4"}>{
					viewType === "artists" ? "Top Artists" : "Top Tracks"}
				</div>
				{viewType === "tracks"
					?
					<div className={"flex items-center justify-center h-full w-full"}>
						<ShowcaseBox itemType={ItemType.album} />
					</div>

					:
					<div className={"flex items-center justify-center h-full w-full"}>
						<ShowcaseBox itemType={ItemType.artist} />
					</div>
				}
			</div>
		</>
	)
}
export default SpotifyPanel;
