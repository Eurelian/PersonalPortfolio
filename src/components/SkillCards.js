import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import iconFE from "../img/icon_Front_End.svg";
import iconBE from "../img/icon_Back_End.svg";
import iconPM from "../img/icon_project_man.svg";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "300px",
    padding: "20px",
    margin: "0px 15px",
    borderRadius: "15px",
    boxShadow: "2px 2px 15px 2px rgba(0,0,0,0.3)",
    marginBottom: "20px",
  },
  title: {
    fontFamily: "Teko",
    fontSize: "2rem",
  },

  subTitle: {
    fontFamily: "Montserrat",
    fontSize: "1rem",
    color: "#ff2e63",
    marginTop: "30px",
  },

  listItem: {
    textAlign: "center",
    fontSize: "0.8rem",
    fontFamily: "Montserrat",
    marginTop: "10px",
  },

  container: {
    width: "100%",
    justifyContent: "center",
  },

  imgContainer: {
    maxWidth: "80px",
    margin: "0 auto",
  },

  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const SkillCards = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid container justify="center" style={{ width: "80%" }}>
          <VisibilitySensor partialVisibility={true} minTopValue={100}>
            {({ isVisible }) => (
              <Spring
                to={{
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {(props) => (
                  <Grid
                    style={{ ...props }}
                    item
                    container
                    xs={12}
                    sm={6}
                    md={4}
                    justify="center"
                  >
                    <Card className={classes.card}>
                      <CardContent>
                        <Box className={classes.imgContainer}>
                          <img
                            className={classes.img}
                            src={iconBE}
                            alt="front-end development"
                          />
                        </Box>
                        <Typography align="center" className={classes.title}>
                          Front-End Development
                        </Typography>
                        <Typography align="center" className={classes.subTitle}>
                          Languages I speak:
                        </Typography>
                        <Typography
                          align="center"
                          className={classes.listItem}
                          style={{ fontSize: "1rem" }}
                        >
                          HTML, CSS, JavaScript, ReactJS, NextJS, Angular
                        </Typography>

                        <Typography align="center" className={classes.subTitle}>
                          Tools i Use
                        </Typography>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li className={classes.listItem}>
                            Material UI, Bootstrap, AntD,
                          </li>

                          <li className={classes.listItem}>
                            React Spring, Framer Motion, ReCharts
                          </li>
                          <li className={classes.listItem}>Adobe XD, Figma</li>

                          <li className={classes.listItem}>Netlify, Vercel</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility={true} minTopValue={100}>
            {({ isVisible }) => (
              <Spring
                to={{
                  opacity: isVisible ? 1 : 0,
                }}
                delay={150}
              >
                {(props) => (
                  <Grid
                    style={{ ...props }}
                    item
                    container
                    xs={12}
                    sm={6}
                    md={4}
                    justify="center"
                  >
                    <Card className={classes.card}>
                      <CardContent>
                        <Box className={classes.imgContainer}>
                          <img
                            className={classes.img}
                            src={iconFE}
                            alt="back-end development"
                          />
                        </Box>
                        <Typography align="center" className={classes.title}>
                          Back-End Development
                        </Typography>
                        <Typography align="center" className={classes.subTitle}>
                          Languages I speak:
                        </Typography>
                        <Typography
                          align="center"
                          className={classes.listItem}
                          style={{ fontSize: "1rem" }}
                        >
                          NodeJs, NoSQL, SQL
                        </Typography>

                        <Typography align="center" className={classes.subTitle}>
                          Tools i Use
                        </Typography>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li className={classes.listItem}>NodeJS, Express</li>
                          <li className={classes.listItem}>MongoDB</li>
                          <li className={classes.listItem}>
                            PostgreSQL, MySQL
                          </li>
                          <li className={classes.listItem}>
                            GitHub, BitBucket, Nginx
                          </li>
                          <li className={classes.listItem}>Heroku, Netfliy</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility={true} minTopValue={100}>
            {({ isVisible }) => (
              <Spring
                to={{
                  opacity: isVisible ? 1 : 0,
                }}
                delay={250}
              >
                {(props) => (
                  <Grid
                    style={{ ...props }}
                    item
                    container
                    xs={12}
                    sm={6}
                    md={4}
                    justify="center"
                  >
                    <Card className={classes.card}>
                      <CardContent>
                        <Box className={classes.imgContainer}>
                          <img
                            className={classes.img}
                            src={iconPM}
                            alt="project management"
                          />
                        </Box>
                        <Typography align="center" className={classes.title}>
                          Project-Mangement
                        </Typography>
                        <Typography align="center" className={classes.subTitle}>
                          Practices:
                        </Typography>
                        <Typography
                          align="center"
                          className={classes.listItem}
                          style={{ fontSize: "1rem" }}
                        >
                          Agile, SCRUM
                        </Typography>

                        <Typography align="center" className={classes.subTitle}>
                          Tools i Use
                        </Typography>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li className={classes.listItem}>
                            Trello, Jira, Monday
                          </li>
                          <li className={classes.listItem}>Slack, Discord</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SkillCards;
