// AdminViewAllFilesC


import React from 'react';

import {
    Box,
    Flex,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Input,
    Text,
    IconButton,
    Container
  } from "@chakra-ui/react";
  import { SearchIcon, DownloadIcon, ViewIcon } from "@chakra-ui/icons";
  

const AdminViewAllFilesC = () => {

    return (
        <Container maxW="container.xl" p={5}>
          <Flex direction="column" overflowX="auto">
            <Text mb={4}>
              Here, you can find all files related to internships. Different files have different levels.
            </Text>
    
            <Flex mb={4}>
              <Input placeholder="Tape keyword..." />
              <Button ml={2}><SearchIcon /></Button>
            </Flex>
    
            <Table variant="striped" colorScheme="teal" size="sm">
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
                {/* Replace with your data fetched from the server */}
                <Tr>
                  <Td>2022 - 2023</Td>
                  <Td>Final evaluation form - student1</Td>
                  <Td>Student1</Td>
                  <Td>Final evaluation form</Td>
                  <Td>
                    <IconButton aria-label="View" icon={<ViewIcon />} />
                    <IconButton aria-label="Download" icon={<DownloadIcon />} ml={2} />
                    {/* ... other action buttons ... */}
                  </Td>
                </Tr>
                {/* ... other rows ... */}
              </Tbody>
            </Table>
    
            {/* Page navigation */}
            <Flex justifyContent="center" my={4}>
              <Button size="sm" mr={2}>{"<"}</Button>
              {/* Page numbers would be rendered dynamically here */}
              <Text mx={2}>Page 1 of 5</Text>
              <Button size="sm">{" >"}</Button>
            </Flex>
    
            {/* Return button */}
            <Flex justifyContent="flex-end" my={4}>
              <Button colorScheme="blue">Return</Button>
            </Flex>
          </Flex>
        </Container>
    );
};

export default AdminViewAllFilesC;
    