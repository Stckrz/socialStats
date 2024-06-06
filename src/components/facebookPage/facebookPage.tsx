import FacebookPost from 'src/components/facebookPage/facebookPostClone/facebookPostClone'
import FacebookNavbar from 'src/components/facebookPage/facebookNavbar/facebookNavbar';
import { useViewport } from 'src/hooks/useViewport';

const FacebookPage = () => {
	const width = useViewport().width;


	return (
		<>
			<div className={"h-full w-full bg-black p-10"}>
				<div className={"h-full w-full bg-facebookGrayDark rounded-md flex items-start justify-start flex-col overflow-hidden"}>
					<FacebookNavbar />
					<div className={"bg-facebookGrayDark w-full h-full relative flex flex-row items-center justify-center"}>
						{width > 800 &&
							<div className={"w-1/5 absolute left-0 flex flex-col justify-start gap-4 h-full text-facebookGrayText p-4"}>
								<div className={"border"}>a</div>
								<div className={"border"}>a</div>
								<div className={"border"}>a</div>
								<div className={"border"}>a</div>
								<div className={"border"}>a</div>
								<div className={"border"}>a</div>
							</div>
						}
						<div className={"w-full md:w-2/5 h-full self-start flex md:items-center items-start justify-center"}>
							<div className={"w-full flex flex-col items-center overflow-y-scroll no-scrollbar h-full md:h-5/6 p-4"}>
								<FacebookPost />
								<FacebookPost />
								<FacebookPost />
								<FacebookPost />
							</div>
						</div>
						{width > 800 &&
							<div className={"w-1/5 absolute right-0 flex flex-col justify-start gap-4 h-full text-facebookGrayText p-4"}>
								<div className={"self-start flex border-t-facebookGrayBorder border-t w-full p-2 text-sm font-bold"}>
									Contacts
								</div>
								<div className={"border"}>a</div>
								<div className={"border"}>a</div>
								<div className={"border"}>a</div>
								<div className={"border"}>a</div>
								<div className={"border"}>a</div>
								<div className={"border"}>a</div>
							</div>
						}
					</div>

				</div>
			</div>
		</>
	)

}

export default FacebookPage
