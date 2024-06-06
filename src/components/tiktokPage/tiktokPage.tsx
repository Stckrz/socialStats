import tikTokLogo from 'library/logos/tiktok-logo-4500.svg'
const TikTokPage = () => {
	return (
		<>
			<div className={"w-full h-full bg-black flex flex-col justify-center items-center gap-8 p-10"}>
				<div className={"flex flex-row h-1/2 justify-between w-full"}>
					<img className={"w-1/4"} src={tikTokLogo} />
					<div className={"w-3/4 h-full bg-tiktokBlue self-end rounded-md"}></div>
				</div>
				<div className={"w-3/4 h-1/2 bg-tiktokRed self-start rounded-md"}></div>
			</div>
		</>
	)
}

export default TikTokPage
