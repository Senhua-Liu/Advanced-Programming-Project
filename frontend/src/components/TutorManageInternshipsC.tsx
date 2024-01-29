// TutorManageInternshipsC

import React, { useContext, useEffect, useState } from 'react';
import { Box,Flex,Table,Thead,Tbody,Tr,Th,Td,Button,Text,Badge,Container } from "@chakra-ui/react";
import TutorManageMeetingC from './TutorManageMeetingC';
import TutorFillIntermediateC from './TutorFillIntermediateC';
import TutorFillFinalC from './TutorFillFinalC';



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
  



const TutorManageInternshipsC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
          setUser(JSON.parse(storedUser));
          console.log("TEST user.promotion: ", `${user?.promotion}`);
          console.log("User ID from localStorage:", JSON.parse(storedUser)?.id);
      };
    }, []);

    const internships = [
        { year: "2022 - 2023", student: "Student1", position: "Developer frontend", period: "01/11/2023 - 31/03/2024" },
        { year: "2022 - 2023", student: "Student1", position: "Developer frontend", period: "01/11/2023 - 31/03/2024" },
        { year: "2022 - 2023", student: "Student1", position: "Developer frontend", period: "01/11/2023 - 31/03/2024" },
        { year: "2022 - 2023", student: "Student1", position: "Developer frontend", period: "01/11/2023 - 31/03/2024" },
        { year: "2022 - 2023", student: "Student1", position: "Developer frontend", period: "01/11/2023 - 31/03/2024" },
        { year: "2022 - 2023", student: "Student1", position: "Developer frontend", period: "01/11/2023 - 31/03/2024" },
        { year: "2022 - 2023", student: "Student1", position: "Developer frontend", period: "01/11/2023 - 31/03/2024" },
        { year: "2022 - 2023", student: "Student1", position: "Developer frontend", period: "01/11/2023 - 31/03/2024" },
    ];

    return (
        // <Flex direction="column" p={5} w="full" maxW="1200px" mx="auto">
        //     <Text>TutorManageInternshipsC</Text>
        // </Flex>
        <Container maxW="container.2xl" p={5}>
            <Box overflowX="auto" p={5} borderWidth="1px" borderRadius="lg"  overflow="hidden">
                <Flex justifyContent="flex-end" mb={4} gap={5}>
                <Button colorScheme="red">Start</Button>
                <Button colorScheme="yellow">Ongoing</Button>
                <Button colorScheme="green">Finish</Button>
                </Flex>
                <Text fontSize="3xl" fontWeight="bold" mb={4} mt={4} textAlign="center">TUTOR SPACE</Text>
                <Table variant="simple">
                <Thead>
                    <Tr>
                    <Th>Years</Th>
                    <Th>Student</Th>
                    <Th>Position</Th>
                    <Th>Period</Th>
                    <Th>Manage Meetings</Th>
                    <Th>Fill Forms</Th>
                    <Th>Validate Files</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {internships.map((internship, index) => (
                    <Tr key={index}>
                        <Td>{internship.year}</Td>
                        <Td>{internship.student}</Td>
                        <Td>{internship.position}</Td>
                        <Td>{internship.period}</Td>
                        <Td>
                        <Badge>Visit</Badge>
                        <Badge ml={2}>Defense</Badge>
                        </Td>
                        <Td>
                        <Badge>Intermediate evaluation</Badge>
                        <Badge ml={2}>Final evaluation</Badge>
                        </Td>
                        <Td>
                        <Badge>Final report</Badge>
                        </Td>
                    </Tr>
                    ))}
                </Tbody>
                </Table>
                <Flex justifyContent="center" my={4}>
                <Button>{"<"}</Button>
                <Text mx={2}>Page 1 of 5</Text>
                <Button>{">"}</Button>
                </Flex>
            </Box>

            <TutorManageMeetingC />

            <TutorFillIntermediateC />

            <TutorFillFinalC />
            

        </Container>

        
    );
}; 


export default TutorManageInternshipsC;