import React from "react";
import { NavItem } from "./NavItem";
import { HStack, Flex, Text } from "@chakra-ui/react";

export const NavBar = ({ ...props }): React.ReactElement => {
  return (
    <Flex
      direction="column"
      px={14}
      paddingTop={10}
      paddingBottom={6}
      bg="white"
      boxShadow="md"
      {...props}
    >
      <Flex px={4} justifyContent="space-between">
        <Text fontSize={36} fontWeight="700" color="gray.600">
          NavigationMenu
        </Text>
        <HStack justify="center" alignItems="flex-start">
          <NavItem to="Dashboard" pageName="Dashboard" disabled={true} />
          <NavItem to="ListOfCards" pageName="ListOfCards" />
          <NavItem to="Info" pageName="Info" disabled={true} />
          <NavItem to="Products" pageName="Products" disabled={true} />
          <NavItem to="Profile" pageName="Profile" disabled={true} />
        </HStack>
      </Flex>
    </Flex>
  );
};
