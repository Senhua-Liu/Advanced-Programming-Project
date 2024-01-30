// TutorViewAllFilesC

import React, { useContext, useEffect, useState } from 'react';
import { Box,Flex,Table,Thead,Tbody,Tr,Th,Td,Button,Input,Text,IconButton,Container, Modal, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Badge, Heading, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon, DownloadIcon, ViewIcon } from "@chakra-ui/icons";
import { FaPrint } from 'react-icons/fa';




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


interface Internship {
    id?: number;
    duration: number;
    type: string;
    jobTitle: string;
    mission: string;
    salary: number;
    startDate: Date | string;
    endDate: Date | string;
    studentID?: number;
    tutorID: number;
    meetingList: {
        type: string;
        date: string;
        location: string;
        finished: boolean;
    }[];
    files: [
        {category: 1, type: "final report", content: [], confidential: 1, finished: false, deadline: "", message: ""}, 
        {category: 2, type: "CdC", content: [], confidential: 1, finished: false, deadline: "", message: ""},
        {category: 3, type: "fiche visit", content: [], confidential: 0, finished: false, deadline: "", message: ""},
        {category: 4, type: "first self-evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
        {category: 5, type: "second self-evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
        {category: 6, type: "third self-evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
        {category: 7, type: "intermediate evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
        {category: 8, type: "final evaluation form", content: [], confidential: 0, finished: false, deadline: "", message: ""},
    ];
    status: string;
    student: User;
    tutor: User;
};



  


const TutorViewAllFilesC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [internships, setInternships] = useState<Internship[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFileContent, setSelectedFileContent] = useState("");


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            console.log("TEST user.promotion: ", `${user?.promotion}`);
            console.log("User ID from localStorage:", JSON.parse(storedUser)?.id);
        };
    }, []);

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKENDNODE_URL}/api/internship/tutor/${user?.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch internships');
                }
                const data = await response.json();
                console.log("TEST useEffect() => fetched internships:", data);
                setInternships(data);
            } catch (error) {
                console.error('Error fetching internships:', error);
            }
        };
        fetchInternships();
    }, [user?.id]); 

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Search term before setState:", e.target.value);
        setSearchTerm(e.target.value);
        console.log("Filtered internships:", filteredInternships);
    };

    const handleViewFile = (fileContent: string | object) => {
        const contentAsString = typeof fileContent === 'string' ? fileContent : JSON.stringify(fileContent);
        setSelectedFileContent(contentAsString);
        setIsModalOpen(true);
    };


    const filteredInternships = internships.filter(internship =>
        internship.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.files.some(file =>
            file.type.toLowerCase().includes(searchTerm.toLowerCase()) &&
            file.category >= 1 && file.category <= 6
        )
    ); 


    return (

        <Container maxW="container.xl" p={5} >
          {/* <Flex direction="column" overflowX="auto" gap={5}> */}
{/*             
            <Flex mb={4}>
              <Input placeholder="Tape keyword..." />
              <Button ml={2}><SearchIcon /></Button>
            </Flex>

            <Text>
                Here, you can find all files related to internships. Different files have different levels.
            </Text>
            <Text>
                - Normal level (view, download, copy-paste, print) : Final report
            </Text>
            <Text>
                - Sensitive level (view) : Self-evaluation form, Company evaluation form, Intermediate evaluation form, Fiche visit
            </Text>
       */}

            {/* <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Text fontSize="4xl" fontWeight="bold" mb={4} textAlign="center" >TUTOR SPACE</Text>
                <Table variant="striped" colorScheme="teal" size="sm" mt={4}>
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
                    <Tr>
                    <Td>2022 - 2023</Td>
                    <Td>Final evaluation form - student1</Td>
                    <Td>Student1</Td>
                    <Td>Final evaluation form</Td>
                    <Td>
                        <IconButton aria-label="View" icon={<ViewIcon />} />
                        <IconButton aria-label="Download" icon={<DownloadIcon />} ml={2} />
                    </Td>
                    </Tr>
                    <Tr>
                    <Td>2022 - 2023</Td>
                    <Td>Final evaluation form - student1</Td>
                    <Td>Student1</Td>
                    <Td>Final evaluation form</Td>
                    <Td>
                        <IconButton aria-label="View" icon={<ViewIcon />} />
                        <IconButton aria-label="Download" icon={<DownloadIcon />} ml={2} />
                    </Td>
                    </Tr>
                    <Tr>
                    <Td>2022 - 2023</Td>
                    <Td>Final evaluation form - student1</Td>
                    <Td>Student1</Td>
                    <Td>Final evaluation form</Td>
                    <Td>
                        <IconButton aria-label="View" icon={<ViewIcon />} />
                        <IconButton aria-label="Download" icon={<DownloadIcon />} ml={2} />
                    </Td>
                    </Tr>
                    <Tr>
                    <Td>2022 - 2023</Td>
                    <Td>Final evaluation form - student1</Td>
                    <Td>Student1</Td>
                    <Td>Final evaluation form</Td>
                    <Td>
                        <IconButton aria-label="View" icon={<ViewIcon />} />
                        <IconButton aria-label="Download" icon={<DownloadIcon />} ml={2} />
                    </Td>
                    </Tr>
                </Tbody>
                </Table>
            </Box>


            
    
            <Flex justifyContent="center" my={4}>
              <Button size="sm" mr={2}>{"<"}</Button>
    
              <Text mx={2}>Page 1 of 5</Text>
              <Button size="sm">{" >"}</Button>
            </Flex>
    
          </Flex> */}


            <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
                <Flex direction="column" overflowX="auto" gap={5}>
                    <Heading mb={6} textAlign="center">Tutor Space</Heading>
                    
                    <InputGroup mb={4}>
                        <Input placeholder="Type keyword..." value={searchTerm} onChange={handleSearchChange} />
                        <InputRightElement children={<IconButton aria-label="Search documents" icon={<SearchIcon />} />} />
                    </InputGroup>
                                  
                    <Flex justify="center" align="center" flexDir="column" m={5}>
                        <Text fontSize="xl" mb={2}>Here, you can find all files related to internships. Different files have different levels. Normal level means that the document can be downloaded, copied (copy-paste), and printed. Sensitive level means that read-only online but prohibited to print, copy and download.</Text>
                        <Text color="red" >* Normal level: final report and CdC.</Text>
                        <Text color="red">* Sensitive level: All other files except final report and CdC.</Text>
                    </Flex>
                    
                    <Table variant="simple">
                        <Thead>
                        <Tr>
                            <Th>Student Name</Th>
                            <Th>Student Email</Th>
                            <Th>Internship Type</Th>
                            <Th>File Type</Th>
                            <Th>File Status</Th>
                            <Th>Actions</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
{/*                             
                        {filteredInternships.map((internship, internshipIndex) => {
                            return internship.files.map((file, fileIndex) => (
                                <Tr key={`${internship.id}-${fileIndex}`}>
                                    <Td>{internship.student.firstName} {internship.student.lastName.toUpperCase()} </Td>
                                    <Td>{internship.student.email}</Td>
                                    <Td>{internship.type}</Td>
                                    <Td>{file.type}</Td>
                                    <Td>
                                        <Badge colorScheme={file.finished ? "green" : "red"}>
                                            {file.finished ? "Finished" : "Not Finished"}
                                        </Badge>
                                    </Td>
                                    <Td>
                                        {file.confidential === 1 ? (
                                            <>
                                                <a 
                                                    href={`${process.env.REACT_APP_BACKENDNODE_URL}/api/internship/download/${internship.id}/${file.category}`} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button size="sm" mr={2} leftIcon={<ViewIcon />} isDisabled={!file.finished} onClick={() => handleViewFile(file.content)} >
                                                        View
                                                    </Button>
                                                </a>
                                                <Button size="sm" mr={2} leftIcon={<FaPrint />}  isDisabled={!file.finished}
                                                    onClick={() => { 
                                                        if (file.finished) {
                                                        const printWindow = window.open(`${process.env.REACT_APP_BACKENDNODE_URL}/api/internship/download/${internship.id}/${file.category}`, '_blank');
                                                        printWindow!.addEventListener('load', () => {
                                                            printWindow!.print();
                                                        }, { once: true });
                                                    }
                                                    }} >
                                                    Print
                                                </Button>
                                                <Button size="sm" mr={2} leftIcon={<DownloadIcon />} isDisabled={!file.finished} onClick={() => {
                                                    if (file.finished) {
                                                        window.location.href = `${process.env.REACT_APP_BACKENDNODE_URL}/api/internship/download/${internship.id}/${file.category}`
                                                    }} >Download</Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button size="sm" mr={2} leftIcon={<ViewIcon />} onClick={() => handleViewFile(file.content)} >View</Button>
                                            </>
                                        )}
                                    </Td>
                                </Tr>
                            ));
                        })} */}
                            {filteredInternships.map((internship, internshipIndex) => {
                                return internship.files.map((file, fileIndex) => (
                                    <Tr key={`${internship.id}-${fileIndex}`}>
                                        <Td>{internship.student.firstName} {internship.student.lastName.toUpperCase()}</Td>
                                        <Td>{internship.student.email}</Td>
                                        <Td>{internship.type}</Td>
                                        <Td>{file.type}</Td>
                                        <Td>
                                            <Badge colorScheme={file.finished ? "green" : "red"}>
                                                {file.finished ? "Finished" : "Not Finished"}
                                            </Badge>
                                        </Td>
                                        <Td>
                                            <Button size="sm" mr={2} leftIcon={<ViewIcon />} isDisabled={!file.finished} onClick={() => handleViewFile(file.content)} >View</Button>
                                            {file.confidential === 1 ? (
                                                <>
                                                    {/* Conditionally render or disable Print and Download buttons based on the file.finished status */}
                                                    <Button size="sm" mr={2} leftIcon={<FaPrint />} isDisabled={!file.finished}
                                                        onClick={() => {
                                                            if (file.finished) {
                                                                const printWindow = window.open(`${process.env.REACT_APP_BACKENDNODE_URL}/api/internship/download/${internship.id}/${file.category}`, '_blank');
                                                                printWindow!.addEventListener('load', () => {
                                                                    printWindow!.print();
                                                                }, { once: true });
                                                            }
                                                        }}
                                                    >Print</Button>
                                                    <Button size="sm" leftIcon={<DownloadIcon />} isDisabled={!file.finished} onClick={() => {
                                                        if (file.finished) {
                                                            window.location.href = `${process.env.REACT_APP_BACKENDNODE_URL}/api/internship/download/${internship.id}/${file.category}`
                                                        }
                                                    }} >Download</Button>
                                                </>
                                            ) : null}
                                        </Td>
                                    </Tr>
                                ));
                            })}
                        </Tbody>
                    </Table>
                </Flex>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <ModalOverlay />
                    <ModalContent maxW="90vw" >
                        <ModalHeader>File Content</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody sx={{ userSelect: "none" }} onCopy={(e) => e.preventDefault()}>
                            {(() => {
                                try {
                                const parsedContent = JSON.parse(selectedFileContent);
                                if (Array.isArray(parsedContent)) {
                                    return parsedContent.map((item, index) => (
                                    <Box key={index} p={4} borderBottom="1px solid gray">
                                        <Text fontWeight="bold">{item.text}</Text>
                                        <Text mt={2}>{item.answer}</Text>
                                    </Box>
                                    ));
                                } else {
                                    return <Text>{JSON.stringify(parsedContent, null, 2)}</Text>;
                                }
                                } catch (e) {
                                return <Text>{selectedFileContent}</Text>;
                                }
                            })()}
                        </ModalBody> 

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={() => setIsModalOpen(false)}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Container>
    );
}; 


export default TutorViewAllFilesC;

