  
import React from 'react';
import Header from '../../components/Header';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import Footer from '../../components/Footer';
import ReturnFooter from '../../components/ReturnFooter';

const AdminEditNotifications: React.FC = () => {
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
        </Flex>
        <ReturnFooter />
    </Flex>
    );
};

export default AdminEditNotifications;