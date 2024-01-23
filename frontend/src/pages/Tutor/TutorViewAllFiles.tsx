import React from 'react';
import Header from '../../components/Header';
// import Footer from '../../components/footer';
// import Body from '../../components/body';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";

const TutorViewAllFiles: React.FC = () => {
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

        {/* <Footer /> */}
      </Flex>
    );
  };
  
  export default TutorViewAllFiles;
  