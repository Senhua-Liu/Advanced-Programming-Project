// AdminViewAllStatusC

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
  Container,
  Text
} from "@chakra-ui/react";

const AdminViewAllStatusC = ()  => {

    const data = [
        { group: 'M2', name: 'NON', cdc: 'OUI', group1: 'M2', name1: 'NON', cdc1: 'OUI' },
        { group: 'M1', name: 'NON', cdc: 'OUI', group1: 'M2', name1: 'NON', cdc1: 'OUI' },
        { group: 'L3', name: 'NON', cdc: 'OUI', group1: 'M2', name1: 'NON', cdc1: 'OUI' },
        { group: 'L2', name: 'NON', cdc: 'OUI', group1: 'M2', name1: 'NON', cdc1: 'OUI' },
        { group: 'L1', name: 'NON', cdc: 'OUI', group1: 'M2', name1: 'NON', cdc1: 'OUI' },
      ];
    
      return (
        <Container maxW="container.xl" p={5}>
          <Flex direction="column" overflowX="auto">
            <Table variant="striped" colorScheme="teal" size="sm">
              <Thead>
                <Tr>
                  <Th>Gr</Th>
                  <Th>NOM</Th>
                  <Th>CdC</Th>
                  <Th>FICHE VISITE</Th>
                  <Th>FICHE EVAL ENTR</Th>
                  <Th>SONDAGE WEB</Th>
                  {/* ... more <Th> elements for each column */}
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.group}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.cdc}</Td>
                    {/* ... more <Td> elements for each cell */}
                  </Tr>
                ))}
              </Tbody>
            </Table>
            
            {/* Page navigation */}
            <Flex justifyContent="center" my={4}>
              <Button size="sm" mr={2}>&lt;</Button>
              {/* Page numbers could be rendered dynamically here */}
              <Text mx={2}>Page 1 of 5</Text>
              <Button size="sm">&gt;</Button>
            </Flex>
            
            {/* Return button */}
            <Flex justifyContent="flex-end" my={4}>
              <Button colorScheme="blue">Return</Button>
            </Flex>
          </Flex>
        </Container>
      );

};


export default AdminViewAllStatusC;