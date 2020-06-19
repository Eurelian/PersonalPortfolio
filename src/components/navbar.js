import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as easings from "d3-ease";

const useStyles = makeStyles((theme) => ({
	social: {
		fontSize: "2rem",
		color: "#f5f5f5",
		textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
		marginTop: "15px",
	},
	socialItem: {
		margin: "0px 5px",
		transition: "all 0.4s ease",

		"& :hover": {
			transform: "translateY(-5px)",
			transition: "all 0.4s ease",
		},
	},

	menuLink: {
		fontFamily: "Teko",
		fontSize: "3rem",
		color: "#f5f5f5",
		cursor: "pointer",
		textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
		transition: "all 0.4s ease",
		"&:hover": {
			transform: "translateY(-5px)",
			textShadow: "2px 2px 20px rgba(0,0,0,0.5)",
		},
	},

	burgerToggle: {
		display: "none",
		[theme.breakpoints.down(850)]: {
			display: "block",
		},
	},

	menuToggle: {
		[theme.breakpoints.down(850)]: {
			display: "none",
		},
	},

	btn: {
		border: "2px solid #ff2e63",
		color: "#ff2e63",
		fontFamily: "Montserrat",
		fontSize: "0.8rem",
		fontWeight: "bold",
		padding: "15px 30px",
		borderRadius: 10,
		cursor: "pointer",
		// maxWidth: "100px",
		transition: "all 0.4s ease",
		textAlign: "center",
		"&:hover": {
			color: "#f5f5f5",
			background: "#ff2e63",
			transform: "translateY(-3px)",
			boxShadow: "1px 3px 15px 1px rgba(0,0,0,0.3)",
		},
		marginTop: "30px",
	},
}));

const NavBar = ({ path }) => {
	const classes = useStyles();

	const [isOpen, setIsOpen] = useState(false);

	const slideFromLeft = useSpring({
		to: async (next, cancel) => {
			await next({ opacity: 1, transform: "translateX(0px)" });
		},

		from: { opacity: 0, transform: "translateX(-500px)" },
		config: config.slow,
		delay: 500,
	});

	const slideFromRight = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: config.gentle,
		delay: 500,
	});

	const buttonMorph = useSpring({
		from: { opacity: 0, transform: "scale(0)" },
		to: [
			{ opacity: 1, transform: "scale(1.2)" },
			{ opacity: 1, transform: "scale(1)" },
		],
		delay: 800,
	});
	const first = useSpring({
		transform: isOpen
			? "rotate(45deg) translate(0px, 7px)"
			: "  rotate(0deg) translate(0px, 0px)",
		config: { duration: 500, easing: easings.easeBackOut },
	});

	const second = useSpring({
		transform: isOpen
			? "rotate(-45deg) translate(1px, -9px)"
			: "rotate(0deg) translate(0px, 0px)",

		width: isOpen ? "40px" : "30px",
		config: { duration: 500, easing: easings.easeBackOut },
	});

	const menu = useSpring({
		clipPath: isOpen
			? "circle(2500px at 100% -10%)"
			: "circle(50px at 100% -10%)",
		config: { duration: 1000, easing: easings.easeCubic },
	});

	return (
		<React.Fragment>
			<header className='nav-header'>
				<Link to='/' style={{ textDecoration: "none" }}>
					<animated.h1 className='nav-title' style={slideFromLeft}>
						{" "}
						Octavian Sum{" "}
					</animated.h1>
				</Link>
				<div className={`nav ${classes.menuToggle}`}>
					<ul className='nav-links'>
						<animated.li style={slideFromRight} className='nav-link'>
							<a
								className='nav-link cv'
								href='https://portfoliomessage.herokuapp.com/cv'
							>
								CV
							</a>
						</animated.li>
						{path === "/contact" ? null : (
							<animated.li style={buttonMorph}>
								<Link
									className={`nav-link ${classes.btn}`}
									style={{ textDecoration: "none" }}
									to='/contact'
								>
									Say Hello
								</Link>
							</animated.li>
						)}
					</ul>
				</div>
				<div
					className={isOpen ? `burger` : `burger ${classes.burgerToggle}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					<animated.div class='line1' style={first}></animated.div>
					<animated.div class='line2' style={second}></animated.div>
				</div>
			</header>
			<animated.div className='menu' style={menu}>
				<Grid container direction='column' alignItems='center'>
					{path === "/contact" ? null : (
						<Link style={{ textDecoration: "none" }} to='/contact'>
							<h1 className={classes.menuLink}>Say Hello</h1>
						</Link>
					)}
					<Link style={{ textDecoration: "none" }}>
						<h1 className={classes.menuLink}>
							{" "}
							<a
								className={classes.CVLink}
								href='https://portfoliomessage.herokuapp.com/cv'
								style={{
									textDecoration: "none",
									color: "#f5f5f5",
								}}
							>
								CV
							</a>
						</h1>
					</Link>
					<Grid item className={classes.social}>
						<Grid container>
							<Grid item className={classes.socialItem}>
								<a
									href='https://www.linkedin.com/in/sum-octavian/'
									style={{ textDecoration: "none", color: "#f5f5f5" }}
								>
									<FontAwesomeIcon
										icon={faLinkedin}
										className={classes.socialItem}
									/>
								</a>
							</Grid>
							<Grid item className={classes.socialItem}>
								{" "}
								<a
									href='https://github.com/Eurelian'
									style={{ textDecoration: "none", color: "#f5f5f5" }}
								>
									<FontAwesomeIcon
										icon={faGithub}
										className={classes.socialItem}
									/>
								</a>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</animated.div>
		</React.Fragment>
	);
};

export default NavBar;
