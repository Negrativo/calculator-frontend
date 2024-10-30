import React from "react";
import Header from "../../component/Header";
import Calculator from "../../component/Calculator";
import { Container } from "@mui/material";
import UserRecords from "../../component/UserRecords";

const Home = () => {
	return (
		<>
			<Header />
			<Container sx={{ mt: 4 }}>
				<Calculator />
				<UserRecords />
			</Container>
		</>
	);
};

export default Home;
