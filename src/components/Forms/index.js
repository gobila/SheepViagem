import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import Text from '../Text';

const Input = styled(Text)`
  width: 100%;
  padding: 12px 16px;
  outline: 0;
`;

export function FormContact(){
    return(
        <Box>
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
            {/* Pagamento */}
            <Text tag='label'>Como será o pagamento</Text>
            <Input
                tag='input'
                type="text"
                placeholder='Como será o pagamento'
                name='pagamento'
            />
            {/* dados */}
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
    )
}