import React from 'react'
import { Box, Flex, Text, Avatar, Heading} from "@chakra-ui/react";
import {Link as ReactRouterLink} from 'react-router-dom'
import {Link as ChakraLink} from '@chakra-ui/react'


const Navbar = () => {
  return (
    <Flex
      w={["100%", "100%", "10%", "15%", "15%"]}
      flexDir="column"
      alignItems="center"
      backgroundColor="#f5f5f5"
      color="#1d1d1d"
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
            Affix
          </Heading>

          <Flex
            flexDir={["row", "row", "column", "column", "column"]}
            align={["center", "center", "center", "flex-start", "flex-start"]}
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            justifyContent="center"
          >
            <Flex mr={[2, 6, 0, 0, 0]}
              style={{marginBottom: '1.5rem'}}
            >
              <ChakraLink as={ReactRouterLink} to="/" display={["none", "none", "flex", "flex", "flex"]} href="/home"
                style={{marginRight: '0.5rem'}}
              >
                
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/"
                _hover={{ textDecor: "none" }}
                display={["flex", "flex", "none", "flex", "flex"]}
              >
                <Text className="active">Home</Text>
              </ChakraLink>
            </Flex>

            <Flex mr={[2, 6, 0, 0, 0]}
              style={{marginBottom: '1.5rem'}}
            >
              <Link display={["none", "none", "flex", "flex", "flex"]} href="/keys"
                style={{marginRight: '0.5rem'}}
              >
                
              </Link>
              <Link
                _hover={{ textDecor: "none" }}
                display={["flex", "flex", "none", "flex", "flex"]}
              >
                <Text className="active">Keys</Text>
              </Link>
            </Flex>

          </Flex>
        </Flex>

        <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
          <Avatar my={2} name="John Affix" />
          <Text textAlign="center">John Affix</Text>
        </Flex>
      </Flex>


    </Flex>
  )
}

export default Navbar;