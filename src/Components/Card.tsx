import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";

export const Card = () => {
  return (
    <Flex bg="yellow.300" rounded="5px" height="300px" width="200px" p="10px">
      <Stack>
        <Text>Furst Nehm</Text>
        <Text>1234 20th Street</Text>
        <Text>Fargo</Text>
        <Text>ND</Text>
      </Stack>
    </Flex>
  );
};
