// TutorViewAllFilesC

import React, { useContext, useEffect, useState } from 'react';
import { Box,Flex,Table,Thead,Tbody,Tr,Th,Td,Button,Input,Text,IconButton,Container } from "@chakra-ui/react";
import { SearchIcon, DownloadIcon, ViewIcon } from "@chakra-ui/icons";




interface User {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    type: string;
    telephone: string;
    oldPassword: string;
    promotion: number;
    year: string;
    company: {
        name: string;
        address: string;
        city: string;
        zipCode: string;
    };
};
  


const TutorViewAllFilesC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            console.log("TEST user.promotion: ", `${user?.promotion}`);
            console.log("User ID from localStorage:", JSON.parse(storedUser)?.id);
        };
    }, []);



    return (
        // <Flex direction="column" p={5} w="full" maxW="1200px" mx="auto">
        //     <Text>TutorViewAllFilesC</Text>
        // </Flex>

        <Container maxW="container.xl" p={5} >
          <Flex direction="column" overflowX="auto" gap={5}>
            
            <Flex mb={4}>
              <Input placeholder="Tape keyword..." />
              <Button ml={2}><SearchIcon /></Button>
            </Flex>

            <Text>
                Here, you can find all files related to internships. Different files have different levels.
            </Text>
            <Text>
                - Normal level (view, download, copy-paste, print) : Final report
            </Text>
            <Text>
                - Sensitive level (view) : Self-evaluation form, Company evaluation form, Intermediate evaluation form, Fiche visit
            </Text>
      

            <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Text fontSize="4xl" fontWeight="bold" mb={4} textAlign="center" >TUTOR SPACE</Text>
                <Table variant="striped" colorScheme="teal" size="sm" mt={4}>
                <Thead>
                    <Tr>
                    <Th>Years</Th>
                    <Th>File</Th>
                    <Th>Student</Th>
                    <Th>File Type</Th>
                    <Th>Actions</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    <Tr>
                    <Td>2022 - 2023</Td>
                    <Td>Final evaluation form - student1</Td>
                    <Td>Student1</Td>
                    <Td>Final evaluation form</Td>
                    <Td>
                        <IconButton aria-label="View" icon={<ViewIcon />} />
                        <IconButton aria-label="Download" icon={<DownloadIcon />} ml={2} />
                    </Td>
                    </Tr>
                    <Tr>
                    <Td>2022 - 2023</Td>
                    <Td>Final evaluation form - student1</Td>
                    <Td>Student1</Td>
                    <Td>Final evaluation form</Td>
                    <Td>
                        <IconButton aria-label="View" icon={<ViewIcon />} />
                        <IconButton aria-label="Download" icon={<DownloadIcon />} ml={2} />
                    </Td>
                    </Tr>
                    <Tr>
                    <Td>2022 - 2023</Td>
                    <Td>Final evaluation form - student1</Td>
                    <Td>Student1</Td>
                    <Td>Final evaluation form</Td>
                    <Td>
                        <IconButton aria-label="View" icon={<ViewIcon />} />
                        <IconButton aria-label="Download" icon={<DownloadIcon />} ml={2} />
                    </Td>
                    </Tr>
                    <Tr>
                    <Td>2022 - 2023</Td>
                    <Td>Final evaluation form - student1</Td>
                    <Td>Student1</Td>
                    <Td>Final evaluation form</Td>
                    <Td>
                        <IconButton aria-label="View" icon={<ViewIcon />} />
                        <IconButton aria-label="Download" icon={<DownloadIcon />} ml={2} />
                    </Td>
                    </Tr>
                </Tbody>
                </Table>
            </Box>


            
    
            <Flex justifyContent="center" my={4}>
              <Button size="sm" mr={2}>{"<"}</Button>
    
              <Text mx={2}>Page 1 of 5</Text>
              <Button size="sm">{" >"}</Button>
            </Flex>
    
          </Flex>
        </Container>

    );
}; 


export default TutorViewAllFilesC;

