import "./Post.scss";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Comments from "../Comments/Comments";

const Post = ({ post }) => {
	const { id, name, userId, profilePic, desc, img } = post;
	// states
	const [liked, setLiked] = useState(false);
	const [showComment, setShowComment] = useState(false);

	const handleClickComment = () => setShowComment(!showComment);

	const toggle = () => setLiked(prev => !prev);

	return (
		<div className="post">
			<div className="container">
				<div className="user">
					<div className="user-info">
						<img src={profilePic} alt={`${name} figure`} />
						<div>
							<Link to={`/profile/${userId}`}>{name}</Link>
							<span className="time">a few minites ago</span>
						</div>
					</div>
					<div className="dots">
						<MoreHorizOutlinedIcon />
						<div className="dots-options"></div>
					</div>
				</div>
				<p className="desc">{desc}</p>
				{img ? <img src={img} alt="post img" /> : ""}
				<div className="options">
					<span onClick={toggle}>
						{liked ? (
							<FavoriteOutlinedIcon style={{ color: "red" }} />
						) : (
							<FavoriteBorderOutlinedIcon />
						)}
						like
					</span>
					<span onClick={handleClickComment}>
						<MessageOutlinedIcon /> comment
					</span>
					<span>
						<ShareOutlinedIcon /> share
					</span>
				</div>
			</div>

			{showComment ? <Comments /> : null}
		</div>
	);
};

export default Post;
