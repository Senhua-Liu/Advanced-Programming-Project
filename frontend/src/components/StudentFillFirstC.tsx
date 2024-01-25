import React, { useState, useEffect, useContext }  from 'react';
import { Flex,Text,Box,VStack,HStack,Input,Textarea,Button,Heading,FormLabel,FormControl,Select,Radio,RadioGroup,Stack,Divider,useToast } from '@chakra-ui/react';


const StudentFillFirstC = () => {
    const [evaluation, setEvaluation] = useState({
        studentName: '',
        studentSignature: '',
        tutorName: '',
        tutorSignature: '',
    });

    const toast = useToast();

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setEvaluation({ ...evaluation, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        toast({
            title: 'Evaluation submitted.',
            description: "Your evaluation has been submitted successfully.",
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <Box p={5} borderWidth="1px" borderRadius="lg">
            <VStack spacing={5}>
                <Heading size="lg" textAlign="center">BILAN PÉRIODIQUE (DÉBUT DE STAGE: 1 MOIS)</Heading>
                <Text fontSize="sm" textAlign="center">
                DEADLINE OF THIS FILE: 01/20/2023 00:00:00
                </Text>
                <Divider />
                <FormControl id="studentName">
                    <FormLabel>Student Name</FormLabel>
                    <Input name="studentName" onChange={handleChange} />
                </FormControl>
                <FormControl id="tutorName">
                    <FormLabel>Tutor Name</FormLabel>
                    <Input name="tutorName" onChange={handleChange} />
                </FormControl>
               
                <FormControl id="studentSignature">
                    <FormLabel>Student Signature</FormLabel>
                    <Input name="studentSignature" onChange={handleChange} />
                </FormControl>
                <FormControl id="tutorSignature">
                    <FormLabel>Tutor Signature</FormLabel>
                    <Input name="tutorSignature" onChange={handleChange} />
                </FormControl>
                <HStack spacing={10}>
                    <Button colorScheme="blue" onClick={handleSubmit}>Save Draft</Button>
                    <Button colorScheme="teal" onClick={handleSubmit}>Save Definitively</Button>
                </HStack>
            </VStack>
        </Box>
    );
};


export default StudentFillFirstC;