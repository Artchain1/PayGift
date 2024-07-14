import React, { useState, useContext } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Heading, Flex, Text, Card, CardBody } from '@chakra-ui/react';
import { PayGiftyContext } from '../../context/PayGiftyProvider';
import axios from 'axios';

const RedeemGiftcard = () => {
  const { redeemGiftCard, provider, currentAccount } = useContext(PayGiftyContext);
  const [code, setCode] = useState('');
  const [redeemed, setRedeemed] = useState(false);

  const handleRedeem = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/giftcards/redeem', { code, currentAccount });
      setRedeemed(true);
      alert('Gift card redeemed!');
    } catch (error) {
      console.error(error);
      alert('Error redeeming gift card');
    }
  };

  return (
    <Box>
      <Flex justifyContent='center' mt={4} gap={4}>
        <Box as='button' borderRadius='md' bg='#F47458' color='white' px={4} h={8}>
          Button 1
        </Box>
        <Box as='button' borderRadius='md' bg='#F47458' color='white' px={4} h={8}>
          Button 2
        </Box>
        <Box as='button' borderRadius='md' bg='#F47458' color='white' px={4} h={8}>
          Button 3
        </Box>
      </Flex>
    
      <Flex justifyContent='center' mt={100}>
        <Card h='300px' bg='#D47458' rounded='lg' w='850px'>
          <CardBody>
            <Text as='h2' fontWeight={700} fontSize={25}>Enter Your Gift Card Code here</Text>
            
            <Flex justifyContent='center' my='70px'>
              <Input 
                placeholder='Paste here' 
                width='500px' 
                value={code} 
                onChange={(e) => setCode(e.target.value)} 
              />
            </Flex>

            <Flex justifyContent='center'>
              <Box as='button' borderRadius='md' bg='#F47458' color='white' px={10} h={8} onClick={handleRedeem}>
                Redeem
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
      {redeemed && (
        <Flex justifyContent='center' mt={4}>
          <Text fontSize="lg" color="green.500">Gift card has been redeemed!</Text>
        </Flex>
      )}
    </Box>
  );
};

export default RedeemGiftcard;
