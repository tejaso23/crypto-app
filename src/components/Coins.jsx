import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, Button } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import Loading from "./Loading";
import { RadioGroup, Radio } from "@chakra-ui/react";
import CoinCard from "./CoinCard";
import ErrorComponent from "./ErrorComponent";
import Footer from "./Footer";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorcomponent, setError] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [page, setPage] = useState(0);
  const [currency, setcurrency] = useState("inr");
  const currentSymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (newpage) => {
    if (newpage < 0 || newpage > btns.length) {
      // Page number out of bounds, do nothing
      return;
    }
    setPage(newpage);
    setLoading(true);
  };

  const btns = new Array(101).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );

        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency, page]);

  if (errorcomponent)
    return (
      <ErrorComponent message={"fetching problem of Coins"}></ErrorComponent>
    );

  return (
    <>
      <Container mb={"1"} maxW={"container.xl"}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <RadioGroup value={currency} onChange={setcurrency} p={10}>
              <HStack spacing={4}>
                <Radio value="inr">₹INR</Radio>
                <Radio value="usd">$USD</Radio>
                <Radio value="eur">€EUR</Radio>
              </HStack>
            </RadioGroup>
            <HStack wrap="wrap" justifyContent={"space-evenly"}>
              {coins.map((i) => (
                <CoinCard 
                  id={i.id}
                  key={i.id}
                  name={i.name}
                  price={i.current_price}
                  img={i.image}
                  symbol={i.symbol}
                  currentSymbol={currentSymbol}
                  setSelectedId={setSelectedId}
                />

              ))}
            </HStack>

            <HStack mb={2} mt={5} spacing="4" justifyContent="center">
              <Button
                bgColor="blackAlpha.900"
                color="white"
                onClick={() => changePage(page - 1)}
              >
                Back
              </Button>

              <Button
                bgColor="blackAlpha.900"
                color="white"
                onClick={() => changePage(page + 1)}
              >
                Next
              </Button>
            </HStack>

            <HStack w={"full"} overflow={"auto"} p={8}>
              {btns.map(
                (item, index) => (
                  (index = index + 1),
                  (
                    <Button
                      key={index}
                      bgColor={page === index ? "#8F00FF" : "blackAlpha.900"}
                      color="white"
                      onClick={() => changePage(index)}
                    >
                      {index}
                    </Button>
                  )
                )
              )}
            </HStack>
          </>
        )}
      </Container>

      <Footer></Footer>
    </>
  );
};

export default Coins;
