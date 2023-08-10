import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import Loading from "./Loading";
import Footer from "./Footer";
import ExchangeCard from "./ExchangeCard";
import ErrorComponent from "./ErrorComponent";


const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorcomponent,setError] = useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {
     try {
      const { data } = await axios.get(`${server}/exchanges?per_page=100`);

      setExchanges( data );

      console.log(data);

      setLoading(false);

     } catch (error) {
      setError(true);
      setLoading(false);
     }
    }
   
   fetchExchanges();
  
  
  }, []);

  if(errorcomponent) return <ErrorComponent message={"fetching problem of Exchanges"}></ErrorComponent>

  return (
    <>
      <Container mb={"10"} maxW={"container.xl"} >
      
        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            <HStack wrap="wrap" justifyContent={"space-evenly"}>
              {exchanges.map((i) => (
               <ExchangeCard  
               key={i.id}
               name = {i.name} img = {i.image} rank = {i.trust_score_rank} url = {i.url}/>
               
              ))}
            </HStack>
          </>
        )}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Exchange;
