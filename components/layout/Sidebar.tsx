'use client';

import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  Avatar,
  Divider,
  useColorModeValue,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  Home,
  FolderOpen,
  MessageSquare,
  DollarSign,
  User,
  Settings,
  Bell,
  Menu,
  Star,
  TrendingUp,
} from 'lucide-react';
import { ReactNode } from 'react';

interface SidebarProps {
  children: ReactNode;
}

interface NavItemProps {
  icon: any;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, isActive = false, onClick }: NavItemProps) => {
  const bg = useColorModeValue(
    isActive ? 'brand.50' : 'transparent',
    isActive ? 'brand.900' : 'transparent'
  );
  const color = useColorModeValue(
    isActive ? 'brand.600' : 'gray.600',
    isActive ? 'brand.200' : 'gray.400'
  );

  return (
    <Button
      variant="ghost"
      justifyContent="flex-start"
      w="full"
      bg={bg}
      color={color}
      _hover={{
        bg: useColorModeValue('brand.50', 'brand.900'),
        color: useColorModeValue('brand.600', 'brand.200'),
      }}
      leftIcon={<Icon as={icon} boxSize={5} />}
      onClick={onClick}
      fontWeight={isActive ? 'semibold' : 'medium'}
    >
      {label}
    </Button>
  );
};

const SidebarContent = () => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bgColor}
      borderRight="1px"
      borderRightColor={borderColor}
      w="280px"
      h="full"
      p={6}
    >
      <VStack spacing={6} align="stretch">
        {/* Profile Section */}
        <Box>
          <HStack spacing={3} mb={4}>
            <Avatar
              size="md"
              name="Sarah Johnson"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
            />
            <Box>
              <Text fontWeight="bold" fontSize="lg">
                Sarah Johnson
              </Text>
              <Text fontSize="sm" color="gray.500">
                UI/UX Designer
              </Text>
            </Box>
          </HStack>
          <HStack spacing={4} fontSize="sm" color="gray.600">
            <HStack>
              <Icon as={Star} boxSize={4} color="orange.400" />
              <Text>4.9</Text>
            </HStack>
            <HStack>
              <Icon as={TrendingUp} boxSize={4} color="green.400" />
              <Text>98% Success</Text>
            </HStack>
          </HStack>
        </Box>

        <Divider />

        {/* Navigation */}
        <VStack spacing={2} align="stretch">
          <NavItem icon={Home} label="Dashboard" isActive />
          <NavItem icon={FolderOpen} label="Projects" />
          <NavItem icon={MessageSquare} label="Messages" />
          <NavItem icon={DollarSign} label="Earnings" />
          <NavItem icon={User} label="Profile" />
          <NavItem icon={Bell} label="Notifications" />
          <NavItem icon={Settings} label="Settings" />
        </VStack>
      </VStack>
    </Box>
  );
};

export default function Sidebar({ children }: SidebarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      {/* Mobile menu button */}
      {isMobile && (
        <Box
          position="fixed"
          top={4}
          left={4}
          zIndex={20}
          bg={useColorModeValue('white', 'gray.800')}
          borderRadius="md"
          shadow="md"
        >
          <IconButton
            aria-label="Open menu"
            icon={<Menu />}
            onClick={onOpen}
            variant="ghost"
          />
        </Box>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <Box position="fixed" left={0} top={0} h="full" zIndex={10}>
          <SidebarContent />
        </Box>
      )}

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody p={0}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Box ml={isMobile ? 0 : '280px'} p={isMobile ? 4 : 8} pt={isMobile ? 16 : 8}>
        {children}
      </Box>
    </Box>
  );
}