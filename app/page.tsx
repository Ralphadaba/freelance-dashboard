'use client';

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Sidebar from '@/components/layout/Sidebar';
import StatsCards from '@/components/dashboard/StatsCards';
import RecentProjects from '@/components/dashboard/RecentProjects';
import EarningsChart from '@/components/dashboard/EarningsChart';
import ClientFeedback from '@/components/dashboard/ClientFeedback';
import RecentActivity from '@/components/dashboard/RecentActivity';

export default function Dashboard() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Sidebar>
      <Box minH="100vh" bg={bgColor}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box>
            <Heading size="lg" mb={2}>
              Welcome back, Sarah! 👋
            </Heading>
            <Text color="gray.500" fontSize="lg">
              Here's what's happening with your freelance business today.
            </Text>
          </Box>

          {/* Stats Overview */}
          <StatsCards />

          {/* Main Content Grid */}
          <SimpleGrid columns={{ base: 1, xl: 3 }} spacing={8}>
            {/* Left Column - Projects & Feedback */}
            <VStack spacing={8} gridColumn={{ xl: 'span 2' }}>
              <RecentProjects />
              <ClientFeedback />
            </VStack>

            {/* Right Column - Charts & Activity */}
            <VStack spacing={8}>
              <EarningsChart />
              <RecentActivity />
            </VStack>
          </SimpleGrid>
        </VStack>
      </Box>
    </Sidebar>
  );
}