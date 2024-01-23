import React from "react";
import { Box,Flex,Link,Text,Image,Button,Stack,Center,Icon } from "@chakra-ui/react";
import {Link as RouterLink, BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { FaQuestionCircle, FaBook, FaCog, FaUser, FaChartBar, FaRegLightbulb, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Header = () => {

  return (
    <Flex p={4} align="center" justify="space-between" bg="#0C2340">
        <Flex align="center" justify="space-between" gap={10} p={1}>
            <Link as={RouterLink} to="/">
                <Image src="../../../assets/efrei.png" alt="icon" boxSize="100px" />
            </Link>
            <Text fontWeight="bold" fontSize="2xl" color="white">InternshipSystem</Text>
        </Flex>

        <Flex align="center" gap={10} mr={4}>
            <Link as={RouterLink} to="/questionnaire">
              <Flex align="center">
                <Icon as={FaBook} boxSize={6} mr={2} color="white" />
                <Text fontWeight="bold" fontSize="xl" color="white">Questionnaire</Text>
              </Flex>
            </Link>
            <Link as={RouterLink} to="/references">
              <Flex align="center">
                <Icon as={FaChartBar} boxSize={6} mr={2} color="white" />
                <Text fontWeight="bold" fontSize="xl" color="white">Références</Text>
              </Flex>
            </Link>
            <Link as={RouterLink} to="/actions">
              <Flex align="center">
                <Icon as={FaRegLightbulb} boxSize={6} mr={2} color="white" />
                <Text fontWeight="bold" fontSize="xl" color="white">Actions</Text>
              </Flex>
            </Link>
            <Link as={RouterLink} to="/profil">
              <Flex align="center">
                <Icon as={FaUser} boxSize={6} mr={2} color="white" />
                <Text fontWeight="bold" fontSize="xl" color="white">Profil</Text>
              </Flex>
            </Link>
        </Flex>
    </Flex>

  );
};

export default Header;