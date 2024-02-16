import { Box, useStyleConfig, chakra } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
	children: React.ReactNode;
	url?: string;
	num?: string;
	state?: string;
}

const RouterLink = chakra(Link);

export const NavLink = ({ children, url, num, state, ...rest }: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	const variant = isHovered ? "hover" : state;

	const styles = useStyleConfig("NavLink", { variant });

	return (
		<RouterLink to={`${url}`} __css={styles} {...rest} onMouseEnter={() => (variant !== "active" ? setIsHovered(true) : null)} onMouseLeave={() => setIsHovered(false)}>
			<Box as="span">
				<Box as="span" textStyle="link_num" display={["inline", "inline", "none", "inline"]}>
					{num ? `${num} ` : null}
				</Box>
				{children}
			</Box>
		</RouterLink>
	);
};
