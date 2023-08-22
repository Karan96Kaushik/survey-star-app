import {
	Box,
	Button,
} from "@chakra-ui/react";

import {  Icon } from "@chakra-ui/react";
import { FaStar, FaRegStar, FaSquare, FaRegSquare } from "react-icons/fa";

const RatingInput = ({ range, value, onChange, square=true }) => {
	return (
		<Box display="flex" justifyContent="center">
			{Array.from({ length: range }, (_, i) => i + 1).map((rating) => (
				<Button
					key={rating}
					variant="unstyled"
					onClick={() => onChange(rating)}
					_hover={{ bg: "transparent" }}
				>
					<Icon color={'yellow.200'} as={value >= rating ? (square ? FaSquare : FaStar) : (square ? FaRegSquare : FaRegStar)} />
				</Button>
				))}
		</Box>
	);
};

export default RatingInput;
