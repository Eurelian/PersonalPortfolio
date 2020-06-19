import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import comics_awesome from "../img/comics_awesome.png";
import modest_shirley from "../img/modest_shirley.png";
import random_recipe from "../img/random_recipe.png";
import star_struck from "../img/star_struck.png";
import { useSpring } from "react-spring";
import { CardActionArea } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "150px",
		marginBottom: "200px",
	},
	title: {
		fontFamily: "Teko",
		color: "#f5f5f5",
		textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
		fontWeight: 300,
		fontSize: "3.5rem",
		lineHeight: 1.2,
		textAlign: "center",
		marginBottom: "25px",
	},

	subTitle: {
		fontFamily: "Montserrat",
		color: "#f5f5f5",
		textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
		fontWeight: 300,
		fontSize: "1rem",
		lineHeight: 1.2,
		textAlign: "center",
		marginBottom: "50px",
	},
	img: {
		height: 0,
		paddingTop: "56.25%", // 16:9,
		marginTop: "30",
		transition: "all 0.4s ease",
	},
	card: {
		position: "relative",
		maxWidth: 450,
		minWidth: 250,
		marginLeft: "20px",
		transition: "all 0.4s ease",
		cursor: "pointer",
		marginBottom: "25px",
		"&:hover": {
			background:
				" linear-gradient(56deg, rgba(255,46,99,1) 0%, rgba(232,0,59,1) 100%)",
			opacity: "1",
		},
		"&:hover $img": {
			opacity: 0.2,
			zIndex: -1,
		},
		"&:hover $cardBack": {
			opacity: 1,
		},
		[theme.breakpoints.down("xs")]: { maxWidth: "90%" },
	},

	cardBack: {
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		fontFamily: "teko",
		textShadow: "1px 1px 5px rgba(0,0,0,0.4)",
		opacity: 0,
		position: "absolute",
		transition: "all 0.4s ease",
		fontSize: "2rem",
		color: "black",
		textAlign: "center",
		color: "white",
		[theme.breakpoints.down(1700)]: {
			fontSize: "1.5rem",
		},
		[theme.breakpoints.down(1275)]: {
			fontSize: "1.2rem",
		},
		[theme.breakpoints.down(650)]: {
			fontSize: "2rem",
		},
		[theme.breakpoints.down(550)]: {
			fontSize: "1.5rem",
		},
	},

	cardRow: { maxWidth: "80%", margin: "0 50px", flexGrow: 1 },
}));

const MyWork = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<Grid className={classes.root} container justify='center'>
				<Grid item xs={12}>
					<Typography className={classes.title}>My Work</Typography>

					<Typography className={classes.subTitle}>
						Check out what I've been working on recently
					</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					style={{ width: "100%" }}
					container
					direction='row'
					justify='center'
				>
					<Grid container className={classes.cardRow} justify='center'>
						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardActionArea
									target='_blank'
									href='https://comicsawesome.netlify.app/'
								>
									<CardMedia
										className={classes.img}
										image={comics_awesome}
									></CardMedia>
									<CardMedia className={classes.cardBack}>
										E-Commerce Store
										<br /> Stack: <br /> ReactJS, NodeJS, MongoDB, Material UI
									</CardMedia>
								</CardActionArea>
							</Card>
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardActionArea
									target='_blank'
									href='https://quizzical-shockley-6aebfe.netlify.app/'
								>
									<CardMedia
										className={classes.img}
										image={star_struck}
									></CardMedia>
									<CardMedia className={classes.cardBack}>
										NASA Pic of The Day
										<br /> Stack: <br /> ReactJS, Material UI, API's
									</CardMedia>
								</CardActionArea>
							</Card>
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardActionArea
									target='_blank'
									href='https://determined-villani-7bbaa8.netlify.app/'
								>
									<CardMedia
										className={classes.img}
										image={random_recipe}
									></CardMedia>
									<CardMedia className={classes.cardBack}>
										Recipe Generator
										<br /> Stack: <br /> ReactJS, Material UI, API's
									</CardMedia>
								</CardActionArea>
							</Card>
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardActionArea
									target='_blank'
									href='https://eurelian.github.io/modestShirley/'
								>
									<CardMedia
										className={classes.img}
										image={modest_shirley}
									></CardMedia>
									<CardMedia className={classes.cardBack}>
										Recipe Blog
										<br /> Stack: <br /> JAVASCRIPT, BOOTSTRAP
									</CardMedia>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default MyWork;
