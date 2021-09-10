import { VStack } from "@chakra-ui/layout";
import React from "react";

export function LinksLayout({ children }) {
  return (
    <VStack w="100%" spacing="2rem">
      {children}
    </VStack>
  );
}
