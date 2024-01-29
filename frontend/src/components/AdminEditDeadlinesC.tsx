// AdminEditDeadlinesC


import React, { useEffect, useState } from 'react';
import { Box,Flex,Select,Button,VStack,HStack,Text,FormControl,FormLabel } from "@chakra-ui/react";



interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: string;
  telephone: string;
  oldPassword: string;
  promotion: number;
  year: string;
  company: {
      name: string;
      address: string;
      city: string;
      zipCode: string;
  };
};



const AdminEditDeadlinesC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        setUser(JSON.parse(storedUser));
        console.log("TEST user.promotion: ", `${user?.promotion}`);
        console.log("User ID from localStorage:", JSON.parse(storedUser)?.id);
    };
  }, []);




  return (
    <Flex direction="column" p={5} w="full" maxW="960px" mx="auto">
      <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
        <VStack spacing={4}>
          
          <FormControl id="promotion">
            <FormLabel>Promotion</FormLabel>
            <Select placeholder="Select promotion">
              <option value="M1-2024">M1 - 2024</option>
              {/* Add more promotion options here */}
            </Select>
          </FormControl>

          <FormControl id="deadline-type">
            <FormLabel>Deadline Type</FormLabel>
            <Select placeholder="Select deadline type">
              <option value="final-report">Final Report</option>
              {/* Add more deadline type options here */}
            </Select>
          </FormControl>

          <HStack w="full" justify="space-between">
            <FormControl id="date">
              <FormLabel>Date and time</FormLabel>
              <HStack>
                <Select placeholder="Select date">
                  <option value="12-12-2023">12/12/2023</option>
                  {/* Add more date options here */}
                </Select>
                <Select placeholder="Select time">
                  <option value="23:59">23:59</option>
                  {/* Add more time options here */}
                </Select>
              </HStack>
            </FormControl>
          </HStack>

          <HStack w="full" justify="space-between">
            <FormControl id="alert-before">
              <FormLabel>Alert before</FormLabel>
              <HStack>
                <Select placeholder="Select number">
                  <option value="10">10</option>
                  {/* Add more number options here */}
                </Select>
                <Select placeholder="Select period">
                  <option value="days">Days</option>
                  {/* Add more period options here */}
                </Select>
              </HStack>
            </FormControl>
          </HStack>
          
          <HStack w="full" justify="center" align="center">
            <Button colorScheme="blue">Save Draft</Button>
            <Button colorScheme="teal">Save Definitively</Button>
          </HStack>

        </VStack>
      </Box>
    </Flex>
  );
};

export default AdminEditDeadlinesC;

