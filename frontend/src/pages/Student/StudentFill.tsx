import React, { useState, useEffect, useContext }  from 'react';
import Header from '../../components/Header';
import { Button, Flex, VStack, HStack } from "@chakra-ui/react";
import ReturnFooter from '../../components/ReturnFooter';
import StudentFillC from '../../components/StudentFillC';
import { useUser } from '../../context/UserContext';

const StudentFill: React.FC = () => {
    const [linkPage, setLinkPage] = useState('');
    const [activeForm, setActiveForm] = useState('first');
    const [formTitle, setFormTitle] = useState('');
    const [formDeadline, setFormDeadline] = useState('');
    const user = useUser();

    const handleFormButtonClick = (formName: React.SetStateAction<string>) => {
      setActiveForm(formName); 
    };

    return (
      <Flex
        direction="column"
        minHeight="100vh"
      >
        <Header userFirstName={user?.user?.firstName} userLastName={user?.user?.lastName} userEmail={user?.user?.email}  message="!!! The second self-evaluation form should be filled before 12/31/2023 00:00:00." />

        <HStack spacing={4} my={10} justify="center" direction="row">
          <Button onClick={() => handleFormButtonClick('first')} width="150px" color="white" bgColor="blue.500">
            First form
          </Button>
          <Button onClick={() => handleFormButtonClick('second')} width="150px" color="white" bgColor="blue.500">
            Second form
          </Button>
          <Button onClick={() => handleFormButtonClick('third')} width="150px" color="white" bgColor="blue.500">
            Third form
          </Button>
        </HStack>

        <Flex
          direction="column"
          flex="1"
          overflowY="auto" 
          paddingBottom="250px"
          gap={10}
          justify="center"
          align="center"
        >
          {activeForm === 'first' && <StudentFillC  formTitle="BILAN PÉRIODIQUE (DÉBUT DE STAGE: 1 MOIS)" formDeadline="01/20/2023 00:00:00" />}
          {activeForm === 'second' && <StudentFillC formTitle="BILAN PÉRIODIQUE (MILIEU DE STAGE: 3 MOIS)" formDeadline="04/20/2023 00:00:00" />}
          {activeForm === 'third' && <StudentFillC  formTitle="BILAN PÉRIODIQUE (FIN DE STAGE: 5/6 MOIS)" formDeadline="06/20/2023 00:00:00" />}
        </Flex>

        <ReturnFooter  linkPage="/student/home" />
      </Flex>
    );
  };
  
export default StudentFill;
