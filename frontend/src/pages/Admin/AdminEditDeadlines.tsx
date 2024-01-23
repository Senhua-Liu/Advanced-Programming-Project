  
import React from 'react';
import Header from '../../components/Header';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";

const AdminEditDeadlines: React.FC = () => {
    return (
/*       <>
    <main>
        <Header />
        <Body />
    </main><Footer />
    </> */
/*       <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Body  />
        <Footer />
    </div> */
    <Flex
        direction="column"
        minHeight="100vh" // Ensure the minimum height of the entire page is the full viewport height
    >
        <Header />

        <Flex
        direction="column"
        // flexGrow={1} // Allows this part to grow and take up available space
        flex="1"
        overflowY="auto" // Makes the content scrollable if it overflows
        paddingBottom="250px"
        >
        {/* <Body  /> */}
        </Flex>

        {/* <Footer /> */}
    </Flex>
    );
};

export default AdminEditDeadlines;