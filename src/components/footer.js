import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "400px",
		background:
			"linear-gradient(56deg, rgba(255,46,99,1) 0%, rgba(232,0,59,1) 100%)",
		display: "flex",
		alignItems: "flex-end",
		[theme.breakpoints.down(600)]: {
			height: "500px",
		},
	},
	invitation: {
		// display: "flex",
		// justify: "center",
		// alignItems: "center",
		background: "#3D000F",
		padding: "20px",
		height: "auto",
		width: "75%",
		marginTop: "-460px",
		zIndex: 10,
		margin: "0 auto",
		borderRadius: 20,
		boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.3)",
		[theme.breakpoints.down(600)]: {
			marginTop: "-560px",
		},
	},

	title: {
		marginRight: "35px",
		fontFamily: "Teko",
		fontSize: "4rem",
		color: "#f5f5f5",
		lineHeight: "1",
		textAlign: "center",
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
			marginRight: "0px",
			marginBottom: "25px",
		},
	},
	subtext: {
		marginRight: "50px",
		color: "#f5f5f5",
		fontFamily: "Montserrat",
		[theme.breakpoints.down("xs")]: {
			fontSize: "16px",
			marginLeft: "0px",
			marginRight: "0px",
			marginBottom: "25px",
			textAlign: "center",
		},
	},
	btn: {
		border: "2px solid #ff2e63",
		color: "#ff2e63",
		fontFamily: "Montserrat",
		fontSize: "1rem",
		padding: "10px 25px",
		fontWeight: "bold",
		borderRadius: 10,
		cursor: "pointer",
		width: "90px",
		transition: "all 0.4s ease",
		textAlign: "center",
		marginRight: "50px",
		"&:hover": {
			color: "#f5f5f5",
			transition: "all 0.4s ease",
			background: "#ff2e63",
		},
		marginLeft: "20px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.8rem",
			marginLeft: "0px",
			marginRight: "0px",
			marginBottom: "25px",
			textAlign: "center",
		},
	},

	name: {
		fontFamily: "Teko",
		fontSize: "3rem",
		color: "#f5f5f5",
		textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
		marginTop: "35px",
	},
	social: {
		fontSize: "2rem",
		color: "#f5f5f5",
		textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
		marginTop: "15px",
	},
	socialItem: {
		margin: "0px 5px",
		cursor: "pointer",
		transition: "all 0.4s ease",
		"& :hover": {
			transform: "translateY(-5px)",
			transition: "all 0.4s ease",
		},
	},
	copyright: {
		marginTop: "35px",
		marginBottom: "25px",
		fontFamily: "Montserrat",
		color: "#f5f5f5",
		fontSize: "0.8rem",
	},
	contact: {
		marginTop: "50px",
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Box className={classes.root}>
				<Grid
					container
					direction='column'
					justify='center'
					alignItems='center'
					className={classes.contact}
				>
					<Grid item className={classes.name}>
						SUM OCTAVIAN
					</Grid>
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
							{/* <Grid item className={classes.socialItem}>
								{" "}
								<FontAwesomeIcon
									icon={faDribbble}
									className={classes.socialItem}
								/>
							</Grid> */}
						</Grid>
					</Grid>
					<Grid item className={classes.copyright}>
						Joyfully built by Me <FontAwesomeIcon icon={faCopyright} /> Eurelian
					</Grid>
				</Grid>
			</Box>

			{/* <Box className={classes.invitation}> */}
			<Grid container alignItems='center' className={classes.invitation}>
				<Grid item container justify='center' xs={12} sm={4}>
					<Typography className={classes.title}> Start a project </Typography>
				</Grid>
				<Grid item xs={12} sm={6} container justify='center'>
					<Typography className={classes.subtext}>
						{" "}
						Interested in working together? Let's schedule a meeting and have a
						chat.{" "}
					</Typography>
				</Grid>
				<Grid item xs={12} sm={2} container justify='center'>
					<Box>
						<Link
							to='/contact'
							style={{ textDecoration: "none", transition: "all 0.4s ease" }}
						>
							<Box className={classes.btn}>Let's Do it</Box>
						</Link>
					</Box>
				</Grid>
			</Grid>
			{/* </Box> */}
		</Fragment>
	);
};

export default Footer;
