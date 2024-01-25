import React, { useState, useEffect, useContext }  from 'react';
import { Box,Flex, Button, FormControl, FormLabel,Input, Heading, VStack, HStack, Textarea, useColorModeValue } from "@chakra-ui/react";

const StudentAddNewInternshipC = () => {
    const bg = useColorModeValue('white', 'gray.700'); 

    const handleSubmit = () => {
        console.log("submitted"); 
    };


    return (
        <Flex direction ="column" p={8} mt={20} align="center" justify="center" /* minHeight="100vh" */>
            <Box w="full" maxW="6xl" p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg">
                <Heading size="lg" mb={6} textAlign="center">STUDENT SPACE</Heading>

                <VStack>
                    <HStack w="full" justify="space-between">
                        <FormControl id="company-name" flex="1">
                        <FormLabel>Company Name:</FormLabel>
                        <Input placeholder="Company Name" />
                        </FormControl>
                        <FormControl id="company-address" flex="1">
                        <FormLabel>Company Address:</FormLabel>
                        <Input placeholder="Address" />
                        </FormControl>
                        <FormControl id="company-city" flex="1">
                        <FormLabel>City:</FormLabel>
                        <Input placeholder="Address" />
                        </FormControl>
                        <FormControl id="company-zipcode" flex="1">
                        <FormLabel>Zip Code:</FormLabel>
                        <Input placeholder="Address" />
                        </FormControl> 
                    </HStack>

                    <HStack w="full" justify="space-between">
                        <FormControl id="tutorFirstName" flex="1">
                        <FormLabel>Tutor First Name:</FormLabel>
                        <Input placeholder="Tutor First Name" />
                        </FormControl>
                        <FormControl id="tutorLastName" flex="1">
                        <FormLabel>Tutor Last Name:</FormLabel>
                        <Input placeholder="Tutor Last Name" />
                        </FormControl>
                        <FormControl id="tutor-phone-number" flex="1">
                        <FormLabel>Tutor's Phone number:</FormLabel>
                        <Input placeholder="Tutor's Phone number" />
                        </FormControl>
                        <FormControl id="tutor-mail" flex="1">
                        <FormLabel>Tutor's Mail:</FormLabel>
                        <Input placeholder="tutor's mail" />
                        </FormControl>
                    </HStack>

                    <FormControl id="class">
                        <FormLabel>Mission Description</FormLabel>
                        <Textarea placeholder="Mission Description..." size="sm" />
                    </FormControl>

                    <HStack w="full" justify="space-between">
                        <FormControl id="start-date" flex="1">
                        <FormLabel>Start Date</FormLabel>
                        <Input placeholder="Start Date" />
                        </FormControl>
                        <FormControl id="end-date" flex="1">
                        <FormLabel>End Date</FormLabel>
                        <Input placeholder="End Date" />
                        </FormControl>
                        <FormControl id="salary" flex="1">
                        <FormLabel>Salary</FormLabel>
                        <Input placeholder="salary" />
                        </FormControl>
                        <FormControl id="number-of-days" flex="1">
                        <FormLabel>Number of days</FormLabel>
                        <Input placeholder="Number of days" />
                        </FormControl>
                    </HStack>
                </VStack>

                <HStack mt={4} justify="center">
                    <Button colorScheme="red">DELETE</Button>
                    <Button colorScheme="teal">SAVE IN DRAFT</Button>
                    <Button colorScheme="blue" onClick={handleSubmit} >SAVE</Button>
                </HStack>

            </Box>
        </Flex>

        // <Flex>
        //     <Heading mb={6}>STUDENT SPACE</Heading>

        //     <VStack spacing={4} align="stretch">
        //         <Box>
        //             <Heading size="md" mb={4}>Company</Heading>
        //             <HStack spacing={4}>
        //             <FormControl id="company-name">
        //                 <FormLabel>Company Name</FormLabel>
        //                 <Input placeholder="Company Name" />
        //             </FormControl>
        //             <FormControl id="company-address">
        //                 <FormLabel>Company Address</FormLabel>
        //                 <Input placeholder="Company Address" />
        //             </FormControl>
        //             </HStack>
        //             <HStack spacing={4} mt={2}>
        //             <FormControl id="city">
        //                 <FormLabel>City</FormLabel>
        //                 <Input placeholder="City" />
        //             </FormControl>
        //             <FormControl id="zip-code">
        //                 <FormLabel>ZIP Code</FormLabel>
        //                 <Input placeholder="ZIP Code" />
        //             </FormControl>
        //             </HStack>
        //         </Box>

        //         <Box>
        //             <Heading size="md" mb={4}>Contact</Heading>
        //             <HStack spacing={4}>
        //             <FormControl id="tutor-name">
        //                 <FormLabel>Tutor's Name</FormLabel>
        //                 <Input placeholder="Tutor's Name" />
        //             </FormControl>
        //             <FormControl id="tutor-phone">
        //                 <FormLabel>Tutor's Phone number</FormLabel>
        //                 <Input placeholder="Tutor's Phone number" />
        //             </FormControl>
        //             <FormControl id="tutor-email">
        //                 <FormLabel>Tutor's Mail</FormLabel>
        //                 <Input placeholder="Tutor's Mail" />
        //             </FormControl>
        //             </HStack>
        //         </Box>

        //         <Box>
        //             <Heading size="md" mb={4}>Internship</Heading>
        //             <FormControl id="mission-description" mb={2}>
        //             <FormLabel>Mission description</FormLabel>
        //             <Textarea placeholder="Mission description" />
        //             </FormControl>
        //             <HStack spacing={4}>
        //             <FormControl id="start-day">
        //                 <FormLabel>Start Day</FormLabel>
        //                 <Input placeholder="Start Day" />
        //             </FormControl>
        //             <FormControl id="end-day">
        //                 <FormLabel>End Day</FormLabel>
        //                 <Input placeholder="End Day" />
        //             </FormControl>
        //             <FormControl id="salary">
        //                 <FormLabel>Salary</FormLabel>
        //                 <Input placeholder="Salary" />
        //             </FormControl>
        //             <FormControl id="number-of-days">
        //                 <FormLabel>Number of days</FormLabel>
        //                 <Input placeholder="Number of days" />
        //             </FormControl>
        //             </HStack>
        //         </Box>

        //         <HStack spacing={4} justify="center">
        //             <Button colorScheme="red">Delete</Button>
        //             <Button colorScheme="blue">Save in Draft</Button>
        //             <Button colorScheme="blue">Save</Button>
        //         </HStack>
        //     </VStack>


        // </Flex>
    );
};


export default StudentAddNewInternshipC;