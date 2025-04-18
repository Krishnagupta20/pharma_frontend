import { Box, VStack, Button } from '@chakra-ui/react'
import BasicNavButton from '../BasicNavButton.js'
import { FaHouse } from "react-icons/fa6";
import { MdTrolley } from "react-icons/md";
import { TbListCheck } from "react-icons/tb";

const SideNavContent = ({ stage, setStage }) => {
  const handleLogout = () => {
    window.location.href = '/login';
  }
  return (
    <>
      <BasicNavButton
        leftIcon={<Box as={FaHouse} w={6} h={6} />}
        onClick={() => setStage(0)}
        isActive={stage === 0}
      >
        Dashboard
      </BasicNavButton>
      <BasicNavButton
        leftIcon={<Box as={TbListCheck} w={6} h={6} />}
        onClick={() => setStage(1)}
        isActive={stage === 1}
      >
        Manage Stores
      </BasicNavButton>
      <VStack flexGrow={1} justifyContent='flex-end' w='100%' alignItems='stretch'>
        <Button variant='outline' color='v6' borderColor='v6' onClick={handleLogout}>
          Logout
        </Button>
      </VStack>
    </>
  )
}

export default SideNavContent
