import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  Flex,
  useMediaQuery,
  useDisclosure,
  Slide,
  Box,
  ChakraProps,
} from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { MobileNavBar } from "./MobileNavBar";
import { Footer } from "./Footer";

export const Page: React.FC<ChakraProps> = ({
  children,
  ...props
}): ReactElement => {
  const [isLargerThan1340] = useMediaQuery("(min-width: 1340px)");
  const [scrollPosition, setScrollPosition] = useState(0);
  const pageContainer = useRef<HTMLDivElement | null>(null);
  const {
    isOpen: navIsOpen,
    onClose: onNavClose,
    onOpen: onNavOpen,
  } = useDisclosure();
  const {
    isOpen: footerIsOpen,
    onOpen: onFooterOpen,
    onClose: onFooterClose,
  } = useDisclosure();

  const recordScrollPosition = () => {
    const lastPosition = scrollPosition;
    const currentPosition = window.pageYOffset;
    if (lastPosition < currentPosition && lastPosition > 125) {
      onNavClose();
      onFooterOpen();
    } else if (lastPosition > currentPosition) {
      onNavOpen();
      onFooterClose();
    }
    setScrollPosition(window.pageYOffset);
  };

  const isScrollable = (
    node: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    if (node && node.current) {
      return node.current.scrollHeight + 100 > window.innerHeight;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", recordScrollPosition);
    return () => window.removeEventListener("scroll", recordScrollPosition);
  });

  // Open menu on first render
  useEffect(() => {
    if (!isScrollable(pageContainer)) {
      onFooterOpen();
    }
    onNavOpen();
  }, [onNavOpen, onFooterOpen, isLargerThan1340]);

  return (
    <Flex direction="column" bg="white" flex="1" ref={pageContainer}>
      <Box
        height={{ sm: "72px", md: "106px", lg: "118px", xl: "216px" }}
        aria-label="placeholder container"
      />
      {isLargerThan1340 ? (
        <Slide direction="top" in={navIsOpen}>
          <NavBar />
        </Slide>
      ) : (
        <Slide direction="top" in={navIsOpen}>
          <MobileNavBar />
        </Slide>
      )}
      <Flex direction="column" alignItems="center" {...props}>
        {children}
      </Flex>

      {isLargerThan1340 ? (
        <Slide direction="bottom" in={footerIsOpen}>
          <Footer />
        </Slide>
      ) : (
        <Slide direction="bottom" in={footerIsOpen}>
          <Footer />
        </Slide>
      )}
      <Box height={100} aria-label="placeholder container" />
    </Flex>
  );
};
