import styled from 'styled-components';
import {Box} from '../src/components/Box';
import { FormContact } from '../src/components/Forms';
import Text from '../src/components/Text';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Box>
      <Text tag='h1'>
        Sheep Viagens
      </Text>
      <Box>
        <FormContact/>
      </Box>
    </Box>
  )
}
