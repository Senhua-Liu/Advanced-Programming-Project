import React, { useState, useEffect, useContext }  from 'react';
import { Box,Flex, Button, FormControl, FormLabel,Input, Heading, VStack, HStack, Textarea, useColorModeValue, useToast } from "@chakra-ui/react";
import { useUser } from '../context/UserContext';


interface User {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    type: string;
};

interface Company {
    id?: number;
    name: string;
    address: string;
    city: string;
    zipCode: string;
};
  
interface Tutor {
    id?: number;
    companyID: number;
    oldPassword: string;
    telephone: string;
};

interface Internship {
    id?: number;
    companyID: number;
    duration: number;
    type: string;
    jobTitle: string;
    mission: string;
    startDate: Date | string;
    endDate: Date | string;
    salary: number;
    studentID?: number;
    tutorID: number;
};

interface FormData {
    user: User;
    company: Company;
    tutor: Partial<Tutor>;
    internship: Internship;
};

interface Student {
    id?: number;
    year: number;
}

const formatDateForMySQL = (date: string | number | Date) => {
    const d = new Date(date);
    return isNaN(d.getTime()) ? null : d.toISOString().slice(0, 19).replace('T', ' ');
};

const formatDateForInput = (date: string | number | Date) => {
    if (!date) return '';
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
};



const StudentAddNewInternshipC = () => {
    const toast = useToast();
    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    
    const [ studentResponse, setStudentResponse ] = useState<Student | null>(null);
    const initialFormData = {
        user: { id: 0, firstName: '', lastName: '', email: '', password:'', type: 'tutor' },
        company: { id: 0, name: '', address: '', city: '', zipCode: '' },
        tutor: { id: 0, companyID: 0, oldPassword: '', telephone: '' }, 
        internship: { id: 0, companyID: 0, duration: 0, type: '', jobTitle: '', mission: '', startDate: '', endDate: '', salary: 0, studentID: user?.id ?? 0, tutorID: 0 }
    };
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const startDate = new Date(formData.internship.startDate);
    const endDate = new Date(formData.internship.endDate);
    useEffect(() => {
        if (studentResponse) {
            console.log("TEST studentResponse (here): ", studentResponse.id, studentResponse.year);
        }
    }, [studentResponse]);
    

    useEffect(() => {
        const fetchStudentData = async () => {
            if (user && user.id) { 
                try {
                    const response = await fetch(`${process.env.REACT_APP_BACKENDNODE_URL}/api/student/${user.id}`);
                    if (!response.ok) throw new Error('Failed to fetch student data');
                    const data = await response.json();
                    setStudentResponse(data); 
                } catch (error) {
                    console.error('Failed to fetch student data', error);
                }
            }
        };
        fetchStudentData(); 
    }, [user]); 
    
    if (!user) {
        return <div>Loading user data...</div>;
    }

    const handleInputChange = (section: keyof FormData, field: string) => (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [section]: {
                ...prevFormData[section],
                [field]: e.target.value,
            },
        }));
    };

    const handleSubmit = async () => {
        if (!studentResponse) {
            toast({ title: 'Student information not available', status: 'error' });
            return;
        }

        const formattedStartDate = formatDateForMySQL(formData.internship.startDate);
        const formattedEndDate = formatDateForMySQL(formData.internship.endDate);

        if (!formattedStartDate || !formattedEndDate) {
            toast({ title: 'Invalid date format', status: 'error' });
            return;
        }

        try {
          const company = await createEntity('/api/company/', formData.company);
          const user = await createEntity('/api/user/register/', formData.user);
          if (!user) throw new Error('Failed to create user');
          const tutor = await createEntity('/api/tutor/', { ...formData.tutor, id: user.id, companyID: company.id });
          const internship = await createEntity('/api/internship/', { ...formData.internship, startDate: formattedStartDate, endDate: formattedEndDate, type: studentResponse!.year, companyID: company.id, tutorID: tutor.id });
          if (internship) {
            toast({ title: 'Internship created successfully', status: 'success' });
            setFormData(initialFormData);
          }
        } catch (error) {
            const errorMessage = (error instanceof Error) ? error.message : 'An unexpected error occurred';
            toast({ title: errorMessage, status: 'error' });
        }
    };

    const createEntity = async (url: string, data: any) => {
        const response = await fetch(`${process.env.REACT_APP_BACKENDNODE_URL}${url}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
    
        if (!response.ok) {
          throw new Error(`Error creating entity at ${url}`);
        }
        console.log("TEST createEntity response: ", url, response);
        return response.json();
    };
    

    
    
    return (
        <Flex direction ="column" p={8} mt={20} align="center" justify="center" >
            <Box w="full" maxW="6xl" p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg">
                <Heading size="lg" mb={6} textAlign="center">STUDENT SPACE</Heading>

                <VStack>
                    <HStack w="full" justify="space-between">
                        <FormControl id="company-name" flex="1">
                        <FormLabel>Company Name:</FormLabel>
                        <Input value={formData.company.name} onChange={handleInputChange('company', 'name')} />
                        </FormControl>
                        <FormControl id="company-address" flex="1">
                        <FormLabel>Company Address:</FormLabel>
                        <Input value={formData.company.address} onChange={handleInputChange('company', 'address')} />
                        </FormControl>
                        <FormControl id="company-city" flex="1">
                        <FormLabel>Company City:</FormLabel>
                        <Input value={formData.company.city} onChange={handleInputChange('company', 'city')} />
                        </FormControl>
                        <FormControl id="company-zipcode" flex="1">
                        <FormLabel>Company Zip Code:</FormLabel>
                        <Input value={formData.company.zipCode} onChange={handleInputChange('company', 'zipCode')} />
                        </FormControl> 
                    </HStack>

                    <HStack w="full" justify="space-between">
                        <FormControl id="tutorFirstName" flex="1">
                        <FormLabel>Tutor First Name:</FormLabel>
                        <Input value={formData.user.firstName} onChange={handleInputChange('user', 'firstName')} />
                        </FormControl>
                        <FormControl id="tutorLastName" flex="1">
                        <FormLabel>Tutor Last Name:</FormLabel>
                        <Input value={formData.user.lastName} onChange={handleInputChange('user', 'lastName')} />
                        </FormControl>
                        <FormControl id="tutor-phone-number" flex="1">
                        <FormLabel>Tutor Telephone:</FormLabel>
                        <Input value={formData.tutor.telephone} onChange={handleInputChange('tutor', 'telephone')} />
                        </FormControl>
                        <FormControl id="tutor-mail" flex="1">
                        <FormLabel>Tutor Email:</FormLabel>
                        <Input value={formData.user.email} onChange={handleInputChange('user', 'email')} />
                        </FormControl>
                    </HStack>

                    <FormControl id="class">
                        <FormLabel>Job Title:</FormLabel>
                        <Input size="sm" value={formData.internship.jobTitle} onChange={handleInputChange('internship', 'jobTitle')} />
                    </FormControl>

                    <FormControl id="class">
                        <FormLabel>Mission Description:</FormLabel>
                        <Textarea size="sm" value={formData.internship.mission} onChange={handleInputChange('internship', 'mission')} />
                    </FormControl>

                    <HStack w="full" justify="space-between">
                        <FormControl id="start-date" flex="1">
                        <FormLabel>Start Date:</FormLabel>
                        <Input 
                            type="date"
                            value={formatDateForInput(formData.internship.startDate)}
                            onChange={(e) => setFormData({
                                ...formData,
                                internship: { ...formData.internship, startDate: e.target.value }
                            })}
                        />
                        </FormControl>
                        <FormControl id="end-date" flex="1">
                        <FormLabel>End Date:</FormLabel>
                        <Input 
                            type="date"
                            value={formatDateForInput(formData.internship.endDate)}
                            onChange={(e) => setFormData({
                                ...formData,
                                internship: { ...formData.internship, endDate: e.target.value }
                            })}
                        />
                        </FormControl>
                        <FormControl id="salary" flex="1">
                        <FormLabel>Salary (€ per month):</FormLabel>
                        <Input value={formData.internship.salary} onChange={handleInputChange('internship', 'salary')}  />
                        </FormControl>
                        <FormControl id="number-of-days" flex="1">
                        <FormLabel>Duration (number of weeks):</FormLabel>
                        <Input value={formData.internship.duration} onChange={handleInputChange('internship', 'duration')}  />
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

    );
};


export default StudentAddNewInternshipC;