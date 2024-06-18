export const msToHours = (ms: number, returnFormat: string = "hours") => {
	switch (returnFormat) {
		case "seconds":{
			const seconds = (ms / 1000).toFixed()
			return (`${seconds} seconds`)
		}
		case "minutes":{
			const minutes =  (ms / (1000 * 60)).toFixed()
			return (`${minutes} minutes`)
		}
		case "hours":{
			const hours =  (ms / (1000 * 60 * 60)).toFixed()
			return (`${hours} hours`)
		}
		case "hoursAndMinutes":{
			let hours = (ms / (1000 * 60 * 60)).toFixed()
			let msRemaining = (ms % (1000 * 60 * 60))
			let minutes = (msRemaining / (1000 * 60)).toFixed()
			return (`${hours}h ${minutes}m`)
		}
	}

}
