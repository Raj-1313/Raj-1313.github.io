import { Box ,Text} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
export default function Type(){
    return (
        <Box    h='30px' color='#fb982f' fontSize={{base:'md',sm:'md',md:'md',lg:'2xl'}}>
        <Typewriter 
        options={{
            strings:[ 'Full Stack web Developer....','Creative....'],
            autoStart: true,
            loop: true,
            deleteSpeed: 70,   
            
        }}
        />
        </Box>
    )
}
export  function TypeDot(){
    return (
        <Text fontSize={{base:'sm',sm:'md',md:'2xl',lg:'3xl'}}   ml='5px'>
        <Typewriter 
        options={{
            strings:[ '. . .','. .','. . . . .'],
            autoStart: true,
            loop: true,
            cursor:" ."
        }}
        
        />
        </Text>
        
    )
}