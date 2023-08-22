/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  RadioGroup,
  Radio,
  HStack,
  Text,
  DarkMode,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Divider
} from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";

// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";
import WaveformAudioPlayer from "components/WaveformAudio/WaveformAudioPlayer.js";

import {  Icon } from "@chakra-ui/react";
import { FaStar, FaRegStar } from "react-icons/fa";

const RatingInput = ({ range, value, onChange }) => {
  return (
    <Box display="flex" justifyContent="center">
      {Array.from({ length: range }, (_, i) => i + 1).map((rating) => (
        <Button
          key={rating}
          variant="unstyled"
          onClick={() => onChange(rating)}
          _hover={{ bg: "transparent" }}
        >
          <Icon color={'yellow.200'} as={value >= rating ? FaStar : FaRegStar} />
        </Button>
      ))}
    </Box>
  );
};

const elements = [
  {type:"scale", id:"rating", label:"How would you rate the above song?", options:['Happy','Sad']},
  {type:"radio", id:"valence", label:"Is the above song Happy or Sad?", options:['Happy','Sad']},
  {type:"radio", id:"arousal", label:"Is the above song Energetic or Slow?", options:['Energetic','Slow']},
  {type:"radio", id:"theme", label:"Do you think the clip had a general theme or did it seem random?", options:['Random','Themed']},
]

const audioUrl = "https://audio-files-170823.s3.amazonaws.com/NA4/CR01.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASMOAX6HUJBI63YQL%2F20230820%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230820T215126Z&X-Amz-Expires=300&X-Amz-Signature=590c439fc3553596081117262e78d484ae4a4a72099e6ac2b96c048953aa6482&X-Amz-SignedHeaders=host"


function SignIn() {

  const [values, setValues] = React.useState({})
  const [rating, setRating] = React.useState(0);

  const handleSave = ({target}) => {
    setValues({
      [target.id]: target.value
    })
  }
  const handleChange = (id) => (value) => {
    setValues({
      [id]: value
    })
  }

  const titleColor = "white";
  const textColor = "gray.400";

  return (
    <Flex position='center'>
      <Flex
        minH='100vh'
        h={{ base: "120vh", lg: "fit-content" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        pt={{ sm: "100px", md: "0px" }}
        flexDirection='column'
        me={{ base: "auto", lg: "auto", xl: "auto" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px='50px'
          >
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            mt={{ base: "50px", md: "150px", lg: "160px", xl: "245px" }}
            mb={{ base: "60px", lg: "95px" }}
            >

            {/* <Heading color={titleColor} fontSize='32px' mb='10px'>
              Nice to see you!
            </Heading> */}
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Play the clip!
            </Text>

            <WaveformAudioPlayer audioUrl={audioUrl} />

            {/* <AudioPlayer /> */}

            <Divider padding='5px' paddingTop='40px'/>

      
            {elements.filter(e => e.type == 'scale').map( (element) => <> <FormControl padding="15px">
              <FormLabel
                ms='4px'
                paddingBottom="10px"
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                {element.label}
              </FormLabel>

              <RatingInput value={rating} range={7} onChange={(newRating) => setRating(newRating)} />

            </FormControl>
            <Divider padding='5px'/>
            </>)}


            {elements.filter(e => e.type == 'radio').map( (element) => <> <FormControl padding="15px">
              <FormLabel
                ms='4px'
                fontSize='sm'
                paddingBottom="10px"
                fontWeight='normal'
                color='white'>
                {element.label}
              </FormLabel>

              {/* <GradientBorder
                // mb='24px'
                // w={{ base: "100%", lg: "fit-content" }}
                // borderRadius='20px'
                > */}
                  
                  <RadioGroup onChange={handleChange(element.id)} id={element.id} value={values[element.id]} defaultValue="">
                  <HStack spacing="50px">
                  {element.options.map(o => <Radio value={o}>              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                {o}
              </FormLabel></Radio>)}
                  </HStack>
                </RadioGroup>
              {/* </GradientBorder> */}
            </FormControl>
            <Divider padding='5px'/>
            </>
            )}


            <Button
              // paddingTop="10px"
              variant='brand'
              fontSize='15px'
              onClick={handleSave}
              // type='submit'
              w='100%'
              maxW='350px'
              h='45'
              mb='20px'
              mt='20px'>
              SAVE
            </Button>


          </Flex>
        </Flex>
      </Flex>
   </Flex>
  );
}

export default SignIn;
