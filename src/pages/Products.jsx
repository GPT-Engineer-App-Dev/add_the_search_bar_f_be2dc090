import { Box, Button, Container, Flex, Heading, Input, InputGroup, InputLeftElement, List, ListItem, Text, Icon, useToast } from "@chakra-ui/react";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import Navigation from "../components/Navigation";

const Products = () => {
  // Dummy data to simulate API response
  const products = [
    {
      id: "1",
      name: "Espresso",
      description: "Rich and aromatic coffee",
      price: "2.50",
    },
    {
      id: "2",
      name: "Cappuccino",
      description: "Creamy coffee with milk foam",
      price: "3.00",
    },
    {
      id: "3",
      name: "Latte",
      description: "Soft and milky coffee",
      price: "3.50",
    },
  ];

  const toast = useToast();

  const deleteProduct = (productId) => {
    // Here you would normally make an API DELETE request to remove a product
    // For now, let's just show a toast notification
    toast({
      title: "Product Deleted",
      description: `Product with ID ${productId} has been deleted.`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex h="100vh">
      <Navigation />
      <Container maxW="container.xl" p={4}>
        <Heading as="h1" size="lg" mb={4}>
          Products
        </Heading>
        <Flex justifyContent="space-between" mb={4}>
          <Button leftIcon={<FaPlus />} colorScheme="blue">
            Crea nuovo prodotto
          </Button>
          <InputGroup w="300px">
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input placeholder="Cerca prodotto" />
          </InputGroup>
        </Flex>
        <List spacing={3}>
          {products.map((product) => (
            <ListItem key={product.id} p={3} bg="gray.100" d="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Text fontWeight="semibold">{product.name}</Text>
                <Text fontSize="sm">{product.description}</Text>
                <Text fontSize="sm" color="gray.600">
                  {product.price} EUR
                </Text>
              </Box>
              <Button size="sm" colorScheme="red" onClick={() => deleteProduct(product.id)}>
                <Icon as={FaTrash} />
              </Button>
            </ListItem>
          ))}
        </List>
      </Container>
    </Flex>
  );
};

export default Products;
