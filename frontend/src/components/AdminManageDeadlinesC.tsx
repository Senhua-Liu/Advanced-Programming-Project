// AdminManageDeadlinesC

import React, { useContext, useEffect, useState } from 'react';
import { Box,Flex,Text,Button,Table,Thead,Tbody,Tr,Th,Td,VStack,HStack, Input, useToast  } from "@chakra-ui/react";
import axios from 'axios'; 
import AdminEditDeadlinesC from './AdminEditDeadlinesC';


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


interface Internship {
    id?: number;
    duration: number;
    type: string;
    jobTitle: string;
    mission: string;
    salary: number;
    startDate: Date | string;
    endDate: Date | string;
    TutorID?: number;
    tutorID: number;
    meetingList: {
        type: string;
        date: string;
        location: string;
        finished: boolean;
    }[];
    files: [
        {category: 1, type: "final report", content: [], confidential: 1, finished: false, deadline: "", message: ""}, 
        {category: 2, type: "CdC", content: [], confidential: 1, finished: false, deadline: "", message: ""},
        {category: 3, type: "fiche visit", content: [], confidential: 0, finished: false, deadline: "", message: ""},
        {category: 4, type: "first self-evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
        {category: 5, type: "second self-evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
        {category: 6, type: "third self-evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
        {category: 7, type: "intermediate evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
        {category: 8, type: "final evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
    ];
    status: string;
    student: User;
    tutor: User;
};


const AdminManageDeadlinesC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [internships, setInternships] = useState<Internship[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const toast = useToast();
    type InternshipType = 'L1' | 'L2' | 'M1' | 'M2';
    const typeToPage: Record<InternshipType, number> = { 'L1': 0, 'L2': 1, 'M1': 2, 'M2': 3,};
    const typeToBgColor: Record<InternshipType, string> = {
        L1: 'green.100', 
        L2: 'blue.100', 
        M1: 'green.100', 
        M2: 'blue.100',
      };
      

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            console.log("TEST user.promotion: ", `${user?.promotion}`);
            console.log("User ID from localStorage:", JSON.parse(storedUser)?.id);
        };
        fetchInternships();
    }, []);


    useEffect(() => {
        fetchInternships(); 
        const interval = setInterval(fetchInternships, 1000); 
      
        return () => clearInterval(interval); 
    }, []);


    const fetchInternships = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKENDNODE_URL}/api/internship`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch internship data');
            }
            const internshipData = await response.json();
            console.log("Fetched internships:", internshipData);
            const processedInternships = internshipData.map((internship: { files: any; }) => ({
                ...internship,
                files: internship.files || [],
            }));
            console.log("Processed internships:", processedInternships); 
            setInternships(processedInternships);
        } catch (error) {
            toast({
                title: 'Error fetching internships',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };


    return (
        <Flex direction="column" p={5} w="full" maxW="1200px" mx="auto">
            {/* <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
                <Text fontSize="2xl" fontWeight="bold" mb={4}>ADMIN SPACE</Text>
                
                <Table variant="simple">
                    <Thead bg="blue.500">
                        <Tr>
                            <Th color="white">NAME</Th>
                            <Th color="white">Promotion</Th>
                            <Th color="white">TYPE</Th>
                            <Th color="white">ACTION</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>L1 internship</Td>
                            <Td>2028</Td>
                            <Td>Final Report</Td>
                            <Td>
                                <HStack spacing={2}>
                                    <Button size="sm" colorScheme="blue">View / Edit</Button>
                                    <Button size="sm" colorScheme="green">Validate</Button>
                                    <Button size="sm" colorScheme="red">Remove</Button>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>L1 internship</Td>
                            <Td>2028</Td>
                            <Td>Final Report</Td>
                            <Td>
                                <HStack spacing={2}>
                                    <Button size="sm" colorScheme="blue">View / Edit</Button>
                                    <Button size="sm" colorScheme="green">Validate</Button>
                                    <Button size="sm" colorScheme="red">Remove</Button>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>L1 internship</Td>
                            <Td>2028</Td>
                            <Td>Final Report</Td>
                            <Td>
                                <HStack spacing={2}>
                                    <Button size="sm" colorScheme="blue">View / Edit</Button>
                                    <Button size="sm" colorScheme="green">Validate</Button>
                                    <Button size="sm" colorScheme="red">Remove</Button>
                                </HStack>
                            </Td>
                        </Tr>

                    </Tbody>
                </Table>
            </Box> */}
           
            <AdminEditDeadlinesC />


            <Flex direction="column" p={5} w="full" maxW="1200px" mx="auto">
                <VStack spacing={4}>
                    <Table variant="simple">
                        <Thead bg="blue.300">
                            <Tr>
                                <Th>Internship Type</Th>
                                <Th>File Type</Th>
                                <Th>Deadline</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {internships.map((internship) => (
                                Array.isArray(internship.files) ? (
                                    internship.files.map((file) => (
                                        <Tr key={`${internship.id}-${file.type}`}
                                            bg={typeToBgColor[internship.type as InternshipType] || 'white'}
                                        >
                                            <Td>{internship.type}</Td>
                                            <Td>{file.type}</Td>
                                            <Td>{file.deadline || "No deadline set"}</Td>
                                        </Tr>
                                    ))
                                ) : null
                            ))}
                        </Tbody>
                    </Table>
                </VStack>
            </Flex>
        </Flex>
    );
}; 



export default AdminManageDeadlinesC;