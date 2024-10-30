import React, { useState, useContext } from "react";
import { Box, Grid, Button, Typography, Paper } from "@mui/material";
import { calculate } from "../services/calculatorService";
import { UserContext } from "../context/UserContext";
import { useNotification } from "../context/NotificationContext";

const Calculator = () => {
	const { user } = useContext(UserContext);
	const { triggerNotification } = useNotification();

	const [displayValue, setDisplayValue] = useState("");

	const handleClick = async (value) => {
		if (value === "=") {
			const token = localStorage.getItem("token");

			if (!user || !token) {
				setDisplayValue("Erro");
				triggerNotification("User not logged in or token missing.", "error");
				return;
			}

			try {
				const result = await calculate(displayValue, user);
				setDisplayValue(result);
			} catch {
				setDisplayValue("Erro");
			}
		} else if (value === "C") {
			setDisplayValue("");
		} else {
			setDisplayValue(displayValue + value);
		}
	};

	const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"];

	return (
		<Box p={3} maxWidth={500} mx="auto">
			<Paper elevation={3} sx={{ padding: "16px" }}>
				<Typography variant="h4" align="right" gutterBottom>
					{displayValue}
				</Typography>
				<Grid container spacing={1}>
					{buttons.map((button) => (
						<Grid item xs={3} key={button}>
							<Button fullWidth variant="contained" onClick={() => handleClick(button)}>
								{button}
							</Button>
						</Grid>
					))}
				</Grid>
			</Paper>
		</Box>
	);
};

export default Calculator;
