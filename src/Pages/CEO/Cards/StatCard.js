import { Heading, HStack, VStack, Text } from "@chakra-ui/react";

const StatCard = ({ heading, value1, value2,subhead1, subhead2, color }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Heading size="sm" marginTop={'0.2vh'} color={color}>
        {heading}
      </Heading>
      <HStack justifyContent='space-between' spacing='0.8vw' marginTop='2vh'>
        <VStack justifyContent={'left'}>
          <Text fontSize="l" marginBottom={'0px'} >{value1}</Text>
          <Text fontSize="xs" color={'#858D9D'}>{subhead1}</Text>
        </VStack>
        {value2 && (
        <VStack justifyContent={'space-around'}>
          <Text fontSize="l" marginBottom={'0px'}>{value2}</Text>
          <Text fontSize="xs" color='#858D9D'>{subhead2}</Text>
        </VStack>
        )}
      </HStack>
    </div>
  );
};

export default StatCard;
