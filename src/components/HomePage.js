import React from "react";
import Header from "./Header";
import Main from "./Main";
import MyRecentWork from "./MyRecentWork";
import Footer from "./footer";
import AbsoluteWrapper from "./AbsoluteWrapper";
import NavBar from "./navbar";

const HomePage = () => {
	return (
		<AbsoluteWrapper>
			<NavBar />
			<Header />
			<Main></Main>
			<MyRecentWork></MyRecentWork>
			<Footer></Footer>
		</AbsoluteWrapper>
	);
};

export default HomePage;
