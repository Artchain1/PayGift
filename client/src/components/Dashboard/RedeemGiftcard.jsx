import { Box, Card, CardBody, Flex, Text, Input} from '@chakra-ui/react'
import React from 'react'

const RedeemGiftcard = () => {
  return (
   <Box>
    <Flex justifyContent='center' mt={4} gap={4}>
        <Box as='button' borderRadius='md' bg='#F47458' color='white' px={4} h={8}>
          Button
        </Box>
        <Box as='button' borderRadius='md' bg='#F47458' color='white' px={4} h={8}>
          Button
        </Box>
        <Box as='button' borderRadius='md' bg='#F47458' color='white' px={4} h={8}>
          Button
        </Box>
      </Flex>
    
    <Flex justifyContent='center' mt={100}>
        <Card h='300px' bg='#D47458' rounded='lg' w='850px'>
          <CardBody>
            <Text as='h2'fontWeight={700} fontSize={25}>Enter Your Gift Card Code here</Text>
            
            <Flex justifyContent='center' my='70px' border='black'>
              <Input placeholder='Paste here' width='500px' />
            </Flex>

            <Flex justifyContent='center'>
            <Box as='button' borderRadius='md' bg='#F47458' color='white' px={10} h={8}>
            Button
          </Box>
            </Flex>
           

          </CardBody>
        </Card>
        
      </Flex>
      <Text>history</Text>
   </Box>

  )
}

export default RedeemGiftcard
