import { Center, Circle, Square, Link, keyframes } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { defineStyle } from "@chakra-ui/react";

interface Props {
	to: string;
	size?: string | number | string[];
}

export const ExploreButton = ({ to, size = ["1.2rem", "1.2rem", "1.75rem"], ...rest }: Props) => {
	const [hover, setHover] = useBoolean(false);

	const animationFadeIn = keyframes`
		0% { opacity: 0; transform: scale(0.5,0.5); }
		100% { opacity: 0.2; transform: scale(1,1);}
	`;

	const animationFadeOut = keyframes`
		0% { opacity: 0.2; transform: scale(1,1); }
		100% { opacity: 0; transform: scale(0.5,0.5); }
	`;

	const fadeIO = `${hover ? animationFadeIn : animationFadeOut} 0.3s ease-in-out forwards`;

	const styles = defineStyle({
		halo: {
			bgImage: "radial-gradient(rgba(255,255,255, 1) 60%, rgba(255,255,255, 1) 70%)",
			bgColor: "rgba(255,255,255, 1)",
			zIndex: "0",
			pos: "absolute",
			opacity: "0",
			transform: "scale(0,0)",
		},

		link: {
			lineHeight: "0",
			p: "2.5em",
			color: "brand.300",
			fontFamily: "Heading",
			fontSize: "1em",
			pos: "relative",
			zIndex: "2",
			borderRadius: "50%",
			aspectRatio: "1/1",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},

		explore_button: {
			// p: "2.5em",
			bgColor: "brand.100",
			color: "brand.300",
			fontFamily: "heading",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			cursor: "pointer",
			aspectRatio: "1/1",
		},
	});

	return (
		// <Box>
		<Center {...rest} fontSize={size} flex="1" mt={["6rem", "6rem", "0"]}>
			<Square pos="relative">
				<Circle __css={styles.explore_button} className="explore-button" onMouseEnter={setHover.on} onMouseLeave={setHover.off}>
					<Link sx={styles.link} href={to}>
						<span>EXPLORE</span>
					</Link>
					<Circle __css={styles.halo} size="145%" as={motion.div} animation={fadeIO}></Circle>
				</Circle>
			</Square>
		</Center>
		// </Box>
	);
};
