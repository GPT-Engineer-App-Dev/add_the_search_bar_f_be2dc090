import { Box, Button, Container, Flex, Heading, Icon, Input, InputGroup, InputLeftElement, List, ListItem, Text, useToast } from "@chakra-ui/react";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import Navigation from "../components/Navigation";

const Allergens = () => {
  const allergens = [
    {
      id: "1",
      name: "Peanuts",
    },
    {
      id: "2",
      name: "Shellfish",
    },
    {
      id: "3",
      name: "Milk",
    },
  ];

  const toast = useToast();

  const deleteAllergen = (allergenId) => {
    toast({
      title: "Allergen Deleted",
      description: `Allergen with ID ${allergenId} has been deleted.`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex h="100vh">
      <Navigation />
      <Container maxW="container.xl" p={4}>
        <Flex justifyContent="space-between" mb={4}>
          <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={() => navigate("/create-allergen")}>
            Crea nuovo allergene
          </Button>
          <InputGroup w="300px">
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input placeholder="Cerca allergene" />
          </InputGroup>
        </Flex>
        <List spacing={3}>
          {allergens.map((allergen) => (
            <ListItem key={allergen.id} p={3} bg="gray.100" d="flex" justifyContent="space-between" alignItems="center">
              <Text fontWeight="semibold">{allergen.name}</Text>
              <Button size="sm" colorScheme="red" onClick={() => deleteAllergen(allergen.id)}>
                <Icon as={FaTrash} />
              </Button>
            </ListItem>
          ))}
        </List>
      </Container>
    </Flex>
  );
};

export default Allergens;
