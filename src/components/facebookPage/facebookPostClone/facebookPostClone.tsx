import { useState } from "react"
import { IoClose } from "react-icons/io5"
import { MdMoreHoriz } from "react-icons/md"
import UserBadge, { BadgeType } from "src/components/facebookPage/userBadge/userBadge"
import CommentBox from "src/components/facebookPage/commentBox/commentBox"

const FacebookPost: React.FC = () => {
	const [shown, setShown] = useState(true);
	const [showCommentBox, setShowCommentBox] = useState(true);

	return (
		<>
			{shown &&
				<div className={"w-full bg-facebookGrayLight h-full my-1 md:m-2 md:rounded-md flex flex-col justify-between"}>
					<div className={"flex items-start justify-between m-2"}>
						<div>
							<UserBadge badgeType={BadgeType.NameBadge} />
						</div>
						<div className={"flex text-facebookGrayText gap-2"}>
							<MdMoreHoriz size={"1.5em"} />
							<IoClose
								className={"cursor-pointer"}
								onClick={() => { setShown(false) }}
								size={"1.5em"}
							/>
						</div>
					</div>
					<div className={"text-facebookGrayText"}>
						This is a post
					</div>
					<div className={"flex-grow bg-white"}> ass</div>
					<div className={"flex justify-between m-2 p-2 border-t-facebookGrayBorder border-b-facebookGrayBorder border-t border-b text-sm text-facebookGrayText"}>
						<div>Like</div>
						<div onClick={() => { setShowCommentBox(!showCommentBox) }}>Comment</div>
						<div>Share</div>
					</div>
					<div>
						{showCommentBox &&
							<CommentBox shown={showCommentBox} />
						}
					</div>
				</div>
			}
		</>
	)
}
export default FacebookPost
