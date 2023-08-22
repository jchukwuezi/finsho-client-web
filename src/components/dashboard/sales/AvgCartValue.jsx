//mockdata now, need to change
import React from 'react'
import {
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    Box
} from "@chakra-ui/react";

const AvgCartValue = () => {
    const avgCartValue = 23.42;
    const title = "Average Cart Value"
    return (
    <Box minH='83px' border='1px' borderRadius='10px' color='gray.500' padding='1rem'>
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
                            {avgCartValue}
                        </StatNumber>
                    </Flex>
                </Stat>
            </Flex>
        </Box>
    </Box>
  )
}

export default AvgCartValue