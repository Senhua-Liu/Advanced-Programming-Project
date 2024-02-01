// AdminManageNotificationsC

import React, { useEffect, useState } from 'react';
import { Box,Flex,Text,Button,Table,Thead,Tbody,Tr,Th,Td,Select } from "@chakra-ui/react";
import AdminEditNotificationsC from "./AdminEditNotificationsC";






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
  


const AdminManageNotificationsC = () => {
    const [showViewEdit, setShowViewEdit] = useState(false);

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            console.log("TEST user.promotion: ", `${user?.promotion}`);
            console.log("User ID from localStorage:", JSON.parse(storedUser)?.id);
        };
    }, []);



    const handleAddClick = () => {
        setShowViewEdit(true);
    };

    return (
        <Flex direction="column" p={5} w="80%" justify="center" align="center" maxW="960px" mx="auto">
                <AdminEditNotificationsC />
        </Flex>

    );
};

export default AdminManageNotificationsC;