import { SetStateAction } from "react";
import Playlists from "../playlists/playlists";

interface SpotifySidePanelProps{
	setPlaylist: React.Dispatch<SetStateAction<string>>
}
const SpotifySidePanel: React.FC<SpotifySidePanelProps> = ({setPlaylist}) => {

	return (
		<>
			<div className={"bg-spotifyGray text-spotifyText rounded-lg p-4 w-1/4 h-full flex flex-col gap-1"}>
				<h1 className={"text-xl"}>My Library</h1>
				<div className={"text-sm"}>
					<div>Liked Songs: 355</div>
					<div>Created Playlists: 9</div>
					<div>Total Time Played: 2086 hours</div>
				</div>
				<Playlists setPlaylist={setPlaylist}/>
			</div>
		</>
	)
}
export default SpotifySidePanel;
