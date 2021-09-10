import React from "react";
import { Button } from "@chakra-ui/react";

export function Link({ site, link, color }) {
  const handleClick = () => {
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.click();
  };

  if (color)
    return (
      <Button
        colorScheme={color}
        onClick={handleClick}
        w="100%"
        h="4rem"
        shadow="md"
      >
        {site}
      </Button>
    );

  if (!color)
    return (
      <Button onClick={handleClick} w="100%" h="4rem" shadow="md">
        {site}
      </Button>
    );
}
