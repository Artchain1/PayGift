import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box bg="orange.50" p={8} flex="1">
      <Flex gap={20} justifyContent={"space-between"}>
        <Flex direction={"column"}>
          <Heading as="h1" size="lg" mb={4}>
            Effortless Gifting
          </Heading>
          <Text mb={6} fontSize={"20px"}>
            Unlock the Power of Choice: Create and <br /> redeem your crypto
            gift cards here at <br /> PayGifty!
          </Text>
          <Flex mt={10} direction={"column"}>
            <Button
              colorScheme="orange"
              mb={5}
              onClick={() => navigate("/create")}
            >
              Create Giftcard
            </Button>
            <Button colorScheme="orange" onClick={() => navigate("/redeem")}>
              Redeem Giftcard
            </Button>
          </Flex>
        </Flex>

        <Image src="/giftsent.png" width={"400px"} height={"500px"} />
      </Flex>
    </Box>
  );
};

export default Dashboard;
