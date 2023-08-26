import Post from "../Post/Post";
import "./Posts.scss";

const Posts = () => {
	//TEMPORARY
	const posts = [
		{
			id: 1,
			name: "USER 1",
			userId: 1,
			profilePic:
				"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
			img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
		},
		{
			id: 1,
			name: "USER 1",
			userId: 1,
			profilePic:
				"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
			img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
		},
		{
			id: 2,
			name: "USER 2",
			userId: 2,
			profilePic:
				"https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
		},
		{
			id: 2,
			name: "USER 2",
			userId: 2,
			profilePic:
				"https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
		},
		{
			id: 2,
			name: "USER 2",
			userId: 2,
			profilePic:
				"https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
		},
		{
			id: 2,
			name: "USER 2",
			userId: 2,
			profilePic:
				"https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
		},
		{
			id: 2,
			name: "USER 2",
			userId: 2,
			profilePic:
				"https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
		},
	];
	return (
		<div className="posts">
			{[...posts].map((post, i) => (
				<Post post={post} key={i} />
			))}
		</div>
	);
};

export default Posts;
