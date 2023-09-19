import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FINSHO_COLORS } from "../utils/globalStyles";
import { Link as ReactRouterLink } from "react-router-dom";
import { mainStore } from "../store/store";
import { useNavigate } from "react-router-dom";

const Navbar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const name = mainStore((state) => state.name);
  const logout = mainStore((state) => state.logout);
  return (
    <>
      <Box bg={FINSHO_COLORS.purple} color={FINSHO_COLORS.white} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            bg={FINSHO_COLORS.purple}
            color={FINSHO_COLORS.white}
            size={"md"}
            icon={isOpen ? <FaHamburger /> : <AiOutlineClose />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Finsho</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Box as={ReactRouterLink} to="/dashboard" px={2} py={1} rounded={"md"}>
                Dashboard
              </Box>

              <Box
                as={ReactRouterLink}
                to="/products"
                px={2}
                py={1}
                rounded={"md"}
              >
                Products
              </Box>

              <Box
                as={ReactRouterLink}
                to="/promotions"
                px={2}
                py={1}
                rounded={"md"}
              >
                Promotions
              </Box>

              <Box
                as={ReactRouterLink}
                to="/account"
                px={2}
                py={1}
                rounded={"md"}
              >
                Account
              </Box>

              <Box px={2} py={1} rounded={"md"}>
                <Button
                  bgColor={FINSHO_COLORS.white}
                  color={FINSHO_COLORS.purple}
                  onClick={() => {
                    logout();
                    setTimeout(() => {
                      navigate("/");
                    }, 3000);
                  }}
                >
                  Logout{" "}
                </Button>
              </Box>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <Avatar
                size={"sm"}
                name={name}
                color={FINSHO_COLORS.purple}
                backgroundColor={FINSHO_COLORS.white}
              />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Box as={ReactRouterLink} to="/dashboard" px={2} py={1} rounded={"md"}>
                Dashboard
              </Box>

              <Box
                as={ReactRouterLink}
                to="/products"
                px={2}
                py={1}
                rounded={"md"}
              >
                Products
              </Box>

              <Box
                as={ReactRouterLink}
                to="/promotions"
                px={2}
                py={1}
                rounded={"md"}
              >
                Promotions
              </Box>

              <Box
                as={ReactRouterLink}
                to="/account"
                px={2}
                py={1}
                rounded={"md"}
              >
                Account
              </Box>

              <Box px={2} py={1} rounded={"md"}>
                <Button
                  bgColor={FINSHO_COLORS.white}
                  color={FINSHO_COLORS.purple}
                  onClick={() => {
                    logout();
                    setTimeout(() => {
                      navigate("/");
                    }, 3000);
                  }}
                >
                  Logout{" "}
                </Button>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
};

export default Navbar;
