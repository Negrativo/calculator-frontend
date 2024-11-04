import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { UserContext } from "../context/UserContext";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const { user, logoutUser } = useContext(UserContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		logoutUser();
		navigate(`/`);
	};

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
					<div
						style={{
							width: "100px",
							backgroundColor: "#D20103",
							borderRadius: 10,
							display: "flex",
							justifyContent: "center",
							marginLeft: 15,
						}}
					>
						<Button color="inherit" onClick={handleLogout}>
							Logout
						</Button>
					</div>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
