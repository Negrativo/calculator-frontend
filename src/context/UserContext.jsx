import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
	user: null,
	loginUser: () => {},
	logoutUser: () => {},
});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	const loginUser = (adminData) => {
		localStorage.setItem("user", JSON.stringify(adminData));
		setUser(adminData);
	};

	const logoutUser = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		sessionStorage.removeItem("token");
		setUser(null);
	};

	return <UserContext.Provider value={{ user, loginUser, logoutUser }}>{children}</UserContext.Provider>;
};
