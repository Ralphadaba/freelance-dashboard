'use client';

import {
  Box,
  Text,
  useColorModeValue,
  HStack,
  Badge,
  VStack,
} from '@chakra-ui/react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';

const earningsData = [
  { month: 'Jan', earnings: 2400, projects: 3 },
  { month: 'Feb', earnings: 1800, projects: 2 },
  { month: 'Mar', earnings: 3200, projects: 4 },
  { month: 'Apr', earnings: 2800, projects: 3 },
  { month: 'May', earnings: 3800, projects: 5 },
  { month: 'Jun', earnings: 4200, projects: 6 },
  { month: 'Jul', earnings: 3600, projects: 4 },
  { month: 'Aug', earnings: 4800, projects: 7 },
  { month: 'Sep', earnings: 4200, projects: 5 },
  { month: 'Oct', earnings: 5200, projects: 8 },
  { month: 'Nov', earnings: 4600, projects: 6 },
  { month: 'Dec', earnings: 5800, projects: 9 },
];

export default function EarningsChart() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <VStack spacing={6} align="stretch">
      {/* Earnings Overview */}
      <Box
        p={6}
        bg={cardBg}
        borderRadius="xl"
        border="1px"
        borderColor={borderColor}
        shadow="sm"
      >
        <HStack justify="space-between" mb={6}>
          <Text fontSize="xl" fontWeight="bold">
            Earnings Overview
          </Text>
          <Badge colorScheme="green" borderRadius="md" px={3} py={1}>
            +18% This Year
          </Badge>
        </HStack>

        <Box h="300px">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" stroke={textColor} opacity={0.3} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: textColor, fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: textColor, fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
                formatter={(value) => [`$${value}`, 'Earnings']}
              />
              <Area
                type="monotone"
                dataKey="earnings"
                stroke="#3182CE"
                strokeWidth={2}
                fill="url(#earningsGradient)"
              />
              <defs>
                <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3182CE" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3182CE" stopOpacity={0.1} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {/* Project Distribution */}
      <Box
        p={6}
        bg={cardBg}
        borderRadius="xl"
        border="1px"
        borderColor={borderColor}
        shadow="sm"
      >
        <HStack justify="space-between" mb={6}>
          <Text fontSize="xl" fontWeight="bold">
            Monthly Projects
          </Text>
          <Badge colorScheme="blue" borderRadius="md" px={3} py={1}>
            60 Total Projects
          </Badge>
        </HStack>

        <Box h="250px">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" stroke={textColor} opacity={0.3} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: textColor, fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: textColor, fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
                formatter={(value) => [`${value}`, 'Projects']}
              />
              <Bar
                dataKey="projects"
                fill="#38B2AC"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </VStack>
  );
}