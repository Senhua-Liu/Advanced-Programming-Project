import React, { useState, useEffect, useContext, ReactNode } from 'react';
import Header from '../../components/Header';
// import Footer from '../../components/footer';
// import Body from '../../components/body';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import ReturnFooter from '../../components/ReturnFooter';


const TutorManageAllReports: React.FC = () => {
    const [linkPage, setLinkPage] = useState('');
    return (
      <Flex
        direction="column"
        minHeight="100vh"
      >
        <Header />

        <Flex
          direction="column"
          flex="1"
          overflowY="auto" 
          paddingBottom="250px"
        >
          {/* <Body  /> */}
        </Flex>

        <ReturnFooter linkPage={linkPage} />
      </Flex>
    );
  };
  
  export default TutorManageAllReports;
  