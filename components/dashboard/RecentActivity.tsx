'use client';

import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Icon,
  useColorModeValue,
  Badge,
  Divider,
} from '@chakra-ui/react';
import {
  MessageSquare,
  DollarSign,
  FolderOpen,
  Star,
  Clock,
  CheckCircle,
} from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'payment',
    title: 'Payment received',
    description: '$3,500 from TechStore Inc.',
    time: '2 hours ago',
    icon: DollarSign,
    color: 'green',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 2,
    type: 'message',
    title: 'New message',
    description: 'Emma from StartupX sent you a message',
    time: '4 hours ago',
    icon: MessageSquare,
    color: 'blue',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 3,
    type: 'project',
    title: 'Project completed',
    description: 'Brand Identity Package delivered',
    time: '1 day ago',
    icon: CheckCircle,
    color: 'green',
    avatar: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 4,
    type: 'review',
    title: 'New review received',
    description: '5-star review from Michael Chen',
    time: '2 days ago',
    icon: Star,
    color: 'orange',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 5,
    type: 'project',
    title: 'New project inquiry',
    description: 'Digital Agency wants to discuss a project',
    time: '3 days ago',
    icon: FolderOpen,
    color: 'purple',
    avatar: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export default function RecentActivity() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
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
          Recent Activity
        </Text>
        <Badge colorScheme="gray" borderRadius="md">
          Last 7 days
        </Badge>
      </HStack>

      <VStack spacing={0} align="stretch">
        {activities.map((activity, index) => (
          <Box key={activity.id}>
            <HStack spacing={4} py={4}>
              <Box position="relative">
                <Avatar size="sm" src={activity.avatar} />
                <Box
                  position="absolute"
                  bottom="-2px"
                  right="-2px"
                  bg={`${activity.color}.500`}
                  borderRadius="full"
                  p={1}
                  border="2px"
                  borderColor={cardBg}
                >
                  <Icon as={activity.icon} boxSize={3} color="white" />
                </Box>
              </Box>
              
              <VStack align="start" spacing={1} flex={1}>
                <Text fontWeight="semibold" fontSize="sm">
                  {activity.title}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {activity.description}
                </Text>
              </VStack>
              
              <HStack>
                <Icon as={Clock} boxSize={3} color="gray.400" />
                <Text fontSize="xs" color="gray.400">
                  {activity.time}
                </Text>
              </HStack>
            </HStack>
            {index < activities.length - 1 && <Divider />}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}