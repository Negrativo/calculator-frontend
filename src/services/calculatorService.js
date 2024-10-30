import api from "./api";

export const calculate = async (displayValue, user) => {
	try {
		const response = await api.post(`/operations`, {
			type: "calculation",
			amount: eval(displayValue),
			userId: user.id,
		});
		console.log(response.data);
		if (response.data.result) {
			return response.data.result;
		}
		return response.data;
	} catch (error) {
		console.error("Error logging in:", error);
		console.error("Error logging in:", error.message);
		return {
			message: error.message || "Error logging in with unknown error",
			adminData: undefined,
		};
	}
};
