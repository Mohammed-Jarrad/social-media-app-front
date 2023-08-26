import "./NavBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { AuthContext } from "../../context/AuthProvider";

const NavBar = () => {
	const { dark, toggle } = useContext(ThemeContext);
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="navbar">
			<div className="left">
				<Link to="/">
					<span>Jarrad</span>
				</Link>
				<Link to="/">
					<HomeOutlinedIcon />
				</Link>
				{dark ? (
					<WbSunnyRoundedIcon onClick={toggle} />
				) : (
					<DarkModeOutlinedIcon onClick={toggle} />
				)}
				<GridViewOutlinedIcon />
				<div className="search">
					<input type="checkbox" className="search-check" id="search-btn" />
					<label htmlFor="search-btn">
						<SearchSharpIcon />
					</label>
					<input type="text" placeholder="Search..." />
				</div>
			</div>

			<div className="right">
				<PersonOutlineOutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsNoneOutlinedIcon />
				<div className="user">
					<img src={currentUser.profile_picture} alt="" />
					<span>{currentUser.name}</span>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
