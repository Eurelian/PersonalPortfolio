import React from "react";
import HomePage from "./components/HomePage";
import { Route, Switch, useLocation } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/UI/theme";
import { animated, useTransition, config } from "react-spring";
import { Helmet } from "react-helmet";
import favicon from "./img/favicon-32x32.png";

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
				<Helmet>
					<meta charSet='utf-8' />
					<title>Octavian Sum | Full-Stack Web & App Developer</title>
					<link rel='icon' type='image/png' href={favicon} />
				</Helmet>
				{transition.map(({ item, props, key }) => (
					<animated.div key={key} style={props}>
						<Switch location={item}>
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
