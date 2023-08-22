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

const Name = ({values, handleChange, audioString, done}) => {

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
            Thanks!
        </Text>
        <Text
            mb='26px'
            ms='4px'
            color={textColor}
            fontWeight='bold'
            fontSize='14px'>
            We appreciate you taking the time to do the survey, if you found it interesting, feel free to share with as many people as you want!
        </Text>
        {done !=2 && <> <Text
            mb='26px'
            ms='4px'
            color={textColor}
            fontWeight='bold'
            fontSize='14px'>
            Anything that you want to share about the experiece?            
        </Text>
        <> 
            <FormControl padding="15px">
            <FormLabel
                color={titleColor}
                ms='4px'
                fontSize='sm'
                fontWeight='normal'>
                Feedback
            </FormLabel>
            <GradientBorder
                mb='24px'
                h='50px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                id='feedback'
                value={values['feedback'] ?? ''}
                onChange={(e) => handleChange('feedback')(e.target.value)}
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
                h='45px'
                type='text'
                placeholder="What's on your mind?"
                />
            </GradientBorder>
            </FormControl>

            {/* <Divider padding='5px'/> */}
        </>
        </>}
	</>
	)
}

export default Name