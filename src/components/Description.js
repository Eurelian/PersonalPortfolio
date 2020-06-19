import React from "react";
import desk from "../img/desk.svg";
import SkillCards from "../components/SkillCards";
import Grid from "@material-ui/core/Grid";
import { useSpring, animated, config } from "react-spring";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

const Description = () => {
	const deskPicIn = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		delay: 2000,
		config: config.slow,
	});

	return (
		<section>
			<div>
				<animated.div style={deskPicIn} className='svg-container'>
					<img
						src={desk}
						style={{ marginBottom: "-10px" }}
						alt='developer desk'
					></img>
				</animated.div>

				<div className='main-description'>
					<div className='description'>
						<VisibilitySensor once partialVisibility={true}>
							{({ isVisible }) => (
								<Spring
									to={{
										opacity: isVisible ? 1 : 0,
										transform: isVisible
											? "translateX(0)"
											: "translateX(200px)",
									}}
								>
									{(props) => (
										<div style={{ ...props }}>
											<h1 className='description-title'>
												Hi, I'm Octavian. Great to meet you!
											</h1>
										</div>
									)}
								</Spring>
							)}
						</VisibilitySensor>
						<VisibilitySensor once partialVisibility={true}>
							{({ isVisible }) => (
								<Spring
									to={{
										opacity: isVisible ? 1 : 0,
										transform: isVisible
											? "translateX(0)"
											: "translateX(-200px)",
									}}
								>
									{(props) => (
										<div style={{ ...props }}>
											<p style={{ ...props }} className='description-text'>
												I'm the happy victim of the Genuine Love Story. A
												Communications and Advertising Specialist that
												irrecuperably fell in love with coding, and decided to
												never look back. <br /> <br /> I really enjoy building
												unique and memorable digital experiences and am a strong
												adept of Team Work. Oh, and did I mention that I'm quite
												comfortable under tight deadlines?
											</p>
										</div>
									)}
								</Spring>
							)}
						</VisibilitySensor>
					</div>
				</div>
				<Grid container justify='center' style={{ marginTop: "-150px" }}>
					<Grid item container xs={12}>
						<SkillCards />
					</Grid>
				</Grid>
			</div>
		</section>
	);
};

export default Description;
