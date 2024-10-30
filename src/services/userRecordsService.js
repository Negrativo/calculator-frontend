import api from "./api";

export const fetchUserRecords = async (user, page = 1, limit = 10, search = "") => {
	try {
		const response = await api.get("/records", {
			params: {
				user,
				page,
				limit,
				search,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching records:", error);
		throw error;
	}
};

export const deleteUserRecord = async (id) => {
	try {
		const response = await api.delete(`/records/${id}`);
		return response.data;
	} catch (error) {
		console.error("Error deleting record:", error);
		throw error;
	}
};
