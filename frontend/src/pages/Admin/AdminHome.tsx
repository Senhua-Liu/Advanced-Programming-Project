  
import React from 'react';
import Header from '../../components/Header';
import {Link as RouterLink, BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import Footer from '../../components/Footer';

const AdminHome: React.FC = () => {
    return (

    <Flex
        direction="column"
        minHeight="100vh" 
    >
        <Header />

        <Flex flexDir="column" mt={-10} p={3} gap={2}>
          <Flex>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="grey" // Change the background color as needed
              color="white" // Text color
              borderRadius="full" // Makes the box a perfect circle
              width="200px" // Width of the ellipse
              height="150px" // Height of the ellipse
              padding="30px"
            >
              <Text fontSize="3xl" fontWeight="bold">Admin</Text>
            </Box>
          </Flex>
          <Flex><Text fontSize="3xl" fontWeight="bold">admin@efrei.fr</Text></Flex>
        </Flex>

        <Flex
        direction="column"
        flex="1"
        overflowY="auto" 
        paddingBottom="250px"
        gap={10}
        justify="center"
        align="center"
        >

            <Flex>
                <Link as={RouterLink} to="/admin/home"><Text color="#0C2340" fontSize="6xl" fontWeight="bold" >ADMIN SPACE</Text></Link>
            </Flex>

            <Flex gap={10}>
                <Link as={RouterLink} to="/reset"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">RESET PASSWORD</Text></Button></Link>
                <Link as={RouterLink} to="/admin/manageinternships"><Button p={8}  bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">MANAGE INTERNSHIPS</Text></Button></Link>
                <Link as={RouterLink} to="/admin/managenotifications"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">MANAGE NOTIFICATIONS</Text></Button></Link>
            </Flex>
            
            <Flex gap={10}>
                <Link as={RouterLink} to="/admin/managedeadlines"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">MANAGE DEADLINES</Text></Button></Link>
                <Link as={RouterLink} to="/admin/viewEdit"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">VIEW ALL STATUS</Text></Button></Link>
                <Link as={RouterLink} to="/admin/viewallfiles"><Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">VIEW ALL FILES</Text></Button></Link>
            </Flex>

        </Flex>

        <Footer />
    </Flex>
    );
};

export default AdminHome;