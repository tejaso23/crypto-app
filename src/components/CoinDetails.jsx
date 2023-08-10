/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useState, useEffect } from "react";

import Coindetailerror from "./Coindetailerror";
import { server } from "../index";
import Footer from "./Footer";
import axios from "axios";
import Loading from "./Loading";
import {
  StatArrow,
  StatHelpText,
  Image,
  Text,
  Container,
  Box,
  Badge,
  RadioGroup,
  HStack,
  Radio,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  Progress,
  Button
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import Chart_component from "./Chart_component";

const CoinDetails = () => {
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(true);
  const [currency, setcurrency] = useState("inr");
  const [error, setError] = useState(false);
  const [days,setDays] = useState("24h");
const [selectedkey,setSelectedKey] = useState(0);

  const [chartArray,setchartArray] = useState([]);
  const currentSymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const btns = ["24h","7d","14d","30d","60d","200d","365d","max"];
  const params = useParams();
  
 const switchChartStatus = (key)=>{
  let selectedDay = 0
          switch(key) {
            case "24h" : 
            setDays("24h");
           selectedDay = 0
           
            break;

            case "7d" : 
            
            selectedDay = 1
            break;

            case "14d" : 
            
            selectedDay = 2;
            break;

            case "30d" : 
            
            selectedDay = 3;
            break;

            case "60d" : 
           
            selectedDay = 4;
            break;

            case "200d" : 
           
            selectedDay = 5;
            break;

            case "1y" : 
            
            selectedDay = 6;
            break;

            case "max" : 
            
            selectedDay = 7;
            break;

            default:
              
              selectedDay = 0;
              break;
          }

          setDays(key);
 
  setSelectedKey(selectedDay);

  }


  useEffect(() => {
    const fetchcoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        
        
        
        const {data: chartData} = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        
        
        console.log(chartData.prices);

        setCoin(data);
        setchartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchcoin();
  }, [currency, days, params.id]);

  if (error)
    return (
      <Coindetailerror
        message={
          " while fetching coin details OR NOT selcted the Coin from Coins section"
        }
      ></Coindetailerror>
    );

  return (
    <>
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Box width={"full"} borderWidth={1}>
            <Chart_component arr={chartArray} currency={currentSymbol} days={days}></Chart_component>
          </Box>

         <HStack p={4} overflow={"auto"} >
        {btns.map((i,index)=>(
             <Button  key = {i}  border = "2px" onClick={()=>(switchChartStatus(i))} borderColor={selectedkey === index ? 'blue' : 'gray'}>{i}</Button>
        ))}


         
         </HStack>




          <RadioGroup value={currency} onChange={setcurrency} p={10}>
            <HStack spacing={4}>
              <Radio value="inr">₹INR</Radio>
              <Radio value="usd">$USD</Radio>
              <Radio value="eur">€EUR</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={4} p={10} alignItems={"flex-start"}>
            <Text
              mb={10}
              fontSize={"small"}
              alignSelf={"center"}
              opacity={"0.8"}
            >
              Last Updated On {Date().split("G")[0]}
            </Text>

            <Image
              src={coin.image.large}
              w={16}
              h={16}
              objectFit={"contain"}
            ></Image>

            <Stat>
              <StatLabel>{coin.name}</StatLabel>

              <StatNumber>
                {currentSymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>

              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                ></StatArrow>
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <Badge fontSize={"2xl"} bgColor={"blackAlpha.800"} color={"white"}>
              {" "}
              {`#${coin.market_cap_rank}`}
            </Badge>

            <CustomBar
              high={`${currentSymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currentSymbol}${coin.market_data.low_24h[currency]}`}
            ></CustomBar>

            <Box w={"full"} p={"4"}>
              <Item
                title={"Total Supply"}
                value={coin.market_data.total_supply}
              ></Item>
              <Item
                title={"Circulating Supply"}
                value={coin.market_data.circulating_supply}
              ></Item>

              <Item
                title={"Market Cap"}
                value={`${currentSymbol}${coin.market_data.market_cap[currency]}
                `}
              ></Item>
              <Item
                title={"All Time Low"}
                value={`${currentSymbol}${coin.market_data.atl[currency]}`}
              ></Item>

              <Item
                title={"All Time High"}
                value={`${currentSymbol}${coin.market_data.ath[currency]}`}
              ></Item>
            </Box>
          </VStack>
        </>
      )}
     
    </Container>
    <Footer></Footer>
    </>
     
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"5"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
 <> <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"}>
      {" "}
    </Progress>
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme="red"></Badge>
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme="green"></Badge>
    </HStack>
  </VStack>
  </>
);

export default CoinDetails;
