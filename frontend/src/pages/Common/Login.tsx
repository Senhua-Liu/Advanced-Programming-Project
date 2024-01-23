import React from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/footer';
// import Body from '../../components/body';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
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


    //   <Flex>
    //     <ProfilHeader />
    //     <Flex bgColor="pink">
    //         <LoginC />
    //     </Flex>
        
    //     <ProfilFooter />
    // </Flex>
    );
  };
  
  export default Login;