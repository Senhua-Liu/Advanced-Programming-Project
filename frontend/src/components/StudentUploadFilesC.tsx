import React, { useState, useEffect, useContext }  from 'react';
import { Box,Flex,Text,Button,FormControl,FormLabel,Heading,Select,VStack,useToast } from "@chakra-ui/react";

const StudentUploadFilesC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [fileType, setFileType] = useState('');
    const toast = useToast();

    const handleFileChange = (selectedFile: File) => {
      if (selectedFile) {
        setFile(selectedFile);
      }
    };
  
    const handleUpload = () => {
      toast({
        title: "File uploaded.",
        description: "Your file has been uploaded successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    };

    return (
        <Flex justify="center" align="center">
            
            <Box borderWidth="2px" borderRadius="lg" p={6} mb={4} borderColor="gray.300">
                <Heading mb={6}>Upload Files</Heading>
                
                <Text fontSize="sm" mb={2}>
                    DEADLINE OF CDC: 12/10/2023 00:00:00
                    <br />
                    DEADLINE OF FINAL REPORT: 12/31/2023 00:00:00
                </Text>
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
            </Box>

            
        </Flex>
    );
};


export default StudentUploadFilesC;