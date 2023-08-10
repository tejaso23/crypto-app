import React from "react";
import { Link } from "react-router-dom";
import { Heading, VStack,Text } from "@chakra-ui/react";


const CoinCard = ({ id,name, img, symbol, price,currentSymbol,setSelectedId }) => {
  
  const handleClick = () => {
    setSelectedId(id); // Set the selected id when clicking on the card
  };




    return(
      <Link to={`/coins/${id}`} target="_blank" onClick={handleClick}>
    <VStack
      width={155}
      height={270}
      shadow="dark-lg"
      padding={10}
      m={4}
      marginRight={10}
      marginTop={10}
      borderRadius="md"
      marginLeft={10}
      transition="all 0.2s"
      css={{
        "&:hover": {
          transform: "scale(1.2)",
        },
      }}
    >
      <img src={img} width={100} height={100} objectFit="contain" alt="Exchange" />

      <Heading  >
        {symbol}
      </Heading>
      <Text noOfLines={1} >{name}</Text>

      <Text>{price ? `${currentSymbol}${price}` : "NA"}</Text>
    </VStack>
 </Link>
    );
}


export default CoinCard;

 