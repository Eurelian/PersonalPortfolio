import React, { Fragment } from "react";
import profile from "../img/profile.jpg";
import { useSpring, animated, config } from "react-spring";

const Hero = () => {
	const profilePic = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 1200 },
		delay: 1500,
	});

	const textLeft = useSpring({
		from: { opacity: 0, transform: "translateX(-500px)" },
		to: { opacity: 1, transform: "translateX(0)" },
		config: config.slow,
		delay: 1000,
	});

	const textRight = useSpring({
		from: { opacity: 0, transform: "translateX(500px)" },
		to: { opacity: 1, transform: "translateX(0)" },
		config: config.slow,
		delay: 1000,
	});

	return (
		<Fragment>
			<section className='hero-container'>
				<animated.div style={textLeft} className='hero-title'>
					{" "}
					Full-Stack Web & App Developer
				</animated.div>
				<animated.div style={textRight} className='hero-sub'>
					{" "}
					I love designing unique Web & Mobile experiences. <br />
				</animated.div>
				<animated.div style={profilePic} className='hero-image'>
					<img src={profile} alt='profile_octavian_sum'></img>
				</animated.div>
			</section>
		</Fragment>
	);
};

export default Hero;
