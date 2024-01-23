import React from 'react';
import Header from '../../components/Header';
// import Footer from '../../components/footer';
// import Body from '../../components/body';
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import Footer from '../../components/Footer';

const TutorHome: React.FC = () => {
    return (

      <Flex
        direction="column"
        minHeight="100vh"
      >
        <Header />

        <Flex flexDir="column" mt={-10} p={3} gap={2}>
          <Flex>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="grey" // Change the background color as needed
              color="white" // Text color
              borderRadius="full" // Makes the box a perfect circle
              width="200px" // Width of the ellipse
              height="150px" // Height of the ellipse
              padding="30px"
            >
              <Text fontSize="3xl" fontWeight="bold">Tutor</Text>
            </Box>
          </Flex>
          <Flex><Text fontSize="3xl" fontWeight="bold">tutor@efrei.com</Text></Flex>
        </Flex>
        

        <Flex
          direction="column"
          flex="1"
          overflowY="auto" 
          paddingBottom="250px"
          gap={10}
          justify="center"
          align="center"
        >
            <Flex>
                <Text color="#0C2340" fontSize="6xl" fontWeight="bold" >TUTOR SPACE</Text>
            </Flex>

            <Flex gap={10} justify="space-even" flexDir="row" >
                <Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">RESET PASSWORD</Text></Button>
                <Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">VIEW ALL FILES</Text></Button>
            </Flex>

            <Flex>
                <Button p={8}  bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">MANAGE INTERNSHIPS (STUDENTS, MEETINGS, FORMS)</Text></Button>
                {/* <Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">MANAGE NOTIFICATIONS</Text></Button> */}
            </Flex>
            
            <Flex gap={10}>
                <Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">MANAGE ALL REPORTS (VALIDATE / INVALIDATE)</Text></Button>
                {/* <Button p={8} bgColor="#0C2340" color="white" ><Text fontSize="3xl" fontWeight="bold">VIEW ALL STATUS</Text></Button> */}
            </Flex>

        </Flex>

        <Footer />
      </Flex>
    );
  };
  
  export default TutorHome;
  