
interface CommentBoxProps{
	shown: boolean,
}
const CommentBox: React.FC<CommentBoxProps> = (shown) => {
	return (
		<>
			{shown &&
			<div className={"p-2 rounded-md"}>
				ass
			</div>
			}
		</>
	)
}
export default CommentBox
