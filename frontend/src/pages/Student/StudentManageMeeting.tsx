import React, { useState } from 'react';
import { Box,Flex,Heading,Text,Button,FormControl,FormLabel,Input,Radio,RadioGroup,Stack,Select,HStack } from "@chakra-ui/react";
import Header from '../../components/Header';
import ReturnFooter from '../../components/ReturnFooter';

type DateKeys = 'date1' | 'date2' | 'date3';
type LocationKeys = 'location1' | 'location2' | 'location3';

const StudentManageMeeting: React.FC = () => {
  const [meetingType, setMeetingType] = useState('');
  const [dates, setDates] = useState<{ [key in DateKeys]: string }>({ date1: '', date2: '', date3: '' });
  const [locations, setLocations] = useState<{ [key in LocationKeys]: string }>({ location1: '', location2: '', location3: '' });

  const handleDateChange = (dateNumber: DateKeys, value: string) => {
    setDates({ ...dates, [dateNumber]: value });
  };

  const handleLocationChange = (locationNumber: LocationKeys, value: string) => {
    setLocations({ ...locations, [locationNumber]: value });
  };

  const handleSubmit = () => {
    console.log({ meetingType, dates, locations });
  };

  return (
    <Flex
      direction="column"
      minHeight="100vh"
    >
      <Header userName="student" userEmail="student@efrei.net" message="!!! Deadline of CDC 12/10/2023 00:00 - Deadline of Final Report 12/31/2023 00:00" />
      <Heading mb={4}>Meeting</Heading>
      <Text fontSize="sm" mb={2}>
        DEADLINE OF DEFENSE: 02/31/2024 00:00:00
      </Text>
      <Box w="full" maxWidth="500px">
        <FormControl mb={4}>
          <FormLabel>Meeting Type:</FormLabel>
          <Select placeholder="Select meeting type" onChange={(e) => setMeetingType(e.target.value)}>
            <option value="visit">Visit</option>
            <option value="defense">Defense</option>
          </Select>
        </FormControl>

        {(Object.keys(dates) as DateKeys[]).map((dateKey, index) => (
          <HStack key={dateKey} mb={4}>
            <FormControl>
              <FormLabel>Date {index + 1}</FormLabel>
              <Input
                type="date"
                value={dates[dateKey]}
                onChange={(e) => handleDateChange(dateKey, e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Location {index + 1}</FormLabel>
              <RadioGroup onChange={(value) => handleLocationChange(`location${index + 1}` as LocationKeys, value)}>
                <Stack direction="row">
                  <Radio value="school">At School</Radio>
                  <Radio value="company">At Company</Radio>
                  <Radio value="visio">Visio</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </HStack>
        ))}

        <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
      </Box>
      
      <ReturnFooter linkPage="/Student/StudentHome/"/>
    </Flex>
  );
};

export default StudentManageMeeting;
