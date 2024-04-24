import React from "react";
import { Box, VStack, Button, Icon } from "@chakra-ui/react"; // Import Icon from Chakra UI
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

import { FaHome, FaClipboardList, FaCoffee, FaUtensils, FaPlus } from 'react-icons/fa';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Box w="200px" bg="gray.400" color="white" p={4}>
      <VStack align="stretch" spacing={4}>
        <Button variant="ghost" leftIcon={<Icon as={FaHome} />} onClick={() => navigate("/")}>
          Menus
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaClipboardList} />} onClick={() => navigate("/products")}>
          Products
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaCoffee} />} onClick={() => navigate("/modifiers")}>
          Modifiers
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaUtensils} />} onClick={() => navigate("/allergens")}>
          Allergens
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaPlus} />} onClick={() => navigate("/create-allergen")}>
          Create Allergen
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaPlus} />} onClick={() => navigate("/create-modifier")}>
          Create Modifier
        </Button>
      </VStack>
    </Box>
  );
}

export default Navigation; // Don't forget to export the component
