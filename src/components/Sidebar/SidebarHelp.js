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

import { InfoIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import IconBox from "components/Icons/IconBox";
import React from "react";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, ...rest } = props;
  return (
    <Flex
      borderRadius='15px'
      flexDirection='column'
      bgImage={SidebarHelpImage}
      bgSize='cover'
      bgPosition='center'
      justifyContent='flex-start'
      alignItems='start'
      p='16px'
      minH='170px'
      minW='218px'>
      <IconBox width='35px' h='35px' bg='white' mb='auto'>
        <InfoIcon color='brand.200' h='18px' w='18px' />
      </IconBox>
      <Text fontSize='sm' color='white' fontWeight='bold'>
        About this project
      </Text>
      <Text fontSize='xs' color='white' mb='10px'>
      Welcome to our musical experiment! You're about to listen to tracks generated by an advanced Artificial Intelligence model, trained to craft music tailored to specific emotional tones. Our research employed a special technique, the UNet diffusion model, to create these pieces, drawing inspiration from two vast datasets: EMOPIA and LakhMIDI. The AI was trained to generate music within four emotional quadrants, ensuring a diverse range of melodies. As a listener, we invite you to participate in a blind survey after experiencing the tracks. Your unbiased feedback will be invaluable in understanding the emotional resonance and authenticity of AI-composed music. Enjoy the melodies, and thank you for being a crucial part of our study!
      </Text>
      {/* <Link
        w='100%'
        href='https://demos.creative-tim.com/docs-vision-ui-dashboard-chakra/'>
        <Button
          fontSize='10px'
          fontWeight='bold'
          w='100%'
          bg='linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)'
          _hover='none'
          _active={{
            bg: "white",
            transform: "none",
            borderColor: "transparent",
          }}
          _active='none'
          _focus={{
            boxShadow: "none",
          }}
          color='white'>
          DOCUMENTATION
        </Button>
      </Link> */}
    </Flex>
  );
}
