import React from "react";
import { Flex, Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const CreateAllergen = () => {
  const navigate = useNavigate();

  return (
    <Flex h="100vh">
      <Navigation />
      <VStack flex="1" p={4} align="start">
        <Button mb={4} onClick={() => navigate(-1)}>
          Back
        </Button>
        <VStack spacing={4} align="start">
          <FormControl id="allergen-code">
            <FormLabel>Codice (Code)</FormLabel>
            <Input type="text" placeholder="Codice" />
          </FormControl>
          <FormControl id="allergen-name-en">
            <FormLabel>Name (EN)</FormLabel>
            <Input type="text" placeholder="Name (EN)" />
          </FormControl>
          <FormControl id="allergen-name-it">
            <FormLabel>Name (IT)</FormLabel>
            <Input type="text" placeholder="Nome (IT)" />
          </FormControl>
          <FormControl id="allergen-name-fr">
            <FormLabel>Name (FR)</FormLabel>
            <Input type="text" placeholder="Nom (FR)" />
          </FormControl>
          <Button colorScheme="blue">Submit</Button>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default CreateAllergen;
