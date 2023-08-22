import React from "react";
import { Box, Heading, Stack, Button } from "@chakra-ui/react";

const TrueLayerSuccessPage = () => {
  return (
    <Stack
      as={Box}
      textAlign={"center"}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        Successful Token Generation TrueLayer
      </Heading>

    </Stack>
  );
};

export default TrueLayerSuccessPage;
