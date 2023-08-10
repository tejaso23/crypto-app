import React from "react";
import { Heading, VStack,Text } from "@chakra-ui/react";
const ExchangeCard = ({ name, img, rank, url }) => {
  

  return (
   
    <VStack
      as = "a"
      href={url}
      target="_blank"
      width={150}
      height={220}
      shadow={"dark-lg"}
      padding={10}
     
      marginRight={10}
      marginTop={20}
      marginLeft={10}
      borderRadius={"md"}
      
      transition={"all 0.3s"}
      css={{
        "&:hover": {
          transform: "scale(1.3)",
        },
      }}
    >
       <Heading
  minWidth={6}
  size={"sm"}
  noOfLines={1}
  border={"1px"}
  borderRadius={100}
  backgroundColor={"whitesmoke"}
  objectFit={"contain"}
  display="flex"         // Add this style to make the container flex
  alignItems="center"   // Center the content vertically
  justifyContent="center" // Center the content horizontally
>
  {rank}
</Heading>
      <img
        src={img}
        width={50}
       
        objectFit={"contain"}
        alt={"Exchange"}
      ></img>

      
      <Text marginBottom={1} >{name}</Text>
    </VStack>
  );
};

export default ExchangeCard;
