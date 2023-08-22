import React from "react";
import { Container, Flex, Grid, Heading, Image, SimpleGrid } from "@chakra-ui/react";

import AvgCartValue from "./sales/AvgCartValue";
import ShopCheckIns from "./sales/ShopCheckIns";
import TotalSales from "./sales/TotalSales";
import MostPopularItem from "./sales/MostPopularItem";
import MostPopularPromotion from "./sales/MostPopularPromotion";
import { mainStore } from "../../../store/store";

const Dashboard = () => {

  const name = mainStore((state) => state.name)

  return (
      <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
        <Heading 
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          textAlign='center'
        >
          {name}'s Dashboard
        </Heading>
        <SimpleGrid columns={{ sm: "1", md: "3", xl: "3" }} spacing="24px">
          <AvgCartValue />
          <ShopCheckIns />
          <TotalSales />
        </SimpleGrid>
        <Grid
          templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
          templateRows={{ md: "1fr auto", lg: "1fr" }}
          my="26px"
          gap="24px"
        >
          <MostPopularItem />
          <MostPopularPromotion />
          
        </Grid>
      </Flex>
  );
};

export default Dashboard;
