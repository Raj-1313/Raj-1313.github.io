
import { Box, Text } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

export default function Type(){
    return (
        <Text fontSize={{base:'md',sm:'md',md:'md',lg:'2xl'}}  className='yellowText1'>
        <Typewriter 
        options={{
            strings:[ 'Full Stack web Developer....','Creative....'],
            autoStart: true,
            loop: true,
            deleteSpeed: 60,
        }}
        /></Text>
    )
}
export  function TypeDot(){
    return (
        <Text fontSize={{base:'sm',sm:'sm',md:'md',lg:'xg'}}   ml='5px'>

        <Typewriter 
        options={{
            strings:[ '. . . .','. . .'],
            autoStart: true,
            loop: true,
            
        }}
        
        />
        </Text>
        
    )
}