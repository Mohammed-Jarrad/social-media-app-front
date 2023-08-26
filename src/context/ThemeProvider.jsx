import React, { useState } from "react"
import { useEffect } from "react"
import { createContext } from "react"

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
	const [dark, setDark] = useState(JSON.parse(localStorage.getItem("dark")) || false)

	const toggle = () => setDark(prev => !prev)

	useEffect(() => {
		localStorage.setItem("dark", dark)
	}, [dark])

	return (
		<ThemeContext.Provider
			value={{
				dark,
				toggle,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
