import swimming from 'src/library/images/spotify/swimming.png'
import violent from 'src/library/images/spotify/violentAcoustic.jpg'
import lush from 'src/library/images/spotify/lushAlbumCover.jpg'
import wwt from 'src/library/images/spotify/jazminewwt.jpg'
import gemini from 'src/library/images/spotify/gemini.jpg'
import xxxtentacion from 'src/library/images/spotify/xxx.jpeg'
import techn9ne from 'src/library/images/spotify/tech.jpeg'
import sirChloe from 'src/library/images/spotify/sirchloe.jpeg'
import macMiller from 'src/library/images/spotify/macMiller.jpeg'
import grlwood from 'src/library/images/spotify/grlwood.jpeg'

import mostLiked from 'src/library/images/spotify/mostLiked.png';
import stckrz from 'src/library/images/spotify/Stckrz.png';
import uknow from 'src/library/images/spotify/uknow.png';
import flapjack from 'src/library/images/spotify/Flapjack.png';

export const spotifyData = {
	totalPlayTime: 7509136320,
	playlistsCreated: 9,
	likedSongs: 355,
	topTracksByPlayCount: [
		{
			"artistName": "Mac Miller",
			"artUrl": swimming,
			"trackName": "Small Worlds",
			"msPlayed": 44234485,
			"playCount": 178
		},
		{
			"artistName": "Carole's Daughter",
			"artUrl": violent,
			"trackName": "Violent - Acoustic",
			"msPlayed": 20444409,
			"playCount": 162
		},
		{
			"artistName": "Mitski",
			"artUrl": lush,
			"trackName": "Liquid Smooth",
			"msPlayed": 23930150,
			"playCount": 152
		},
		{
			"artistName": "Jazmine Bean",
			"artUrl": wwt,
			"trackName": "Yandere",
			"msPlayed": 29028040,
			"playCount": 145
		},
		{
			"artistName": "King Mala",
			"artUrl": gemini,
			"trackName": "Funeral",
			"msPlayed": 20548870,
			"playCount": 142
		}
	],
	topArtistsByPlayTime:
		[
			{
				"artistName": "Mac Miller",
				"artUrl": macMiller,
				"totalMsPlayed": 570398155,
				"topTrack":
				{
					"trackName": "Small Worlds",
					"msPlayed": 44234485,
					"playCount": 178
				}
			},
			{
				"artistName": "Tech N9ne",
				"artUrl": techn9ne,
				"totalMsPlayed": 242223384,
				"topTrack":
				{
					"trackName": "Like I Ain't",
					"msPlayed": 9040753,
					"playCount": 42
				}
			},
			{
				"artistName": "GRLwood",
				"artUrl": grlwood,
				"totalMsPlayed": 193788767,
				"topTrack":
				{
					"trackName": "I'm Not You",
					"msPlayed": 24826081,
					"playCount": 67
				}
			},
			{
				"artistName": "Sir Chloe",
				"artUrl": sirChloe,
				"totalMsPlayed": 186452576,
				"topTrack":
				{
					"trackName": "Too Close",
					"msPlayed": 20708685,
					"playCount": 123
				}
			},
			{
				"artistName": "XXXTENTACION",
				"artUrl": xxxtentacion,
				"totalMsPlayed": 164222634,
				"topTrack":
				{
					"trackName": "vice city",
					"msPlayed": 14874568,
					"playCount": 69
				}
			}
		],
	playlists: [
		{
			"name": "Most Liked",
			"artUrl": mostLiked,
			"spotifyLink": "https://open.spotify.com/playlist/6mU8n9Xlp5W9bl7OVtQQ3C?si=eae928597af04261"
		},
		{
			"name": "Stckrz",
			"artUrl": stckrz,
			"spotifyLink": "https://open.spotify.com/playlist/4G7NEJQ1Wgyh1ebMhskN5i?si=7b9925b152fe4da0"
		},
		{
			"name": "Flapjack Banana Jams",
			"artUrl": flapjack,
			"spotifyLink": "https://open.spotify.com/playlist/0pJnmJc4qYu6IKVtSDyqJG?si=b42d832541d042ed"
		},
		{
			"name": "uknow",
			"artUrl": uknow,
			"spotifyLink": "https://open.spotify.com/playlist/1vLMLCJLRARd2jobdTuF0J?si=8e812d1ddb5843ee"
		}
	]
}
