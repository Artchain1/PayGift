import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Select,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios"; // Import Axios or use your preferred HTTP client library
import { useNavigate } from "react-router-dom";
import useShowToast from "../../hooks/useShowToast"; // Assuming you have a custom hook for showing toasts

const cryptocurrencies = [
  { label: "Bitcoin", value: "BTC" },
  { label: "Ethereum", value: "ETH" },
  { label: "Litecoin", value: "LTC" },
  // Add more cryptocurrencies as needed
];

function GiftCardCreation() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("BTC");
  const [message, setMessage] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const showToast = useShowToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const giftCardData = {
      design: "default", // Replace with actual design if applicable
      cryptocurrency: currency,
      amount: parseFloat(amount),
      note: message,
      recipientEmail,
      fees: 0, // You may modify this as per your backend requirements
      totalAmount: parseFloat(amount), // You may modify this as per your backend requirements
    };

    try {
      setLoading(true);
      const response = await axios.post(" http://localhost:3000/cards/giftcards", giftCardData); // Adjust the API endpoint as per your backend setup
      const newGiftCard = response.data.newGiftCard; // Assuming the API returns the new gift card object

      showToast("Success", "Gift card created successfully", "success");
      navigate(`/gift-cards/${newGiftCard._id}`); // Redirect to the newly created gift card page
    } catch (error) {
      console.error("Error creating gift card:", error);
      showToast("Error", "Failed to create gift card", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={5}>
      <Flex direction="column" maxWidth="600px" mx="auto" p={5} borderWidth="1px" borderRadius="md">
        <Text fontSize="2xl" mb={5}>Create Gift Card</Text>
        <FormControl id="title" mb={3}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl id="amount" mb={3}>
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormControl>
        <FormControl id="currency" mb={3}>
          <FormLabel>Currency</FormLabel>
          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {cryptocurrencies.map((crypto) => (
              <option key={crypto.value} value={crypto.value}>
                {crypto.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="message" mb={3}>
          <FormLabel>Message</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <FormControl id="recipientEmail" mb={3}>
          <FormLabel>Recipient Email</FormLabel>
          <Input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="teal"
          onClick={handleSubmit}
          isLoading={loading}
        >
          Create Gift Card
        </Button>
      </Flex>
    </Box>
  );
}

export default GiftCardCreation;
