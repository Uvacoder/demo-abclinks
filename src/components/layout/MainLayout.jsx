import { VStack } from "@chakra-ui/layout";
import React from "react";

export function MainLayout({ children }) {
  return (
    <VStack w="100%" align="center" p="3rem 1rem">
      <VStack maxW="xl" w="100%">
        {children}
      </VStack>
    </VStack>
  );
}
