import React, { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Input, VStack, Select, Checkbox, Table, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

const CreateModifier = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);

  const addOption = () => {
    setOptions([
      ...options,
      {
        name: "",
        nameEN: "",
        nameFR: "",
        price: "",
      },
    ]);
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  return (
    <Flex h="100vh">
      <Navigation />
      <Box flex="1" p={4}>
        <Button mb={4} onClick={() => navigate(-1)}>
          Back
        </Button>
        <VStack spacing={4}>
          <FormControl id="modifier-name">
            <FormLabel>Nome (Name Modifier)</FormLabel>
            <Input type="text" placeholder="Nome" />
            <Input type="text" placeholder="Name (EN)" mt={2} />
            <Input type="text" placeholder="Nom (FR)" mt={2} />
          </FormControl>
          <FormControl id="modifier-description">
            <FormLabel>Descrizione (Description Modifier)</FormLabel>
            <Input type="text" placeholder="Descrizione" />
            <Input type="text" placeholder="Description (EN)" mt={2} />
            <Input type="text" placeholder="Description (FR)" mt={2} />
          </FormControl>
          <FormControl id="modifier-selection-type">
            <FormLabel>Tipo di selezione (Type of Selection)</FormLabel>
            <Select placeholder="Selezionare il tipo">
              <option value="single">Selezione singola</option>
              <option value="multiple">Selezione multipla</option>
            </Select>
          </FormControl>
          <Checkbox>Imposta questa lista di opzioni obbligatoria per il cliente</Checkbox>
          <Button leftIcon={<FaPlus />} onClick={addOption}>
            Aggiungi opzione
          </Button>
          <Table variant="simple">
            <Tbody>
              {options.map((option, index) => (
                <Tr key={index}>
                  <Td>
                    <Input
                      type="text"
                      placeholder="Nome"
                      value={option.name}
                      onChange={(e) => {
                        const newOptions = [...options];
                        newOptions[index].name = e.target.value;
                        setOptions(newOptions);
                      }}
                    />
                    <Input
                      type="text"
                      placeholder="Name (EN)"
                      value={option.nameEN}
                      onChange={(e) => {
                        const newOptions = [...options];
                        newOptions[index].nameEN = e.target.value;
                        setOptions(newOptions);
                      }}
                      mt={2}
                    />
                    <Input
                      type="text"
                      placeholder="Nom (FR)"
                      value={option.nameFR}
                      onChange={(e) => {
                        const newOptions = [...options];
                        newOptions[index].nameFR = e.target.value;
                        setOptions(newOptions);
                      }}
                      mt={2}
                    />
                  </Td>
                  <Td>
                    <Input
                      type="text"
                      placeholder="Prezzo"
                      value={option.price}
                      onChange={(e) => {
                        const newOptions = [...options];
                        newOptions[index].price = e.target.value;
                        setOptions(newOptions);
                      }}
                    />
                  </Td>
                  <Td>
                    <IconButton aria-label="Delete option" icon={<FaTrash />} onClick={() => removeOption(index)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>
      </Box>
    </Flex>
  );
};

export default CreateModifier;
