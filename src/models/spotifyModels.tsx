export interface artistTopTrack {
	trackName: string,
	msPlayed: number,
	playCount: number
}

export interface artistModel {
	artistName: string,
	artUrl: string,
	totalMsPlayed: number,
	topTrack: artistTopTrack
}

export interface songModel {
	artistName: string,
	artUrl: string,
	trackName: string,
	msPlayed: number,
	playCount: number,
}

// 2 Months 3 Weeks 5 Days 1 Hours 42 Minutes 40 Seconds
// 2086 hours
