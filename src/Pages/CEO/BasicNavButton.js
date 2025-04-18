import { Button } from '@chakra-ui/react'

const BasicNavButton = (props) => (
  <Button {...props} variant='ghost' color='v6' width={'100%'} justifyContent='flex-start'>
    {props.children}
  </Button>
)

export default BasicNavButton
