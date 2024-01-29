import React, { useState, useEffect, useContext, useRef }  from 'react';
import { Box,Flex,Text,Button,FormControl,FormLabel,Heading,Select,VStack,useToast,Center,Divider,HStack } from "@chakra-ui/react";
import { AttachmentIcon } from '@chakra-ui/icons';
import { useUser } from '../context/UserContext';

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
};


const StudentUploadFilesC = () => {
    const user = useUser();
    const [file, setFile] = useState<File | null>(null);
    const [fileType, setFileType] = useState('');
    const toast = useToast();
    const [latestInternship, setLatestInternship] = useState<Internship | null>(null);
    const [latestInternshipId, setLatestInternshipId] = useState(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        const fetchLatestInternshipId = async () => {
            if (user?.user?.id) {
                try {
                    const response = await fetch(`${process.env.REACT_APP_BACKENDNODE_URL}/api/internship/student/${user?.user?.id}/latest`);
                    if (!response.ok) throw new Error('Failed to fetch latest internship');
                    const data = await response.json();
                    setLatestInternshipId(data.id);
                    console.log("TEST setLatestInternshipId(data.id): ", latestInternshipId);
                    setLatestInternship(data);
                    console.log("TEST setLatestInternship(data): ", latestInternship);
                } catch (error) {
                    console.error('Error fetching latest internship ID:', error);
                }
            }
        };

        fetchLatestInternshipId();
    }, [user?.user?.id]);

    const handleFileChange = (selectedFile: React.SetStateAction<File | null>) => {
        console.log("Selected File: ", selectedFile);
        setFile(selectedFile); 
        // const file = event.target.files[0];
        // if (file) {
        //     setFile(file);
        // }
    };

    const handleBrowseClick = () => {
        // if (fileInputRef.current) {
        //     fileInputRef.current.click();
        // }
        fileInputRef.current?.click();
    };

    const handleUpload = async () => {
        console.log("TEST handleUpload...");
        console.log("File: ", file, "FileType: ", fileType);
        console.log("TEST latestInternship.id: ", latestInternship?.id);
        // if ( !file || !fileType || !latestInternship?.id || !user?.user?.id || !latestInternshipId ) {
        //   toast({
        //     title: "Error",
        //     description: "Please select a file and specify the file type.",
        //     status: "error",
        //     duration: 9000,
        //     isClosable: true,
        //   });
        //   return;
        // }
        if ( !file || !fileType ) {
            toast({
              title: "Error",
              description: "Please select a file and specify the file type.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            return;
        }

      
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileType', fileType);
        // formData.append('studentID', user.user.id.toString());
        // formData.append('internshipId', latestInternship.id.toString());
        console.log("TEST formData: ", formData);
      
        try {
          const response = await fetch(`${process.env.REACT_APP_BACKENDNODE_URL}/api/internship/upload/${latestInternshipId}/${fileType}`, {
            method: 'POST',
            body: formData,
          });
      
          if (response.ok) {
            console.log("TEST formData: ", formData);
            toast({
              title: "File uploaded.",
              description: "Your file has been uploaded successfully.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            // Optionally, clear the form or update the UI
          } else {
            throw new Error('Upload failed');
          }
        } catch (error) {
          toast({
            title: "Error",
            description: "Failed to upload the file.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
    };
      

    return (
        <Center p={10} flexDirection="column">
            <Box
                borderWidth="2px"
                borderRadius="lg"
                p={6}
                w="4xl"
                boxShadow="lg"
                borderColor="gray.200"
            >
                <VStack spacing={4}>
                <Heading size="md">Document</Heading>
                <Text fontSize="sm" textAlign="center" color="red">
                    DEADLINE OF CdC: 12/10/2023 00:00:00
                    <br />
                    DEADLINE OF FINAL REPORT: 12/31/2023 00:00:00
                </Text>
                <Divider />
                {/* <Box
                    p={6}
                    borderWidth="2px"
                    borderRadius="lg"
                    borderColor="gray.300"
                    w="full"
                    textAlign="center"
                    _hover={{ bg: "gray.50" }}
                    cursor="pointer"
                >
                    <AttachmentIcon mx="auto" boxSize={12} />
                    <Text mt={2}>Drag and drop here or Browse</Text>
                </Box> */}

                {latestInternship && (
                    <Box p={4} borderWidth="1px" borderRadius="lg" borderColor="gray.300" w="60%" mt={4}>
                        <Flex justify="center" align="center" flexDir="column" >
                            <Text fontSize="sm">Job Title: {latestInternship.jobTitle}</Text>
                            <Text fontSize="sm">Internship Type: {latestInternship.type}</Text>
                            <Text fontSize="sm">Start Date: {new Date(latestInternship.startDate).toLocaleDateString()}</Text>
                            <Text fontSize="sm">End Date: {new Date(latestInternship.endDate).toLocaleDateString()}</Text>
                        </Flex>
                    </Box>
                )}

                <Text fontSize="sm" >Attention: click browse, then choose a local pdf file, then click upload.</Text>
                <HStack w="full" justifyContent="space-between">
                    <Button variant="outline" onClick={handleBrowseClick} >Browse</Button>
                    <input
                        type="file"
                        id="fileInput"
                        hidden
                        ref={fileInputRef}
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                handleFileChange(e.target.files[0]);
                                // setFile(e.target.files[0]);
                            }
                        }}
                    />
                    <Select placeholder="CdC / final report" onChange={(e) => setFileType(e.target.value)}>
                        <option value="CdC">CdC</option>
                        <option value="final report">final report</option>
                    </Select>

                    <Button colorScheme="blue" onClick={handleUpload}>Upload</Button>
                </HStack>
                <HStack w="full" justifyContent="space-between">
                    <Button variant="solid" colorScheme="red">Cancel</Button>
                    <Button variant="solid" colorScheme="blue">Save in Draft</Button>
                    <Button variant="solid" colorScheme="green">Save</Button>
                </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default StudentUploadFilesC;
