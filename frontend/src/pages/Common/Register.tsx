import React from 'react';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon,Input } from "@chakra-ui/react";
import ProfilHeader from '../../components/ProfilHeader';
import ProfilFooter from '../../components/ProfilFooter';
import RegisterC from '../../components/RegisterC';


const Register: React.FC = () => {
    return (

      <Flex
        direction="column"
        minHeight="100vh" // Ensure the minimum height of the entire page is the full viewport height
        >
        <ProfilHeader />

        <Flex
          direction="column"
          // flexGrow={1} // Allows this part to grow and take up available space
          flex="1"
          overflowY="auto" // Makes the content scrollable if it overflows
          paddingBottom="250px"
        >
          <Flex gap={20} flexDirection="column" justify="space-between" align="center" mt={20}>
            <Text fontWeight="bold" fontSize="4xl">Register</Text>
            <RegisterC />
         </Flex>
        </Flex>

        <ProfilFooter />
      </Flex>


    );
  };
  
  export default Register; 