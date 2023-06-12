import React from "react";
import { Button, Flex, Icon, Spacer, Text, Box } from "@chakra-ui/react";

const MostPopularPromotion = () => {
  const mostPopularPromotion = "Chicken Roll + Snack + Drink";
  return (
    <Box
      minH="290.5px"
      p="1.2rem"
      border="1px"
      borderRadius="10px"
      color="gray.500"
    >
      <Box w="100%">
        <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
          <Flex
            flexDirection="column"
            h="100%"
            lineHeight="1.6"
            width={{ lg: "45%" }}
          >
            <Text fontSize="sm" color="gray.400" fontWeight="bold">
              Best Promotion
            </Text>
            <Text fontSize="lg" fontWeight="bold" pb=".5rem">
              {mostPopularPromotion}
            </Text>
          </Flex>
          <Spacer />
          <Flex
            bg="gray.300"
            align="center"
            justify="center"
            borderRadius="15px"
            width={{ lg: "40%" }}
            minHeight={{ sm: "250px" }}
          >
            {}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default MostPopularPromotion;
