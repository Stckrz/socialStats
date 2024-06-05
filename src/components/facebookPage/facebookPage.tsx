import facebookLogo from '../../library/logos/facebook-5221.svg'
const FacebookPage = () => {
	return (
		<>
			<div className={"h-full w-full bg-black p-10"}>
				<div className={"h-full w-full bg-facebookGrayDark rounded-md flex items-start justify-start"}>
					<div className={"w-full border-b-2 border-t-2 border-facebookGrayBorder items-center justify-start bg-facebookGrayLight"}>
						<img className={"m-0 h-16 border-facebookGrayLight border-8 rounded-full"} src={facebookLogo} />
					</div>
				</div>
			</div>
		</>
	)

}

export default FacebookPage
