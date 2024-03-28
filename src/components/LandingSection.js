import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#f5f5f7"
  >
    <VStack color="#1d1d1f">
      <Avatar size="1.5xl" src="https://i.pravatar.cc/150?img=7" />
      <div fontSize="2xl"> {greeting} </div>
      <Heading> {bio1} </Heading>
      <Heading> {bio2} </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
