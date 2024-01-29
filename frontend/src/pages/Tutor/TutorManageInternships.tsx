import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/Header';
import { Flex } from "@chakra-ui/react";
import ReturnFooter from '../../components/ReturnFooter';
import TutorManageInternshipsC from '../../components/TutorManageInternshipsC';
import { useUser } from '../../context/UserContext';

const TutorManageInternships: React.FC = () => {
  const [linkPage, setLinkPage] = useState('');
  const user = useUser();

  return (

    <Flex
      direction="column"
      minHeight="100vh"
    >
      <Header userFirstName={user?.user?.firstName} userLastName={user?.user?.lastName} userEmail={user?.user?.email} message="!!! The intermediate evaluation form should be filled before 12/31/2023 00:00:00." />

      <Flex
        direction="column"
        flex="1"
        overflowY="auto" 
        paddingBottom="250px"
      >
        <TutorManageInternshipsC />

      </Flex>

      <ReturnFooter linkPage="/tutor/home"  />
    </Flex>
  );
};

export default TutorManageInternships;
