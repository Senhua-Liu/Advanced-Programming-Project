import React from 'react';

// import Footer from '../../components/footer';
// import Body from '../../components/body';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import ProfilHeader from '../../components/ProfilHeader';
import ProfilFooter from '../../components/ProfilFooter';
import LoginC from '../../components/LoginC';

const Profil: React.FC = () => {
    return (

      <Flex
        direction="column"
        minHeight="100vh"
      >
        <ProfilHeader />
        {/* <LoginC /> */}
        <Flex
          direction="column"
          flex="1"
          overflowY="auto" 
          paddingBottom="250px"
        >
          
        </Flex>
        
        <ProfilFooter />
      </Flex>

    );
  };
  
  export default Profil;