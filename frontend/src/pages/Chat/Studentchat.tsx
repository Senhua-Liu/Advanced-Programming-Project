  
import React, { useState, useEffect, useContext, ReactNode }  from 'react';
import Header from '../../components/Header';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import Footer from '../../components/Footer';
import ReturnFooter from '../../components/ReturnFooter';

const StudentChat: React.FC = () => {
    const [linkPage, setLinkPage] = useState('');

    return (
    <Flex
        direction="column"
        minHeight="100vh" 
    >
        <Header userName="student" userEmail="student@efrei.net" message=""/>

        <Flex
        direction="column"
        flex="1"
        overflowY="auto" 
        paddingBottom="250px"
        >
        <Text>Studentchat</Text>
        </Flex>

        <ReturnFooter linkPage="/student/home" />
    </Flex>
    );
};

export default StudentChat;