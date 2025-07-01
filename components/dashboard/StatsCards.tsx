'use client';

import {
  SimpleGrid,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Icon,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { DollarSign, FolderOpen, Users, TrendingUp } from 'lucide-react';

const statsData = [
  {
    label: 'Total Earnings',
    value: '$12,450',
    change: 12.5,
    icon: DollarSign,
    color: 'green',
  },
  {
    label: 'Active Projects',
    value: '8',
    change: 25,
    icon: FolderOpen,
    color: 'blue',
  },
  {
    label: 'Total Clients',
    value: '24',
    change: 8.3,
    icon: Users,
    color: 'purple',
  },
  {
    label: 'Success Rate',
    value: '98%',
    change: 2.1,
    icon: TrendingUp,
    color: 'teal',
  },
];

export default function StatsCards() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
      {statsData.map((stat, index) => (
        <Box
          key={index}
          p={6}
          bg={cardBg}
          borderRadius="xl"
          border="1px"
          borderColor={borderColor}
          shadow="sm"
          _hover={{ shadow: 'md' }}
          transition="all 0.2s"
        >
          <Stat>
            <HStack justify="space-between" mb={2}>
              <StatLabel color="gray.500" fontSize="sm" fontWeight="medium">
                {stat.label}
              </StatLabel>
              <Icon
                as={stat.icon}
                boxSize={5}
                color={`${stat.color}.500`}
              />
            </HStack>
            <StatNumber fontSize="2xl" fontWeight="bold" mb={1}>
              {stat.value}
            </StatNumber>
            <StatHelpText mb={0}>
              <StatArrow type="increase" />
              {stat.change}% from last month
            </StatHelpText>
          </Stat>
        </Box>
      ))}
    </SimpleGrid>
  );
}