import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollWhenRefresh = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, [location.key]);

	return <div>{children}</div>;
};

export default ScrollWhenRefresh;
