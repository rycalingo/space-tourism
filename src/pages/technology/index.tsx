import Stage from "@/layout/Stage";
import { Heading, chakra } from "@chakra-ui/react";

const images = import.meta.glob("@/assets/technology/background-*.jpg", { eager: true });

const imageBG = [];
for (let img of Object.keys(images)) {
	imageBG.push(img);
}
imageBG.push(imageBG.splice(0, 1)[0]);

const [bg_mobile, bg_tablet, bg_desk] = imageBG;

const ChakraStage = chakra(Stage);

export default function Technology() {
	return (
		<ChakraStage bkg_image={[bg_mobile, bg_tablet, bg_desk]}>
			<Heading>Technology</Heading>
		</ChakraStage>
	);
}
