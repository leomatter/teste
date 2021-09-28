import React from "react";
import { Flex, Wrap } from "@chakra-ui/react";

import { Page } from "../Components/Page";
import { Card } from "../Components/Card";

export const ListOfCards = () => {
  return (
    <Page padding={10} minH="1300px">
      <Flex justify="center" align="center" width="100%">
        <Wrap>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Wrap>
      </Flex>
    </Page>
  );
};
