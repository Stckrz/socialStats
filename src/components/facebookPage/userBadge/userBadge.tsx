import profile from "src/library/images/profileImage.jpeg";

export enum BadgeType {
	NameBadge,
	ImageBadge
}
interface UserBadgeProps {
	badgeType: BadgeType
}
const UserBadge: React.FC<UserBadgeProps> = ({ badgeType = BadgeType.ImageBadge }) => {

	const badgeMarkup = (badgeType: BadgeType) => {
		switch (badgeType) {
			case BadgeType.ImageBadge:
				return (
					<div className={"flex gap-2 h-full w-full rounded-full"}>
						<div className={"aspect-square flex items-center justify-center h-full w-full rounded-full"}>
							<img style={{ height: "2.1em" }} className={`rounded-full object-fill aspect-square`} src={profile} />
						</div>
					</div>
				)
			case BadgeType.NameBadge:
				return (

					<div className={" flex items-center justify-start w-full rounded-full gap-2"}>
						<img style={{ height: "2.1em" }} className={`rounded-full object-fill aspect-square`} src={profile} />
						<div className={"flex self-center justify-self-start text-white text-sm"}>Stckrz</div>
					</div>
				)
		}
	}

	return (
		<>
			{badgeMarkup(badgeType)}
		</>
	)
}

export default UserBadge
