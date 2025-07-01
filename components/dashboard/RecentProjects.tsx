'use client';

import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  Progress,
  Avatar,
  Button,
  useColorModeValue,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { Calendar, DollarSign, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website Redesign',
    client: 'TechStore Inc.',
    clientAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'In Progress',
    progress: 75,
    deadline: 'Dec 15, 2024',
    budget: '$3,500',
    statusColor: 'blue',
  },
  {
    id: 2,
    title: 'Mobile App UI Design',
    client: 'StartupX',
    clientAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'Review',
    progress: 95,
    deadline: 'Dec 10, 2024',
    budget: '$2,800',
    statusColor: 'orange',
  },
  {
    id: 3,
    title: 'Brand Identity Package',
    client: 'GreenEarth Co.',
    clientAvatar: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'Completed',
    progress: 100,
    deadline: 'Dec 5, 2024',
    budget: '$1,200',
    statusColor: 'green',
  },
  {
    id: 4,
    title: 'Website Landing Page',
    client: 'Digital Agency',
    clientAvatar: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'Planning',
    progress: 20,
    deadline: 'Jan 15, 2025',
    budget: '$1,800',
    statusColor: 'gray',
  },
];

export default function RecentProjects() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box>
      <HStack justify="space-between" mb={6}>
        <Text fontSize="xl" fontWeight="bold">
          Recent Projects
        </Text>
        <Button variant="ghost" size="sm" rightIcon={<ExternalLink size={16} />}>
          View All
        </Button>
      </HStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
        {projects.map((project) => (
          <Box
            key={project.id}
            p={6}
            bg={cardBg}
            borderRadius="xl"
            border="1px"
            borderColor={borderColor}
            shadow="sm"
            _hover={{ shadow: 'md' }}
            transition="all 0.2s"
          >
            <VStack align="stretch" spacing={4}>
              {/* Header */}
              <HStack justify="space-between">
                <VStack align="start" spacing={1} flex={1}>
                  <Text fontWeight="bold" fontSize="lg" noOfLines={1}>
                    {project.title}
                  </Text>
                  <HStack>
                    <Avatar size="xs" src={project.clientAvatar} />
                    <Text fontSize="sm" color="gray.500">
                      {project.client}
                    </Text>
                  </HStack>
                </VStack>
                <Badge colorScheme={project.statusColor} borderRadius="md">
                  {project.status}
                </Badge>
              </HStack>

              {/* Progress */}
              <Box>
                <HStack justify="space-between" mb={2}>
                  <Text fontSize="sm" color="gray.500">
                    Progress
                  </Text>
                  <Text fontSize="sm" fontWeight="medium">
                    {project.progress}%
                  </Text>
                </HStack>
                <Progress
                  value={project.progress}
                  colorScheme={project.statusColor}
                  borderRadius="full"
                  size="sm"
                />
              </Box>

              {/* Details */}
              <HStack justify="space-between" fontSize="sm">
                <HStack color="gray.500">
                  <Icon as={Calendar} boxSize={4} />
                  <Text>{project.deadline}</Text>
                </HStack>
                <HStack color="green.500" fontWeight="medium">
                  <Icon as={DollarSign} boxSize={4} />
                  <Text>{project.budget}</Text>
                </HStack>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}