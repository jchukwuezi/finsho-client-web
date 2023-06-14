import React from "react";
import {
  Box,
  Heading,
  Stack,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList
} from "@chakra-ui/react";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

const LandingPage = () => {
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
        Improving the in-store shopping experience in grocery stores for both the retailer and the consumer.
      </Heading>

      <Stack
        direction={"column"}
        spacing={3}
        align={"center"}
        alignSelf={"center"}
      > 
        <Tabs>
            <TabList>
                <Tab>Register</Tab>
                <Tab> Login </Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <RegisterForm />
                </TabPanel>

                <TabPanel>
                    <LoginForm />
                </TabPanel>
            </TabPanels>
        </Tabs>


      </Stack>
    </Stack>
  );
};

export default LandingPage;
