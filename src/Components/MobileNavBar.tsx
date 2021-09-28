import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Text,
  Flex,
  Box,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useRef, ReactElement } from "react";

import { NavItem } from "./NavItem";

export const MobileNavBar: React.FC = ({ ...props }): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openMenuRef = useRef(null);
  const closeMenuRef = useRef(null);

  return (
    <Box data-testid="MobileManagementNav">
      <Flex
        justifyContent="space-between"
        padding={{ sm: 4, md: 8 }}
        alignItems="center"
        bg="white"
        boxShadow="md"
        {...props}
      >
        <Text
          fontSize={{ sm: 18, md: 28, lg: 36 }}
          color="gray.600"
          fontWeight="700"
        >
          MobileNavigationMenu
        </Text>

        <Flex direction="row">
          <IconButton
            icon={<HamburgerIcon />}
            ref={openMenuRef}
            aria-label="Open Sidebar Menu"
            onClick={onOpen}
            bg="none"
            _focus={{
              borderColor: "unset",
            }}
          />
        </Flex>
      </Flex>

      <Box position="relative">
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={openMenuRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <IconButton
                icon={<CloseIcon />}
                ref={closeMenuRef}
                aria-label="Close Sidebar Menu"
                onClick={onClose}
                alignSelf="flex-end"
                mt={5}
                mr={5}
                mb={12}
                bg="none"
                _focus={{
                  borderColor: "unset",
                }}
              />

              <DrawerBody p={0}>
                <Stack spacing={0}>
                  <NavItem
                    to="Dashboard"
                    pageName="Dashboard"
                    disabled={true}
                  />
                  <NavItem to="ListOfCards" pageName="ListOfCards" />
                  <NavItem to="Info" pageName="Info" disabled={true} />
                  <NavItem to="Products" pageName="Products" disabled={true} />
                  <NavItem to="Profile" pageName="Profile" disabled={true} />
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Box>
  );
};
