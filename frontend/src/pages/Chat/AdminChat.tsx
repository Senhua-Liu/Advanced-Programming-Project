  
import React, {useState} from 'react';
import Header from '../../components/Header';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import Footer from '../../components/Footer';
import ReturnFooter from '../../components/ReturnFooter';

const AdminChat: React.FC = () => {
    const [linkPage, setLinkPage] = useState('');

    return (

    <Flex
        direction="column"
        minHeight="100vh" 
    >
        <Header userName="admin" userEmail="admin@efrei.fr" message=""/>

        <Flex
        direction="column"
        flex="1"
        overflowY="auto" 
        paddingBottom="250px"
        >
        <Text>AdminChat</Text>
        </Flex>

        <ReturnFooter linkPage="/admin/home"/>
    </Flex>
    );
};

export default AdminChat;