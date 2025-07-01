'use client';

import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Icon,
  Button,
  useColorModeValue,
  Badge,
  Flex,
} from '@chakra-ui/react';
import { Star, MessageSquare, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    client: 'Michael Chen',
    company: 'TechVision Inc.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    review: 'Sarah delivered exceptional work on our website redesign. Her attention to detail and creative vision exceeded our expectations.',
    project: 'Website Redesign',
    date: '2 days ago',
  },
  {
    id: 2,
    client: 'Emma Rodriguez',
    company: 'StartupLab',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    review: 'Outstanding mobile app design! Sarah understood our vision perfectly and delivered pixel-perfect designs on time.',
    project: 'Mobile App UI',
    date: '1 week ago',
  },
  {
    id: 3,
    client: 'David Wilson',
    company: 'GreenTech Solutions',
    avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    review: "The brand identity package was exactly what we needed. Sarah's creativity and professionalism made the entire process smooth.",
    project: 'Brand Identity',
    date: '2 weeks ago',
  },
  {
    id: 4,
    client: 'Lisa Thompson',
    company: 'Digital Marketing Pro',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4,
    review: 'Great work on the landing page design. Quick turnaround and excellent communication throughout the project.',
    project: 'Landing Page',
    date: '3 weeks ago',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <HStack spacing={1}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          as={Star}
          boxSize={4}
          fill={star <= rating ? 'orange.400' : 'none'}
          color={star <= rating ? 'orange.400' : 'gray.300'}
        />
      ))}
    </HStack>
  );
};

export default function ClientFeedback() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box>
      <HStack justify="space-between" mb={6}>
        <Text fontSize="xl" fontWeight="bold">
          Client Feedback
        </Text>
        <Button variant="ghost" size="sm" rightIcon={<ExternalLink size={16} />}>
          View All Reviews
        </Button>
      </HStack>

      <VStack spacing={6} align="stretch">
        {testimonials.map((testimonial) => (
          <Box
            key={testimonial.id}
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
              <Flex justify="space-between" align="start">
                <HStack spacing={3}>
                  <Avatar size="md" src={testimonial.avatar} />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">{testimonial.client}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonial.company}
                    </Text>
                    <StarRating rating={testimonial.rating} />
                  </VStack>
                </HStack>
                <VStack align="end" spacing={1}>
                  <Badge colorScheme="blue" borderRadius="md">
                    {testimonial.project}
                  </Badge>
                  <Text fontSize="sm" color="gray.500">
                    {testimonial.date}
                  </Text>
                </VStack>
              </Flex>

              {/* Review */}
              <Text color="gray.600" lineHeight="tall">
                "{testimonial.review}"
              </Text>

              {/* Actions */}
              <HStack spacing={3}>
                <Button
                  size="sm"
                  variant="ghost"
                  leftIcon={<Icon as={MessageSquare} boxSize={4} />}
                >
                  Reply
                </Button>
              </HStack>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}