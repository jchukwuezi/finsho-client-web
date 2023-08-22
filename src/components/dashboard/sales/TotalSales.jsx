import React from 'react'
import {
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    Box
} from "@chakra-ui/react";


const TotalSales = () => {
  const title = "Total Sales"
  const totalSales = 4300.57
  return (
    <Box  minH='83px' border='1px' borderRadius='10px' color='gray.500' padding='1rem'>
        <Box>
            <Flex flexDirection='row' align='center' justify='center' w='100%'>
                <Stat me='auto'>
                    <StatLabel
                    fontSize='sm'
                    color='gray.400'
                    fontWeight='bold'
                    pb='.1rem'>
                    {title}
                    </StatLabel>
                    <Flex>
                        <StatNumber fontSize='lg'>
                            €{totalSales}
                        </StatNumber>
                    </Flex>
                </Stat>
            </Flex>
        </Box>
    </Box>
  )
}

export default TotalSales