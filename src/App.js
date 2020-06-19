import React from "react";
import HomePage from "./components/HomePage";
import { Route, Switch, useLocation } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/UI/theme";
import { useSpring, animated, useTransition, config } from "react-spring";

function App() {
	const location = useLocation();
	const transition = useTransition(location, (location) => location.pathname, {
		from: { opacity: 0, transform: "translate(100%,0)" },
		enter: { opacity: 1, transform: "translate(0,0)" },
		leave: { opacity: 0, transform: "translate(-50%,0)" },
		config: config.slow,
	});
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				{transition.map((item) => (
					<animated.div key={item.key} style={item.props}>
						<Switch location={item.item}>
							<Route path='/contact' component={ContactForm} />
							<Route path='/' component={HomePage} />
						</Switch>
					</animated.div>
				))}
			</div>
		</ThemeProvider>
	);
}

export default App;
