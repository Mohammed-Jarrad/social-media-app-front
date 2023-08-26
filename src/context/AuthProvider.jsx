import { useState, useEffect } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem('user')) || {
			id: 1,
			name: 'Mohammed Jarrad',
			profile_picture:
				'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
	)

	const login = () => {
		setCurrentUser({
			id: 1,
			name: 'Mohammed Jarrad',
			profile_picture:
				'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
		})
	}

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(currentUser))
	}, [currentUser])

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				login,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
