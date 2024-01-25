import React, { useState, useEffect, useContext, ReactNode } from 'react';
import Header from '../../components/Header';
// import Footer from '../../components/footer';
// import Body from '../../components/body';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon,FormControl,FormLabel,Heading,Input,Select,VStack,useToast } from "@chakra-ui/react";
import ReturnFooter from '../../components/ReturnFooter';
//import { FileUpload } from '../../components/FileUpload';// ASSUMING WE HAVE THE COMPONENT, WHICH WE DO NOT HAVE!!!!

const StudentUploadFiles: React.FC = () => {
    const [linkPage, setLinkPage] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [fileType, setFileType] = useState('');
    const toast = useToast();

    
  
    const handleFileChange = (selectedFile: File) => {
      if (selectedFile) {
        setFile(selectedFile);
      }
    };
  
    const handleUpload = () => {
      // Implement the file upload logic here
      toast({
        title: "File uploaded.",
        description: "Your file has been uploaded successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    };
  
    return (
      <Flex
      direction="column"
      minHeight="100vh"
    >
       <Header userName="student" userEmail="student@efrei.net" message="!!! Deadline of CDC 12/10/2023 00:00 - Deadline of Final Report 12/31/2023 00:00" />
        <Heading mb={6}>Upload Files</Heading>
  
        <Text fontSize="sm" mb={2}>
          DEADLINE OF CDC: 12/10/2023 00:00:00
          <br />
          DEADLINE OF FINAL REPORT: 12/31/2023 00:00:00
        </Text>

        <Box borderWidth="2px" borderRadius="lg" p={6} mb={4} borderColor="gray.300">
        
        </Box>

        <FormControl mb={4}>
          <FormLabel>File type:</FormLabel>
          <Select placeholder="Select file type" onChange={(e) => setFileType(e.target.value)}>
            <option value="cdc">CDC</option>
            <option value="final_report">FINAL REPORT</option>
          </Select>
        </FormControl>
  
        <Button colorScheme="blue" onClick={handleUpload}>Upload</Button>
  
        <VStack mt={4} spacing={4}>
          <Button colorScheme="red">Cancel</Button>
          <Button colorScheme="blue">Save in Draft</Button>
          <Button colorScheme="blue">Save</Button>
        </VStack>
  
        <ReturnFooter linkPage="/Student/StudentHome/"/>
    </Flex>
    );
  };
  
  export default StudentUploadFiles;
  