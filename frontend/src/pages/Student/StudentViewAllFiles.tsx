import React, { useState, useEffect, useContext, ReactNode }  from 'react';
import Header from '../../components/Header';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon,Heading,Input,InputGroup,InputRightElement,Table,Thead,Tbody,Tr,Th,Td,IconButton,useColorModeValue} from "@chakra-ui/react";
import ReturnFooter from '../../components/ReturnFooter';
import { SearchIcon } from '@chakra-ui/icons';


const StudentViewAllFiles: React.FC = () => {
    const [linkPage, setLinkPage] = useState('');

        const [searchTerm, setSearchTerm] = useState('');
  // You'll want to replace this with actual file data, likely fetched from a server
  const documents = [
    { year: '2020-2021', name: 'Self-evaluation form' },
    // ... other documents
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<Flex
      direction="column"
      minHeight="100vh"
    >
       <Header userName="student" userEmail="student@efrei.net" message="!!! Deadline of CDC 12/10/2023 00:00 - Deadline of Final Report 12/31/2023 00:00" />
      <Heading mb={6}>Student Space</Heading>
      <InputGroup mb={4}>
        <Input
          placeholder="Type keyword..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search documents"
            icon={<SearchIcon />}
            onClick={() => {/* Implement search functionality */}}
          />
        </InputRightElement>
      </InputGroup>

      <Text fontSize="sm" mb={2}>
        From this page, you will find all files about your internships...
        {/* Additional info text */}
      </Text>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Year</Th>
            <Th>File</Th>
            {/* ... other headers */}
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredDocuments.map((doc, index) => (
            <Tr key={index}>
              <Td>{doc.year}</Td>
              <Td>{doc.name}</Td>
              {/* ... other columns */}
              <Td>
                {/* Replace these placeholders with actual actions */}
                <Button size="sm" mr={2}>View</Button>
                <Button size="sm">Download</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Pagination could go here */}
      {/* <Pagination /> */}
      <ReturnFooter linkPage="/Student/StudentHome/"/>
    </Flex>
  );
};
  export default StudentViewAllFiles;
  