import {
	FormControl,
	FormLabel,
	RadioGroup,
	Radio,
	HStack,
	Divider,
    Input,
    Text
} from "@chakra-ui/react";

import GradientBorder from "../GradientBorder/GradientBorder";

const Name = ({values, handleChange, audioString}) => {

	const textColor = "gray.400";
    const titleColor = "white";

	return (
		<>

        <Text
            mb='26px'
            ms='4px'
            color={textColor}
            fontWeight='bold'
            fontSize='14px'>
            Nice to see you!
        </Text>
        <Text
            mb='26px'
            ms='4px'
            color={textColor}
            fontWeight='bold'
            fontSize='14px'>
            Welcome to our music perception survey. We've developed tracks using a unique AI technology, aiming to capture specific emotional tones. As you listen, we'd love for you to share your impressions and feelings about each piece. Your honest feedback will greatly contribute to our ongoing research in AI-generated music. Let's embark on this musical journey together!
        </Text>
        <Text
            mb='26px'
            ms='4px'
            color={textColor}
            fontWeight='bold'
            fontSize='14px'>
            Thank you for your participation!            
    </Text>
  
			<> 
				<FormControl padding="15px">
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'>
                  Name
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius='20px'>
                  <Input
                    id='name'
                    value={values['name'] ?? ''}
                    onChange={(e) => handleChange('name')(e.target.value)}
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: "100%", md: "346px" }}
                    maxW='100%'
                    h='46px'
                    type='text'
                    placeholder='Your Name'
                  />
                </GradientBorder>
				</FormControl>

				{/* <Divider padding='5px'/> */}
			</>
	</>
	)
}

export default Name