// src/components/UserRecords.js
import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, Box } from "@mui/material";
import { UserContext } from "../context/UserContext";
import { fetchUserRecords, deleteUserRecord } from "../services/userRecordsService";
import { useNotification } from "../context/NotificationContext";

const UserRecords = () => {
	const { user } = useContext(UserContext);
	const { triggerNotification } = useNotification();
	const [records, setRecords] = useState([]);
	const [page, setPage] = useState(0);
	const [pageSize, setPageSize] = useState(10);
	const [search, setSearch] = useState("");

	const getRecords = async () => {
		try {
			const recordsData = await fetchUserRecords(user.id, page + 1, pageSize, search);
			setRecords(recordsData);
		} catch (error) {
			triggerNotification("Error fetching records.", "error");
		}
	};

	useEffect(() => {
		getRecords();
	}, [page, pageSize, search]);

	const handleDelete = async (id) => {
		try {
			await deleteUserRecord(id);
			getRecords();
		} catch (error) {
			triggerNotification("Error deleting record.", "error");
		}
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{ field: "operation", headerName: "Operation", width: 150 },
		{ field: "amount", headerName: "Amount", width: 130 },
		{ field: "date", headerName: "Date", width: 180 },
		{
			field: "actions",
			headerName: "Actions",
			width: 150,
			renderCell: (params) => (
				<Button variant="contained" color="secondary" onClick={() => handleDelete(params.row.id)}>
					Delete
				</Button>
			),
		},
	];

	return (
		<Box sx={{ height: 400, width: "100%", mt: 4 }}>
			<TextField
				label="Research"
				variant="outlined"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				fullWidth
				sx={{ mb: 2 }}
			/>
			<DataGrid
				rows={records}
				columns={columns}
				pageSize={pageSize}
				onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
				rowsPerPageOptions={[5, 10, 20]}
				pagination
				page={page}
				onPageChange={(newPage) => setPage(newPage)}
				disableSelectionOnClick
				autoHeight
			/>
		</Box>
	);
};

export default UserRecords;
