import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box bg="orange.50" p={[4, 6, 8]} flex="1">
      <Flex
        gap={[4, 6, 10, 20]}
        direction={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
        alignItems={["center", "center", "flex-start"]}
      >
        <Flex
          direction={"column"}
          alignItems={["center", "center", "flex-start"]}
        >
          <Heading
            as="h1"
            size="lg"
            mb={4}
            textAlign={["center", "center", "left"]}
          >
            Effortless Gifting
          </Heading>
          <Text
            mb={6}
            fontSize={["16px", "18px", "20px"]}
            textAlign={["center", "center", "left"]}
          >
            Unlock the Power of Choice: Create and <br /> redeem your crypto
            gift cards here at <br /> PayGifty!
          </Text>
          <Flex
            mt={10}
            direction={"column"}
            alignItems={["center", "center", "flex-start"]}
          >
            <Button
              colorScheme="orange"
              mb={5}
              width={["100%", "auto"]}
              onClick={() => navigate("/create")}
            >
              Create Giftcard
            </Button>
            <Button
              colorScheme="orange"
              width={["100%", "auto"]}
              onClick={() => navigate("/redeem")}
              mb={5}
            >
              Redeem Giftcard
            </Button>
            <Button
            mb={5}
              colorScheme="orange"
              width={["100%", "auto"]}
              // onClick={() => navigate("/redeem")}
            >
             connect wallet
            </Button>
          </Flex>
        </Flex>

        <Image
          src="/giftsent.png"
          width={["100%", "300px", "400px"]}
          height={["auto", "400px", "500px"]}
        />
      </Flex>
    </Box>
  );
};

export default Dashboard;
