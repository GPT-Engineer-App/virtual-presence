import { Box, Container, Flex, Heading, Text, VStack, Input, Button, Textarea, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">John Doe</Heading>
          <Text mt={4}>Software Developer, Tech Enthusiast, Blogger</Text>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} gap={10}>
          <VStack spacing={4} alignItems="flex-start" flex="1">
            <Heading fontSize="2xl">About Me</Heading>
            <Text fontSize="md">I'm a passionate software developer with a love for building scalable web applications and working with cutting-edge technologies. I have a background in computer science and have worked with a variety of programming languages and frameworks.</Text>
          </VStack>
          <VStack spacing={4} alignItems="flex-start" flex="1">
            <Heading fontSize="2xl">Contact Me</Heading>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="blue">Send Message</Button>
          </VStack>
        </Flex>

        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" bg={bgColor} color={textColor}>
          <Heading fontSize="xl">Connect with me</Heading>
          <Flex mt={4} justify="space-around">
            <Icon as={FaLinkedin} boxSize={6} />
            <Icon as={FaGithub} boxSize={6} />
            <Icon as={FaTwitter} boxSize={6} />
            <Icon as={FaEnvelope} boxSize={6} />
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
