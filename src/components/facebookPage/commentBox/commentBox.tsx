import Comment from "../comment/comment"

interface CommentBoxProps{
	shown: boolean,
}
const CommentBox: React.FC<CommentBoxProps> = (shown) => {
	return (
		<>
			{shown &&
			<div className={"p-2 rounded-md"}>
					<Comment />
			</div>
			}
		</>
	)
}
export default CommentBox
