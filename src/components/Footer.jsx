import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const avatarsrc="https://avatars.githubusercontent.com/u/88219300?v=4"

function Footer() {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
        
      <Stack
        direction={["column", "row"]}
        h={"full"}
        alignItems={"center"}
      >

        <VStack w={'full'} alignItems={['center','flex-start']}>
            <Text fontWeight={'bold'}>About Us</Text>
            <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>Best Crypto Info Page Made By Rashad , we provide the details of all Coins and Exchanges in this Page</Text>
        </VStack>
        <VStack>
            <Avatar boxSize={'28'} mt={['4','0']} src={avatarsrc} onClick={()=>toast(
  `Thank You for Checking Out This Site.This a Project Done by me for learning chakra ui and much more about React,Toast etc And ThankYou!!!!❤️❤️❤️\n\n`,
  {
    duration: 6000,
  }
)}/>
            <Text>Made By</Text>
            <Toaster/>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
