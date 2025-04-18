import { Box, HStack } from '@chakra-ui/react'
import SideNavWrapper from './SideNavWrapper'


const WithSidebarWrapper = ({ children, sidebarContent }) => {
  return (
    <HStack alignItems='flex-start'>
      <SideNavWrapper>{sidebarContent}</SideNavWrapper>
      <Box as='main' flexGrow={1} alignItems='flex-start'>
        {children}
      </Box>
    </HStack>
  )
}

export default WithSidebarWrapper
