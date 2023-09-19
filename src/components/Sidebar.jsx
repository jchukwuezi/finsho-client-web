import React from "react";
import { Flex, Text, Avatar, Heading, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { mainStore } from "../store/store";
import { FINSHO_COLORS } from "../utils/globalStyles";
import {BsBarChartFill, BsShop, BsGift} from 'react-icons/bs'
import {GiShoppingCart} from 'react-icons/gi'
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const navigate = useNavigate()
  const name = mainStore((state) => state.name);
  const logout = mainStore((state) => state.logout)
  

  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      <Flex
        w={["15%", "100%", "10%", "15%", "15%"]}
        flexDir="column"
        alignItems="center"
        backgroundColor={FINSHO_COLORS.purple}
        color={FINSHO_COLORS.white}
      >
        <Flex
          flexDir="column"
          h={[null, null, "100vh"]}
          justifyContent="space-between"
        >
          <Flex flexDir="column" as="nav">
            <Heading
              mt={50}
              mb={[25, 50, 100]}
              fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
              alignSelf="center"
              letterSpacing="tight"
            >
              Finsho
            </Heading>

            <Flex
              flexDir={["row", "row", "column", "column", "column"]}
              align={["center", "center", "center", "flex-start", "flex-start"]}
              wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
              justifyContent="center"
            >
              <Flex mr={[2, 6, 0, 0, 0]} style={{ marginBottom: "1.5rem" }}>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/dashboard"
                  display={["none", "none", "flex", "flex", "flex"]}
                  style={{ marginRight: "0.5rem" }}
                >
                  <BsBarChartFill size={20} color="inherit" />
                </ChakraLink>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/dashboard"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className="active">Dashboard</Text>
                </ChakraLink>
              </Flex>

              <Flex mr={[2, 6, 0, 0, 0]} style={{ marginBottom: "1.5rem" }}>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/products"
                  display={["none", "none", "flex", "flex", "flex"]}
                  style={{ marginRight: "0.5rem" }}
                >

                  <GiShoppingCart size={20} color="inherit" />
                </ChakraLink>

                <ChakraLink
                  as={ReactRouterLink}
                  to="/products"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className="active">Products</Text>
                </ChakraLink>
              </Flex>

              <Flex mr={[2, 6, 0, 0, 0]} style={{ marginBottom: "1.5rem" }}>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/promotions"
                  display={["none", "none", "flex", "flex", "flex"]}
                  style={{ marginRight: "0.5rem" }}
                >
                  <BsGift size={20} color="inherit" />
                </ChakraLink>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/promotions"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className="active">Promotions</Text>
                </ChakraLink>
              </Flex>

              <Flex mr={[2, 6, 0, 0, 0]} style={{ marginBottom: "1.5rem" }}>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/account"
                  display={["none", "none", "flex", "flex", "flex"]}
                  style={{ marginRight: "0.5rem" }}
                >
                  <BsShop size={20} color="inherit" />
                </ChakraLink>

                <ChakraLink
                  as={ReactRouterLink}
                  to="/"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className="active">Account</Text>
                </ChakraLink>
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDir="column" alignItems="center" mb={7} mt={5}>
            <Avatar my={2} name={name} color={FINSHO_COLORS.purple} backgroundColor={FINSHO_COLORS.white}/>
            <Text textAlign="center">{name}</Text>
          </Flex>

          <Flex flexDir="column" alignItems="center" mb={10}>
            <Button bgColor={FINSHO_COLORS.white} color={FINSHO_COLORS.purple} 
              onClick={()=> {
                logout()
                setTimeout(()=>{
                  navigate("/")                  
                }, 3000)
              }}
            >Logout </Button>
          </Flex>
        </Flex>
      </Flex>
      
      <Flex
        w={["85%", "100%", "60%", "60%", "55%"]}
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
