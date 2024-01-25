import React, { useState, useEffect, useContext }  from 'react';
import Header from '../../components/Header';
import { Button, Flex } from "@chakra-ui/react";
import ReturnFooter from '../../components/ReturnFooter';
import StudentFillFirstC from '../../components/StudentFillFirstC';
import StudentFillSecondC from '../../components/StudentFillSecondC';
import StudentFillThirdC from '../../components/StudentFillThirdC';

const StudentFillFirst: React.FC = () => {
    const [linkPage, setLinkPage] = useState('');
    const [fillFormClick, setFillFormClick] = useState(true);

    return (

      <Flex
        direction="column"
        minHeight="100vh"
      >
        <Header userName="student" userEmail="student@efrei.net" message="!!! The second self-evaluation form should be filled before 12/31/2023 00:00:00." />

        <Flex
          direction="column"
          flex="1"
          overflowY="auto" 
          paddingBottom="250px"
          gap={10}
          justify="center"
          align="center"
        >
          <Button width="150px" color="white" bgColor="blue.500">First form</Button>
          <Button width="150px" color="white" bgColor="blue.500">Second form</Button>
          <Button width="150px" color="white" bgColor="blue.500">Third form</Button>

          {fillFormClick &&  <StudentFillFirstC />}
          {fillFormClick &&  <StudentFillSecondC />}
          {fillFormClick && <StudentFillThirdC />}

        </Flex>

        <ReturnFooter  linkPage="/student/home" />
      </Flex>
    );
  };
  
export default StudentFillFirst;
