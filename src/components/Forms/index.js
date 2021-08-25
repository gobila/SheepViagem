import React, { useState } from 'react';
import styled,{css} from 'styled-components';
import { Box } from '../Box';
import {Button} from '../Button';
import Text from '../Text';

const Input = styled(Text)`
  width: 100%;
  padding: 12px 16px;
  outline: 0;
  border-radius: 10px;
  border: 1px solid #35B6FF;
`;
const Label = styled(Box)`
    display:flex;
    margin:0px;
    padding:0px;
    border-radius: 0;
    flex-direction:column;
    align-items: center;
    Input{
        opacity: 0;
        position:absolute;
        vertical-align: middle;
        width:50px;
        height:50px;
        margin:auto;
        cursor: pointer;
        }
    Input+img{
        cursor: pointer;
        /* border-color:red; */
    }
    Input:checked + div{ /* (RADIO CHECKED) IMAGE STYLES */
        text-align:center;
        width:100%;
        background-color:rgba(53 182 255 / 50%);
    }
`;

function FormContainer(){
    const [pagStyle, setPagStyle]= useState()
    function clicked(event){
        const option = event.target.id
        console.log(pagStyle)
    }
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
                <Box
                width='80%'>
                    <Text tag='h3' variant='SectionTitle'>Como será o pagamento</Text>
                    <Box
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        margin='auto'
                        width='100%'
                    >
                        <Label id='transferecia'>
                            <Input
                                tag='input'
                                type="radio"
                                id='transferecia'
                                name='pagamento'
                                onClick={clicked}
                                />
                                <Box 
                                    display='flex' 
                                    flexDirection='column'
                                    alignItems='center'
                                >
                                    <img src='assets/transferencia.png' style={{width:'50px'}}/>
                                    <Text tag='h4'>Transferêcia</Text>
                                </Box>
                        </Label>
                        <Label id='cartao'>
                            <Input
                                tag='input'
                                type="radio"
                                id='cartao'
                                name='pagamento'
                                onClick={clicked}
                            />
                            <Box 
                            display='flex' 
                            flexDirection='column'
                            alignItems='center'
                            >
                                <img src="assets/cartao.png" />
                                <Text tag='h4'>Cartão</Text>
                            </Box>
                        </Label>
                        <Label id='paypal'>
                            <Input
                                tag='input'
                                type="radio"
                                id='paypal'
                                name='pagamento'
                                onClick={clicked}
                                />
                            <Box 
                                display='flex' 
                                flexDirection='column'
                                alignItems='center'
                                >
                                <img src="assets/paypal.png" />
                                <Text tag='h4'>PayPal</Text>
                            </Box>
                        </Label>
                    </Box>
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
                <Button>Enviar</Button>
            </Box>
        </form >
    )
};

export function FormContact(){
    return(
            <FormContainer/>
    )
}