import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NavBar from "./navbar";
import Button from "@material-ui/core/Button";
import axios from "axios";
import AbsoluteWrapper from "./AbsoluteWrapper";
import { Link } from "react-router-dom";
import * as easings from "d3-ease";

import { useSpring, animated as a } from "react-spring";

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "80vh",
		width: "100%",
		background: "white",
		paddingBottom: "100px",
	},
	navbar: { height: "50px" },

	field: { width: "100%" },
	title: {
		fontFamily: "Teko",
		fontSize: "4rem",
		textAlign: "center",
		width: "75%",
		margin: "0 auto",
		lineHeight: "1.2",
		marginTop: "50px",
		marginBottom: "20px",
	},
	formContainer: {
		width: "550px",
		[theme.breakpoints.down(750)]: {
			width: "350px",
			margin: "10px 20px",
		},
	},
	btn: {
		border: "2px solid #ff2e63",
		color: "#ff2e63",
		fontFamily: "Montserrat",
		fontSize: "0.8rem",
		fontWeight: "bold",
		padding: "15px 60px",
		borderRadius: 10,
		cursor: "pointer",
		maxWidth: "100px",
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

	fieldContainer: {
		padding: "10px",
	},

	input: {
		"& label.Mui-focused": {
			color: "green",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "green",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "red",
			},
			"&:hover fieldset": {
				borderColor: "yellow",
			},
			"&.Mui-focused fieldset": {
				borderColor: "green",
			},
		},
	},
}));

const ContactForm = (props) => {
	const classes = useStyles();
	const { path } = props.match;

	const [contact, setContact] = useState({ name: "", email: "", message: "" });
	const [isSent, setIsSent] = useState(false);

	const handleChange = (e) => {
		setContact({ ...contact, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			contact.name.length < 3 ||
			contact.email.length < 3 ||
			contact.message.length < 3
		)
			alert("Please fill in all the fields.");
		else {
			axios
				.post("https://portfoliomessage.herokuapp.com/contact", {
					name: contact.name,
					email: contact.email,
					message: contact.message,
				})
				.then((res) => console.log(res))
				.catch((err) => console.error(err));
			setContact({ name: "", email: "", message: "" });
			setIsSent(!isSent);
		}

		console.log("Submitted");
	};

	const moveLeft = useSpring({
		to: async (next, cancel) => {
			await next({
				transform: isSent ? "translateX(1000px)" : "translateX(0px)",
				opacity: isSent ? 0 : 1,
			});
			await next({
				display: isSent ? "none" : "block",
			});
		},
		config: { duration: 1000, easing: easings.easeCubic },
	});

	const moveRight = useSpring({
		to: async (next, cancel) => {
			await next({
				transform: isSent ? "translateX(-1000px)" : "translateX(0px)",
				opacity: isSent ? 0 : 1,
			});
			await next({
				display: isSent ? "none" : "block",
			});
		},
		config: { duration: 1000, easing: easings.easeCubic },
	});

	const confirm = useSpring({
		to: {
			transform: isSent ? "translateY(-50px)" : "translateY(-400px)",
			opacity: isSent ? 1 : 0,
		},

		delay: 1000,
		config: { duration: 1000 },
	});

	return (
		<Fragment>
			<AbsoluteWrapper>
				<NavBar className={classes.navbar} path={path} />
				<Grid
					container
					className={classes.root}
					justify='center'
					alignItems='center'
				>
					{/* {!isSent ? (
						<> */}

					<Grid item xs={12}>
						<a.div style={moveRight}>
							<Typography className={classes.title}>
								So nice of you to reach out. <br />
								What can I do you for?
							</Typography>
						</a.div>
					</Grid>

					<a.div style={moveLeft}>
						<Grid container className={classes.formContainer}>
							<Grid item xs={12}>
								<form onSubmit={(e) => handleSubmit(e)}>
									<Grid container direction='column'>
										<Grid container direction='row'>
											<Grid item xs={6}>
												<Box className={classes.fieldContainer}>
													<TextField
														id='name'
														onChange={handleChange}
														inputProps={{ className: classes.input }}
														className={classes.field}
														value={contact.name}
														variant='outlined'
														placeholder='Name'
													></TextField>
												</Box>
											</Grid>
											<Grid item xs={6}>
												<Box className={classes.fieldContainer}>
													<TextField
														type='email'
														id='email'
														value={contact.email}
														onChange={handleChange}
														placeholder='Email'
														variant='outlined'
														className={classes.field}
													></TextField>
												</Box>
											</Grid>
										</Grid>

										<Grid item xs={12}>
											<Box className={classes.fieldContainer}>
												<TextField
													id='message'
													onChange={handleChange}
													variant='outlined'
													className={classes.field}
													value={contact.message}
													multiline
													rows={10}
													rowsMax={40}
													placeholder='Your Message'
												></TextField>
											</Box>
										</Grid>

										<Grid item xs={12} container justify='center'>
											<Button type='submit' className={classes.btn}>
												Send
											</Button>
										</Grid>
									</Grid>
								</form>
							</Grid>
						</Grid>
					</a.div>
					{/* </>
					) : null} */}
					{isSent ? (
						<a.div style={confirm}>
							<Grid container direction='column' alignItems='center'>
								<Grid item xs={12}>
									<Typography className={classes.title}>
										Message received. I'll reply as soon as possible.
									</Typography>
								</Grid>
								<Grid item>
									<Link to='/'>
										<div
											className={classes.btn}
											onClick={() => setIsSent(!isSent)}
										>
											Cool!
										</div>
									</Link>
								</Grid>
							</Grid>
						</a.div>
					) : null}
				</Grid>
			</AbsoluteWrapper>
		</Fragment>
	);
};

export default ContactForm;
