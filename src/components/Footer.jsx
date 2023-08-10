import React from "react";
import {
  
  Box,
  Text,
  Avatar,
  VStack,
  Stack,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      w={"full"}
      minH={"45"}
      color={"white"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["cetnre", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>



          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}  >
            Leading crypto App for Crypto News and Tracking
          </Text>
        </VStack>





        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]}></Avatar>
          <Text> Developer</Text>
        </VStack>
      </Stack>

      
    </Box>
  );
};

export default Footer;
