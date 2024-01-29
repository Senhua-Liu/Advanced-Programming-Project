// TutorManageAllReportsC

import React, { useContext, useEffect, useState } from 'react';
import { Box,Flex,Table,Thead,Tbody,Tr,Th,Td,Button,Text,Container } from "@chakra-ui/react";




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
  


const TutorManageAllReportsC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
          setUser(JSON.parse(storedUser));
          console.log("TEST user.promotion: ", `${user?.promotion}`);
          console.log("User ID from localStorage:", JSON.parse(storedUser)?.id);
      };
    }, []);
  

    const files = [
        { year: "2022 - 2023", status: "Validated", student: "Student1", fileType: "Final report" },
        { year: "2022 - 2023", status: "Invalidated", student: "Student2", fileType: "Final report" },
        { year: "2022 - 2023", status: "validated", student: "Student3", fileType: "Final report" },
        { year: "2022 - 2023", status: "Invalidated", student: "Student4", fileType: "Final report" },
        { year: "2022 - 2023", status: "validated", student: "Student5", fileType: "Final report" },
      ];


    return (
        <Container maxW="container.xl" p={5}>
            <Flex direction="column" overflowX="auto">
                <Text fontSize="4xl" mb={4} textAlign="center" fontWeight="bold">TUTOR SPACE</Text>
                <Table variant="striped" colorScheme="teal" size="sm">
                <Thead>
                    <Tr>
                    <Th>Years</Th>
                    <Th>File Status</Th>
                    <Th>Student</Th>
                    <Th>File Type</Th>
                    <Th isNumeric>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {files.map((file, index) => (
                    <Tr key={index}>
                        <Td>{file.year}</Td>
                        <Td>{file.status}</Td>
                        <Td>{file.student}</Td>
                        <Td>{file.fileType}</Td>
                        <Td isNumeric>
                        <Button colorScheme={file.status === "Ongoing" ? "blue" : "gray"} mr={3}>
                            View
                        </Button>
                        {file.status === "Ongoing" && (
                            <>
                            <Button colorScheme="green" mr={3}>Validate</Button>
                            <Button colorScheme="red">Invalidate</Button>
                            </>
                        )}
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
            </Flex>
        </Container>




    );
}; 


export default TutorManageAllReportsC;