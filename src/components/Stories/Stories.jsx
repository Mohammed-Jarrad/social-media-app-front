import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import "./Stories.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/bundle";
import { useEffect } from "react";

const Stories = () => {
	// Temporary
	const stories = [
		{
			id: 1,
			name: "Hello my name is mohammed wael jarrad",
			img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
		},
		{
			id: 1,
			name: "user2",
			img: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 1,
			name: "user3",
			img: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 1,
			name: "user4",
			img: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 1,
			name: "user5",
			img: "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 2,
			name: "user6",
			img: "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 2,
			name: "user6",
			img: "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 2,
			name: "user6",
			img: "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 2,
			name: "user6",
			img: "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 2,
			name: "user6",
			img: "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 2,
			name: "user6",
			img: "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 2,
			name: "user6",
			img: "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		},
	];
	//
	const { currentUser } = useContext(AuthContext);

	return (
		<div className="stories">
			<Swiper
				className="stories"
				spaceBetween={10}
				breakpoints={{
					0: { slidesPerView: 3 },
					480: { slidesPerView: 4 },
					1000: { slidesPerView: 5 },
					1200: { slidesPerView: 6 },
				}}
				navigation
				modules={[Navigation]}
			>
				<SwiperSlide className="user">
					<div className="image">
						<img src={currentUser.profile_picture} alt="" />
						<AddCircleOutlinedIcon />
					</div>
					<span>{currentUser.name}</span>
				</SwiperSlide>

				{[...stories].map((story, i) => (
					<SwiperSlide key={i}>
						<img src={story.img} alt="" />
						<span>{story.name}</span>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Stories;
