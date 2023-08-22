import {
	FormControl,
	FormLabel,
	RadioGroup,
	Radio,
	HStack,
	Divider,
    Text,
	Heading
} from "@chakra-ui/react";

import RatingInput from "../RatingInput/RatingInput";
import WaveformAudioPlayer from "../WaveformAudio/WaveformAudioPlayer";

const Questions = ({values, handleChange, elements, audioString, count}) => {

	const textColor = "gray.400";

	return (
		<>

		<Heading
            mb='10px'
            ms='4px'
            color={textColor}
            // fontWeight='bold'
            // fontSize='14px'
			>

            Clip #{count}
            
        </Heading>
        <Text
            mb='26px'
            ms='4px'
            color={textColor}
            fontWeight='bold'
            fontSize='14px'>

            Play the clip!
            
        </Text>
		<WaveformAudioPlayer audioString={audioString} />
		
		<Divider padding='5px' paddingTop='40px'/>
		
		{elements.filter(e => e.type == 'scale').map( (element) => 
			<> 
			<FormControl padding="15px">
				<FormLabel
					ms='4px'
					paddingBottom="10px"
					fontSize='sm'
					fontWeight='normal'
					color='white'>
					{element.label}
				</FormLabel>
				
				<RatingInput value={values[element.id] || 0} range={7} onChange={handleChange(element.id)} square={element.square || false} />
			
			</FormControl>
			<Divider padding='5px'/>
			</>
		)}
		
		
		{elements.filter(e => e.type == 'radio').map( (element) => 
			<> 
				<FormControl padding="15px">
					<FormLabel
						ms='4px'
						fontSize='sm'
						paddingBottom="10px"
						fontWeight='normal'
						color='white'>
						{element.label}
					</FormLabel>

					<RadioGroup onChange={handleChange(element.id)} id={element.id} value={values[element.id] || ""} defaultValue="">
						<HStack spacing="50px">
							{element.options.map(o => 
								<Radio value={o}>              
									<FormLabel
										ms='4px'
										fontSize='sm'
										fontWeight='normal'
										color='white'>
										{o}
									</FormLabel>
								</Radio>
							)}
						</HStack>
					</RadioGroup>

				</FormControl>

				<Divider padding='5px'/>
			</>
		)}
	</>
	)
}

export default Questions