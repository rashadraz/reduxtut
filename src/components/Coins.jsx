import {
  Button,
  Container,
  
  
  HStack,
 
  Radio,
  RadioGroup,

  
} from "@chakra-ui/react";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { server } from "../index";
import CoinCard from "./CoinCard";
import Error from "./Error";
import Loader from "./Loader";

function Coins() {
  const [coins, setCoins] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);

  const [currency, setCurrency] = useState("inr");

  const currencySymbol = currency === "inr" ? "₹" : currency === 'eur' ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

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

  if (error) return <Error message={"error While fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
        <RadioGroup value={currency} onChange={setCurrency}  paddingTop={'5'}>
          <HStack spacing={'4'} justifyContent={'center'}>
         
            <Radio value={'inr'}>INR</Radio>
            <Radio value={'eur'}>EUR</Radio>
            <Radio value={'usd'}>USD</Radio>
          </HStack>
        </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                image={i.image}
                symbol={i.symbol}
                url={i.url}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={'full'} overflowX={'auto'} p={'8'}>
            <Toaster />
           

           {
              btns.map((item,index)=>(
                <Button
                key={index}
                backgroundColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index+1}
              </Button>
              ))
           }
          </HStack>
        </>
      )}
    </Container>
  );
}

export default Coins;
