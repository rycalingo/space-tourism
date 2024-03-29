import { Box } from "@chakra-ui/react";
import Header from "./Header";
import { NavLink } from "@/elements";
import { Navbar } from "@/features";

interface Props {
	children: React.ReactNode;
	bkg_image?: string[];
}

const links = [
	{
		label: "home",
		icon: "00",
		url: "",
	},
	{
		label: "destination",
		icon: "01",
		url: "destination",
	},
	{
		label: "crew",
		icon: "02",
		url: "crew",
	},
	{
		label: "technology",
		icon: "03",
		url: "technology",
	},
];

const Stage = ({ children, bkg_image, ...rest }: Props) => {
	const navLink_list = links.map((link, i) => {
		const url = `/${link?.label === "home" ? "" : link?.label}`;
		const state = url === location.pathname ? "active" : "base";

		return (
			<NavLink key={i} url={url} num={`${link?.icon}`} state={state}>
				{link?.label}
			</NavLink>
		);
	});

	return (
		<Box minH="100vh" bgImage={bkg_image} w={["100%"]} bgPos="top center" bgRepeat="no-repeat" bgSize="cover" objectFit="cover" backgroundAttachment="fixed">
			<Box maxW={["100%", "100%", "100%", "2048px"]} mx="auto">
				<Header>
					<Navbar>{navLink_list}</Navbar>
					<Box as="hr" visibility={["hidden", "hidden", "hidden", "visible"]} layerStyle="bar" pos="absolute" left="10%" zIndex="110" w="28%"></Box>
				</Header>
			</Box>
			<Box maxW={["100%", "100%", "100%", "1600px"]} mx="auto" mt={[0, 0, 14, 20]} {...rest}>
				{children}
			</Box>
		</Box>
	);
};
export default Stage;
