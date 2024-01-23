  
import React, {useState} from 'react';
import Header from '../../components/Header';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import Footer from '../../components/Footer';

const AdminChat: React.FC = () => {
    const [chatLinkPage, setChatLinkPage] = useState('');

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
        <Text>AdminChat</Text>
        </Flex>

        <Footer chatLinkPage={chatLinkPage} />
    </Flex>
    );
};

export default AdminChat;