// AdminManageNotificationsC

import React from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Select
} from "@chakra-ui/react";

const AdminManageNotificationsC = () => {

    return (
        <Flex direction="column" p={5} w="full" maxW="960px" mx="auto">
            <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
                <Text fontSize="2xl" fontWeight="bold" mb={4}>ADMIN SPACE</Text>

                <Table variant="simple">
                <Thead bg="blue.500">
                    <Tr>
                    <Th color="white">NAME</Th>
                    <Th color="white">PROMOTION</Th>
                    <Th color="white">TO</Th>
                    <Th color="white">ACTION</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                    <Td>L1 internship</Td>
                    <Td>2028</Td>
                    <Td>
                        <Select placeholder="Select target">
                        <option value="students">Students</option>
                        <option value="tutors">Tutors</option>
                        </Select>
                    </Td>
                    <Td>
                        <Button colorScheme="blue" size="sm">View / Edit</Button>
                        <Button colorScheme="green" size="sm" ml={2}>Validate</Button>
                        <Button colorScheme="red" size="sm" ml={2}>Remove</Button>
                    </Td>
                    </Tr>
                    <Tr>
                    <Td>L1 internship</Td>
                    <Td>2028</Td>
                    <Td>
                        <Select placeholder="Select target">
                        <option value="students">Students</option>
                        <option value="tutors">Tutors</option>
                        </Select>
                    </Td>
                    <Td>
                        <Button colorScheme="blue" size="sm">View / Edit</Button>
                        <Button colorScheme="green" size="sm" ml={2}>Validate</Button>
                        <Button colorScheme="red" size="sm" ml={2}>Remove</Button>
                    </Td>
                    </Tr>
                    <Tr>
                    <Td>L1 internship</Td>
                    <Td>2028</Td>
                    <Td>
                        <Select placeholder="Select target">
                        <option value="students">Students</option>
                        <option value="tutors">Tutors</option>
                        </Select>
                    </Td>
                    <Td>
                        <Button colorScheme="blue" size="sm">View / Edit</Button>
                        <Button colorScheme="green" size="sm" ml={2}>Validate</Button>
                        <Button colorScheme="red" size="sm" ml={2}>Remove</Button>
                    </Td>
                    </Tr>
                   
                </Tbody>
                </Table>

                <Flex mt={4} justify="space-between">
                <Button colorScheme="blue">Add</Button>
                <Button colorScheme="gray">Return</Button>
                </Flex>
            </Box>
        </Flex>

    );
};

export default AdminManageNotificationsC;