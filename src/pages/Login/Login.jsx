import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Typography, InputAdornment, FormControlLabel } from "@mui/material";
import { useNotification } from "../../context/NotificationContext";
import { UserContext } from "../../context/UserContext";
import { loginWeb } from "../../services/loginService";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
	const { triggerNotification } = useNotification();
	const { loginUser } = useContext(UserContext);
	const navigate = useNavigate();

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	async function handleLoginWeb() {
		localStorage.removeItem("token");
		sessionStorage.removeItem("token");
		console.log(login, password);
		if (login && password) {
			navigate(`/home`);
			// const loginData = await loginWeb(login, password);
			// if (loginData.access_token) {
			// 	if (loginData.adminData) {
			// 		loginUser(loginData.adminData);
			// 	}

			// 	triggerNotification("Logado com sucesso!", "success");
			// } else {
			// 	const mensagem = loginData.message || "Ocorreu um erro inesperado!";
			// 	triggerNotification(mensagem, "error");
			// }
		}
	}

	const handleCodigoChange = (event) => {
		setLogin(event.target.value);
	};

	const handleSenhaChange = (event) => {
		setPassword(event.target.value);
	};

	return (
		<div className="container-login">
			<div className="text-welcome">
				<Typography variant="h4" gutterBottom>
					Welcome back!
				</Typography>
				<div className="text-subtitle">
					<Typography variant="subtitle1" gutterBottom>
						Log in to your account to access the calculator.
					</Typography>
					<CalculateIcon />
				</div>
			</div>
			<div className="inputs">
				<TextField label="Login" fullWidth onChange={handleCodigoChange} margin="normal" />
				<TextField label="Senha" type="password" fullWidth onChange={handleSenhaChange} margin="normal" />
				<Button variant="outlined" color="primary" fullWidth onClick={handleLoginWeb}>
					Entrar
				</Button>
			</div>
		</div>
	);
}

export default Login;
