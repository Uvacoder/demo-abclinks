import { VStack } from "@chakra-ui/layout";
import React from "react";

export function ProfileLayout({ children }) {
  return (
    <VStack w="100%" spacing="1rem" pb="3rem">
      {children}
    </VStack>
  );
}
