import { VStack } from '@chakra-ui/react'

export const SIDE_NAV_WIDTH = 80

const SideNavWrapper = ({ children }) => {
  const topNavHeight = document.getElementById('top-nav')?.clientHeight
  console.log(topNavHeight)

  return (
    <VStack
      flexShrink={0}
      w={SIDE_NAV_WIDTH}
      borderRight='2px solid #F1EEF5'
      height={`calc(60vh)`}
      alignItems='flex-start'
      px={2}
      py={10}
      id='side-nav'
      pos='sticky'
      left={0}
      bg='white'
      zIndex='docked'
    >
      {children}
    </VStack>
  )
}

export default SideNavWrapper
