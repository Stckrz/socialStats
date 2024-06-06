import profile from "src/library/images/profileImage.jpeg";

const UserBadge: React.FC = () => {
	return (
		<>
			<div className={"h-10 flex gap-2 m-1"}>
				<img className={"rounded-full"} src={profile} />
				<div className={"flex self-start justify-self-start text-white text-sm"}>Stckrz</div>
			</div>
		</>
	)
}
export default UserBadge
