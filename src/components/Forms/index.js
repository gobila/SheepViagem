import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import Text from '../Text';

const Input = styled(Text)`
  width: 100%;
  padding: 12px 16px;
  outline: 0;
  border-radius: 10px;
  border: 1px solid #35B6FF;

`;
function FormContainer(){
    return(
        <form>
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                margin='auto'
                width='80%'>
                {/* Dados de viagem */}
                <Box 
                width='80%'>
                    <Text tag='h3' variant='SectionTitle'>Quando será sua viagem?</Text>
                    {/* Datas */}
                    <Text tag='label'>Data de Saída</Text>
                    <Input
                        tag='input'
                        type="date"
                        placeholder='Data de Saída'
                        name='saida'
                    />
                    <Text tag='label'>Data de retrono</Text>
                    <Input
                        tag='input'
                        type="date"
                        placeholder='Data de retrono'
                        name='retrono'
                    />
                    {/* Local */}
                    <Text tag='label'>Local de origem</Text>
                    <Input
                        tag='input'
                        type="text"
                        placeholder='Local de origem'
                        name='origem'
                        />
                    <Text tag='label'>Local de destino</Text>
                    <Input
                        tag='input'
                        type="text"
                        placeholder='Local de destinoome'
                        name='destino'
                        />
                </Box>
                {/* Pagamento */}
                    <Text tag='h3' variant='SectionTitle'>Como será o pagamento</Text>
                <Box
                width='80%'>
                    <Input
                        tag='input'
                        type="text"
                        placeholder='Como será o pagamento'
                        name='pagamento'
                    />
                </Box>
                    {/* dados pessoais */}
                <Box
                width='80%'>
                    <Text tag='h3' variant='SectionTitle'>Quem vai viajar?</Text>
                    <Text tag='label'>Nome</Text>
                    <Input
                        tag='input'
                        type="text"
                        placeholder='Nome'
                        name='name'
                        />
                    <Text tag='label'>Sobrenome</Text>
                    <Input
                        tag='input'
                        type="text"
                        placeholder='Sobrenome'
                        name='Sobrenome'
                        />
                    <Text tag='label'>País de residêcia</Text>
                    <Input
                        tag='input'
                        type="text"
                        placeholder='País de residêcia'
                        name='residecia'
                        />
                    <Text tag='label'>Data de nascimento</Text>
                    <Input
                        tag='input'
                        type="data"
                        placeholder='Data de nascimento'
                        name='nascimento'
                        />
                    <Text tag='label'>C.P.F.</Text>
                    <Input
                        tag='input'
                        type="number"
                        placeholder='000.000.000-00'
                        name='cpf'
                        />
                    <Text tag='label'>E-mail</Text>
                    <Input
                        tag='input'
                        type="email"
                        placeholder='E-mail'
                        name='email'
                        />
                    <Text tag='label'>Telefone</Text>
                    <Input
                        tag='input'
                        type="fone"
                        placeholder='Telefone'
                        name='telfone'
                    />
                </Box>
                <button>Enviar</button>
            </Box>
        </form >
    )
};

export function FormContact(){
    return(
            <FormContainer/>
    )
}