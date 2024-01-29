import React, { useContext, useState } from 'react';
import { useNavigate, Link, useLocation  } from 'react-router-dom';
import { Button, Input, VStack, useToast, InputGroup,InputRightElement,IconButton } from '@chakra-ui/react';
import { FaUserPlus, FaEye, FaEyeSlash  } from "react-icons/fa";





const RegisterC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();
    const location = useLocation();






    const sendUser = () => {
        if (!lastName.trim() || !firstName.trim() || !email.trim() || !password.trim()) {
            toast({
                title: 'Erreur',
                description: 'Veuillez remplir tous les champs.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return; 
        }


        fetch(`${process.env.REACT_APP_BACKENDNODE_URL}/api/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email, password }),
        })
        .then(response => {
            console.log("TEST response: ", response);
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text) }); 
            }
            return response.json();
        })
        .then(data => {
            toast({
                title: 'Inscription réussie.',
                description: 'Bienvenue chez nous !',
                status: 'success',
                duration: 1000,
                isClosable: true,
            });
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setTimeout(() => {
                navigate('/login'); 
            }, 1000);
        })
        .catch((error) => {
            console.error('Error:', error);
            toast({
                title: 'Inscription échouée.',
                description: error.message,
                status: 'error',
                duration: 1000,
                isClosable: true,
            });
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault(); 
        sendUser();
    };

    return (

        <VStack
            spacing={4}
            as="form"
            onSubmit={handleSubmit}
            width="50%"
            bgColor="#f8f8f8" // Changed to a lighter and softer background color
            border="2px" // Thinner border for a more elegant look
            borderColor="#0C2340"
            borderRadius="lg" // Added border radius for rounded corners
            boxShadow="sm" // Subtle shadow for depth
            p={6} // Adjusted padding for better spacing
        >
            <Input 
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                borderColor="#cccccc" // Softened border color
                _hover={{ borderColor: "#0C2340" }} // Change border color on hover
                _focus={{ borderColor: "#0C2340", boxShadow: "outline" }} // Focus effect
            />
            <Input 
                placeholder="LastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                borderColor="#cccccc" // Softened border color
                _hover={{ borderColor: "#0C2340" }} // Change border color on hover
                _focus={{ borderColor: "#0C2340", boxShadow: "outline" }} // Focus effect
            />
            <Input 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderColor="#cccccc"
                _hover={{ borderColor: "#0C2340" }}
                _focus={{ borderColor: "#0C2340", boxShadow: "outline" }}
            />


            {/* <Input 
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                borderColor="#cccccc"
                _hover={{ borderColor: "#0C2340" }}
                _focus={{ borderColor: "#0C2340", boxShadow: "outline" }}
            /> */}
            <InputGroup>
                <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    borderColor="#cccccc"
                    _hover={{ borderColor: "#0C2340" }}
                    _focus={{ borderColor: "#0C2340", boxShadow: "outline" }}
                />
                <InputRightElement>
                    <IconButton
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    variant="ghost"
                    />
                </InputRightElement>
            </InputGroup>


            <Button
                colorScheme="blue"
                type="submit"
                leftIcon={<FaUserPlus />}
                bgColor="#0C2340" // Changed button color
                color="white" // Text color for contrast
                _hover={{ bgColor: "#003153" }} // Hover effect
            >
                Register
            </Button>
            <Link to="/login">
                <Button
                    bgColor="#f2f2f2" // Lighter color for the secondary button
                    color="#0C2340" 
                    _hover={{ bgColor: "#e2e2e2" }} // Hover effect
                    leftIcon={<FaUserPlus />}
                >
                    Login
                </Button>
            </Link>
        </VStack>



    );
};

export default RegisterC;