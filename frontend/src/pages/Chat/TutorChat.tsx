  
import React, { useState, useEffect, useContext, ReactNode } from 'react';
import Header from '../../components/Header';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import TutorChatC from '../../components/TutorChatC';
import ReturnFooter from '../../components/ReturnFooter';
import { useUser } from '../../context/UserContext';


const TutorChat: React.FC = () => {
    const [linkPage, setLinkPage] = useState('');
    const user = useUser();


    return (
    <Flex
        direction="column"
        minHeight="100vh" 
    >
        <Header userFirstName={user?.user?.firstName} userLastName={user?.user?.lastName} userEmail={user?.user?.email} message=""/>

        <Flex
        direction="column"
        flex="1"
        overflowY="auto" 
        paddingBottom="250px"
        >
        <TutorChatC />
        </Flex>

        <ReturnFooter linkPage="/tutor/home" />
    </Flex>
    );
};

export default TutorChat; 