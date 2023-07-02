import React from "react";
import { Box, Heading, Stack, Button } from "@chakra-ui/react";

const TrueLayerTestPage = () => {
  const generateAccessToken = () => {
    fetch("http://localhost:4000/api/truelayer/generateToken",{
      method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'include',
    })
    .then(async (res) => {
      const data = await res.json()
      console.log(data);
    });
  };

  const signRequest = () => {
    fetch("http://localhost:4000/api/truelayer/signRequest",{
      method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'include',
    })
    .then(async (res) => {
      const data = await res.json()
      console.log(data);
    });
  };

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
        Testing TrueLayer's API. Going to generate an access token and refresh
        token for the Data API.
      </Heading>

      <Stack
        direction={"column"}
        spacing={3}
        align={"center"}
        alignSelf={"center"}
      >
        <Button colorScheme="purple" disabled="true" onClick={() => {
          //generateAccessToken()
          console.log("Button Pressed")
        }}>
          Make Post Request
        </Button>

        <Button colorScheme="purple" onClick={() => {
          signRequest()
        }}>
          Sign Request
        </Button>
      </Stack>
    </Stack>
  );
};

export default TrueLayerTestPage;
