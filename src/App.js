import './config.scss'
import './App.scss'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import LeftBar from './components/LeftBar/LeftBar.jsx'
import RightBar from './components/RightBar/RightBar.jsx'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider'
import ScrollWhenRefresh from './context/ScrollWhenRefresh'

const App = () => {
	// contexts
	const { dark } = useContext(ThemeContext)

	const Layout = () => {
		return (
			<div className={`layout theme-${dark ? 'dark' : 'light'}`}>
				<NavBar />
				<div className="wrapper">
					<LeftBar />
					<div className="outlet">
						<Outlet />
					</div>
					<RightBar />
				</div>
			</div>
		)
	}

	return (
		<div>
			<BrowserRouter>
				<ScrollWhenRefresh>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/" element={<Layout />}>
							<Route path="" element={<Home />} />
							<Route path="profile/:id" element={<Profile />} />
						</Route>
					</Routes>
				</ScrollWhenRefresh>
			</BrowserRouter>
		</div>
	)
}

export default App
