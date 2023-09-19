import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import UploadProductForm from "../forms/UploadProductForm";
import MainLayout from "../layouts/MainLayout";

const UploadProductPage = () => {
  return (
      <MainLayout>
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
            Upload a Product
          </Heading>

          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
          >
            <UploadProductForm />
          </Stack>
        </Stack>
      </MainLayout>
  );
};

export default UploadProductPage;
