import React from 'react';
import { Flex } from "@chakra-ui/react";
import ProfilHeader from '../../components/ProfilHeader';
import ProfilFooter from '../../components/ProfilFooter';
import LoginC from '../../components/LoginC';

const Login: React.FC = () => {
    return (

      <Flex
        direction="column"
        minHeight="100vh"
      >
        <ProfilHeader />

        <Flex
          direction="column"
          flex="1"
          overflowY="auto" 
          paddingBottom="250px"
        >
          <LoginC />
        </Flex>
        
        <ProfilFooter />
      </Flex>

    );
  };
  
  export default Login;