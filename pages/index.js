import {Box} from '../src/components/Box';
import { FormContact } from '../src/components/Forms';
import Text from '../src/components/Text';

export default function Home() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      margin='50px auto 50px auto'
      
    >
      <Text tag='h1' variant="title">
        Sheep Viagens
      </Text>
        <FormContact/>
    </Box>
  )
}
