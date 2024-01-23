import React, { useState, useEffect, useContext, ReactNode } from 'react';
import Header from '../../components/Header';
// import Footer from '../../components/footer';
// import Body from '../../components/body';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import ReturnFooter from '../../components/ReturnFooter';

const TutorFillFinal: React.FC = () => {
    const [linkPage, setLinkPage] = useState('')

    return (

      <Flex
        direction="column"
        minHeight="100vh"
      >
        <Header userName="tutor" userEmail="tutor@efrei.com" message="!!! The intermediate evaluation form should be filled before 12/31/2023 00:00:00." />

        <Flex
          direction="column"
          flex="1"
          overflowY="auto" 
          paddingBottom="250px"
        >
          <Text>TutorFillFinal</Text>
        </Flex>

        <ReturnFooter linkPage="/tutor/home" />
      </Flex>
    );
  };
  
  export default TutorFillFinal;
  