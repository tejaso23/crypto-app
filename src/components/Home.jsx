import React from "react";
import { Image, Box, Text } from "@chakra-ui/react";
import btc from "../assets/btc.png";
import Footer from "./Footer"
import {motion} from "framer-motion"





const Home = () => {
  return (
   <> <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
    <motion.div style={{
      height:"80vh",
    }}
    animate={{
      translateY:"20px"
    }}

    transition={{
      duration:0.5,
      repeat:Infinity,
      repeatType:"reverse"
    }}
    >
    <Image
       
        w={"full"}
        h={"full"}
        objectFit={"contain"}
        src={btc}
        filter={"grayscale(1)"}
      ></Image>

    </motion.div>
      
      <Text
        
        fontSize={"5xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-10"}
      >
        CryptoXX
      </Text>
     
    </Box>
     <Footer></Footer>
     </>
  );
};

export default Home;
