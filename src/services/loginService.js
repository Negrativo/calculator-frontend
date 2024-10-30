import api from "./api";

export const loginWeb = async (login, password) => {
	try {
		const response = await api.post(`/auth/login`, { login, password });
		console.log(response.data);
		if (response.data.access_token) {
			localStorage.setItem("token", response.data.access_token);
			api.setAuthToken(response.data.access_token);
		}
		return response.data;
	} catch (error) {
		console.error("Error logging in:", error);
		console.error("Error logging in:", error.message);
		return {
			message: error.message || "Error logging in with unknown error",
			token: undefined,
		};
	}
};
