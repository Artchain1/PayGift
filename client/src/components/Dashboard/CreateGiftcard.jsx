import React, { useState } from 'react';
import { Box, Button, Input, Textarea, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useGiftCard } from '../Context/GiftCardContext';

const CreateGiftCard = () => {
  const [amount, setAmount] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();
  const { addGiftCard } = useGiftCard();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const giftCard = { amount, senderEmail, recipientEmail, message };
    try {
      await axios.post('http://localhost:3000/api/giftcards/create', giftCard);
      addGiftCard(giftCard);
      toast({
        title: 'Gift card created.',
        description: 'Gift card PIN has been successfully sent to the desired Gmail. Please kindly activate the card on the dashboard!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error.',
        description: 'Error creating gift card.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth="1px" borderRadius="lg">
      <FormControl id="amount" isRequired>
        <FormLabel>Amount</FormLabel>
        <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </FormControl>
      <FormControl id="senderEmail" isRequired mt={4}>
        <FormLabel>Sender Email</FormLabel>
        <Input type="email" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} />
      </FormControl>
      <FormControl id="recipientEmail" isRequired mt={4}>
        <FormLabel>Recipient Email</FormLabel>
        <Input type="email" value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} />
      </FormControl>
      <FormControl id="message" mt={4}>
        <FormLabel>Message</FormLabel>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>Create Gift Card</Button>
    </Box>
  );
};

export default CreateGiftCard;
