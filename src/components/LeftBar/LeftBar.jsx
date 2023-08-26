import "./LeftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import Item from "./Item";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const LeftBar = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="leftbar">
			<div className="container">
				<div className="user">
					<img src={currentUser.profile_picture} alt="" />
					<span>{currentUser.name}</span>
				</div>

				<div className="menu">
					<Item image={Friends}>Friends</Item>
					<Item image={Groups}>Groups</Item>
					<Item image={Market}>Market</Item>
					<Item image={Watch}>Watch</Item>
					<Item image={Memories}>Memories</Item>
				</div>

				<hr />

				<div className="menu">
					<Item image={Events}>Events</Item>
					<Item image={Gaming}>Gaming</Item>
					<Item image={Gallery}>Gallery</Item>
					<Item image={Videos}>Videos</Item>
					<Item image={Messages}>Messages</Item>
				</div>

				<hr />

				<div className="menu">
					<Item image={Tutorials}>Tutorials</Item>
					<Item image={Courses}>Courses</Item>
					<Item image={Fund}>Fund</Item>
				</div>
			</div>
		</div>
	);
};

export default LeftBar;
