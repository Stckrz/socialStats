import FacebookPost from 'src/components/facebookPage/facebookPostClone/facebookPostClone'
import FacebookNavbar from 'src/components/facebookPage/facebookNavbar/facebookNavbar';
import { useViewport } from 'src/hooks/useViewport';
import facebookData from 'src/library/data/facebookData.json'
import UserBadge, { BadgeType } from './userBadge/userBadge';

const FacebookPage = () => {
	const width = useViewport().width;


	return (
		<>
			<div className={"h-full w-full bg-black p-10"}>
				<div className={"h-full w-full bg-facebookGrayDark rounded-md flex items-start justify-start flex-col overflow-hidden"}>
					<FacebookNavbar />
					<div className={"bg-facebookGrayDark w-full h-full relative flex flex-row items-center justify-between"}>
						{width > 800 &&
							<div className={"w-1/5 h-full flex flex-col"}>
								<div className={"w-full left-0 flex flex-col justify-start gap-4 h-1/2 text-facebookGrayText p-4"}>
									<div className={"h-1/6 flex justify-items-start"}>
										<UserBadge badgeType={BadgeType.NameBadge} />
									</div>
									<div className={"border"}>a</div>
									<div className={"border"}>a</div>
									<div className={"border"}>a</div>
									<div className={"border"}>a</div>
								</div>
								<div className={"border-t border-t-facebookGrayBorder m-4"}>
									<div className={"text-facebookGrayText text-sm m-2"}>Your shortcuts</div>
									<div className={"text-facebookGrayText text-xs p-2"}>
										<div>{`Pages liked: ${facebookData.pages.pagesLiked}`}</div>
										<div>{`Pages followed: ${facebookData.pages.pagesFollowed}`}</div>
									</div>
								</div>
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
							<div className={"w-1/5 right-0 flex flex-col justify-start gap-4 h-full text-facebookGrayText p-4"}>
								<div className={"self-start flex border-t-facebookGrayBorder border-t w-full p-2 text-sm font-bold"}>
									Contacts
								</div>
								<div className={"p-2"}>
									<div>{`Friends: ${facebookData.connections.friends}`}</div>
									<div>{`Followed: ${facebookData.connections.followed}`}</div>
									<div>{`People You May Know: ${facebookData.connections.peopleYouMayKnow}`}</div>
								</div>
							</div>

						}
					</div>

				</div>
			</div>
		</>
	)

}

export default FacebookPage
