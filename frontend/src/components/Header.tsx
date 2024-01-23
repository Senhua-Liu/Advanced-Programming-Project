import React from "react";
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import {Link as RouterLink, BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { FaQuestionCircle, FaBook, FaCog, FaUser, FaChartBar, FaRegLightbulb, FaUserPlus, FaSignInAlt, FaFileUpload, FaHandshake, FaClipboardList, FaCheckCircle } from "react-icons/fa";

const Header = () => {

  return (
    <Flex p={4} align="center" justify="space-between" bg="#0C2340">
        <Flex align="center" justify="space-between" gap={10} p={1}>
            <Link as={RouterLink} to="/">
                <Image src="../../../assets/efrei.png" alt="icon" width="300px" />
            </Link>
            {/* <Text fontWeight="bold" fontSize="2xl" color="white">InternshipSystem</Text> */}
        </Flex>

        <Flex align="center" gap={10} mr={4}>
            <Link as={RouterLink} to="/questionnaire">
              <Flex align="center">
                <Icon as={FaFileUpload} boxSize={6} mr={2} color="white" />
                <Text fontWeight="bold" fontSize="xl" color="white">Upload files</Text>
              </Flex>
            </Link>
            <Link as={RouterLink} to="/references">
              <Flex align="center">
                <Icon as={FaHandshake} boxSize={6} mr={2} color="white" />
                <Text fontWeight="bold" fontSize="xl" color="white">Meeting</Text>
              </Flex>
            </Link>
            <Link as={RouterLink} to="/actions">
              <Flex align="center">
                <Icon as={FaClipboardList} boxSize={6} mr={2} color="white" />
                <Text fontWeight="bold" fontSize="xl" color="white">Evaluation Form</Text>
              </Flex>
            </Link>
            <Link as={RouterLink} to="/profil">
              <Flex align="center">
                <Icon as={FaCheckCircle} boxSize={6} mr={2} color="white" />
                <Text fontWeight="bold" fontSize="xl" color="white">Report Validation</Text>
              </Flex>
            </Link>
        </Flex>
    </Flex>

  );
};

export default Header;