import React, { useState, useEffect, useContext }  from 'react';
import { Flex,Text,Box,VStack,HStack,Input,Textarea,Button,Heading,FormLabel,FormControl,Select,Radio,RadioGroup,Stack,Divider,useToast } from '@chakra-ui/react';


interface StudentFillProps {
    formTitle: string;
    formDeadline: string;
}


const StudentFillC : React.FC<StudentFillProps> = ({ formTitle, formDeadline }) => {
    const [value, setValue] = useState('1');
    const [evaluation, setEvaluation] = useState({
        studentName: '',
        studentSignature: '',
        tutorName: '',
        tutorSignature: '',
    });

    const toast = useToast();

    const handleChange = ( e: { target: { name: any; value: any; }; }) => {
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
        <Box p={5} borderWidth="1px" borderRadius="lg" width="80%">
            <VStack spacing={5} gap={10}>
                <Text fontSize="sm" textAlign="center" color="red">DEADLINE OF THIS FILE: {formDeadline}</Text>
                <Heading size="lg" textAlign="center">{formTitle}</Heading>
                <Divider />
                
                <Flex justify="center" flexDir="row" gap={10} m={5}>
                    <FormControl id="student">
                        <FormLabel>Student's Info</FormLabel>
                        <Input name="studentLastName" placeholder="Student Last Name"  onChange={handleChange} />
                        <Input name="studentFirstName" placeholder="Student Fist Name"  onChange={handleChange} />
                        <Input name="studentFormation" placeholder="Student Formation"  onChange={handleChange} />
                        <Input name="studentTitleInternship" placeholder="Internship title"  onChange={handleChange} />
                        <Input name="studentDurationInternship" placeholder="Internship duration"  onChange={handleChange} />
                        <Input name="studentTypeInternship" placeholder="Internship type"  onChange={handleChange} />
                    </FormControl>


                    <FormControl id="tutor of school">
                        <FormLabel>School Tutor's Info</FormLabel>
                        <Input name="schoolTutorLastName" placeholder="School Tutor Last Name" onChange={handleChange} />
                        <Input name="schoolTutorFirstName" placeholder="School Tutor First Name" onChange={handleChange} />
                        <Input name="schoolTutorTelephone"placeholder="School Tutor Telephone"  onChange={handleChange} />
                    </FormControl>
                
                    <FormControl id="tutor of company">
                        <FormLabel>Company Tutor's Info</FormLabel>
                        <Input name="companyName" placeholder="Company Name" onChange={handleChange} />
                        <Input name="companyAddress" placeholder="Company Address" onChange={handleChange} />
                        <Input name="companyTutorLastName" placeholder="Company Tutor Last Name" onChange={handleChange} />
                        <Input name="companyTutorFirstName" placeholder="Company Tutor First Name" onChange={handleChange} />
                        <Input name="companyTutorTitle"placeholder="Company Tutor Title"  onChange={handleChange} />
                        <Input name="companyTutorTelephone"placeholder="Company Tutor Telephone"  onChange={handleChange} />
                    </FormControl>
                </Flex>

                <FormControl>
                    <FormLabel>Où est-ce qui vous plaît et vous motive dans votre stage ?</FormLabel>
                    <Textarea />
                    <FormLabel>Décrivez une situation de travail marquante que vous avez vécu pendant votre stage.</FormLabel>
                    <Textarea />
                    <FormLabel>Avez-vous rencontré, depuis le début de votre stage, une situation difficile ou problématique ? Si oui, comment avez-vous réagi ?</FormLabel>
                    <Textarea />
                    <FormLabel>Que retirez-vous comme apprentissage depuis le début de votre stage (culture d'entreprise, particularité du secteur, du métier...) ?</FormLabel>
                    <Textarea />
                    <FormLabel>Comment gérez-vous les délais dans votre travail ?</FormLabel>
                    <Textarea />
                    <FormLabel>De quelle(s) matière(s) utilisez-vous vos capacités/talents dans votre stage ? Donnez des exemples concrets.</FormLabel>
                    <Textarea />
                </FormControl>

                <FormControl>
                    <FormLabel>A combien évaluez-vous votre capacité à (1 plus mauvaise note - 5 meilleure note)</FormLabel>
                    <FormLabel>Travailler en équipe ?</FormLabel>
                    <RadioGroup /* onChange={handleChange}  */value={value}>
                        <Stack direction="row">
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                        </Stack>
                    </RadioGroup>
                    <FormLabel>Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :</FormLabel>
                    <Textarea />
                    <FormLabel>Etes autonome ?</FormLabel>
                    <RadioGroup /* onChange={handleChange}  */value={value}>
                        <Stack direction="row">
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                        </Stack>
                    </RadioGroup>
                    <FormLabel>Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :</FormLabel>
                    <Textarea />
                    <FormLabel>Etre adaptale ?</FormLabel>
                    <RadioGroup /* onChange={handleChange}  */value={value}>
                        <Stack direction="row">
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                        </Stack>
                    </RadioGroup>
                    <FormLabel>Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :</FormLabel>
                    <Textarea />
                    <FormLabel>Respecter les délais fixés ?</FormLabel>
                    <RadioGroup /* onChange={handleChange}  */value={value}>
                        <Stack direction="row">
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                        </Stack>
                    </RadioGroup>
                    <FormLabel>Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :</FormLabel>
                    <Textarea />
                    <FormLabel>Prendre des initiatives ?</FormLabel>
                    <RadioGroup /* onChange={handleChange}  */value={value}>
                        <Stack direction="row">
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                        </Stack>
                    </RadioGroup>
                    <FormLabel>Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :</FormLabel>
                    <Textarea />
                    <FormLabel>Réaliser un travail de quanlité (rigueur professionnelle, être appliqué...) ?</FormLabel>
                    <RadioGroup /* onChange={handleChange}  */value={value}>
                        <Stack direction="row">
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                        </Stack>
                    </RadioGroup>
                    <FormLabel>Pourquoi vous êtes-vous attribué cette note ? Donnez un exemple concret :</FormLabel>
                    <Textarea />
                </FormControl>

                <FormControl>
                    <FormLabel>Souhaitez-vous me contacter pour échanger sur le déroulement de votre stage ? Si oui, par quel moyen (par téléphone, mail) ?</FormLabel>
                    <Textarea />
                </FormControl>

                <Text fontSize="sm" textAlign="center" color="red">* All the fields are not completed.</Text>
                <HStack spacing={10}>
                    <Button colorScheme="blue" onClick={handleSubmit}>Save Draft</Button>
                    <Button colorScheme="teal" onClick={handleSubmit}>Save Definitively</Button>
                </HStack>
            </VStack>
        </Box>
    );
};


export default StudentFillC;