import { useContext, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import "./Login.scss";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { currentUser, login } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<h1>Hello World.</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
						pariatur quos similique. Tempora unde porro asperiores.
					</p>
					<span>Don't you have an account?</span>
					<Link to={"/register"}>
						<button>Register</button>
					</Link>
				</div>
				<div className="right">
					<h1>Login</h1>
					<form
						onSubmit={() => {
							login();
							navigate("/");
						}}
					>
						<input type="text" placeholder="Username" />
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Password"
						/>
						<label htmlFor="show">
							<input
								type="checkbox"
								id="show"
								onChange={() => setShowPassword(!showPassword)}
							/>
							show password
						</label>
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
