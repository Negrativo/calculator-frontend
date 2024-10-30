import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { UserContext } from "../context/UserContext";
import Box from "@mui/material/Box";

const Header = () => {
	const { user } = useContext(UserContext);

	return (
		<AppBar position="static">
			<Toolbar>
				<Box sx={{ flexGrow: 1 }}>
					<Typography variant="h6" style={{ marginRight: 5 }}>
						Calculator
					</Typography>
				</Box>

				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Typography variant="h6" style={{ marginRight: 15 }}>
						{user?.name ? user?.name : "User"}
					</Typography>
					<Typography variant="h6">Balance: {user?.balance ? user?.balance : 0}</Typography>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
