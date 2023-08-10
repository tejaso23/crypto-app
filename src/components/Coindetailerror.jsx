import { Alert, Heading,AlertIcon } from '@chakra-ui/react'
import React from 'react'

const Coindetailerror = ({message}) => {
  return (<>
  <Alert bgColor={"black"} borderWidth={8} borderRadius={5}  borderColor={"#00FFFF"} status='error'position={"fixed"} bottom={"4"} left={"50%"} transform={"translateX(-50%)"} w={"container.lg"}>
  <Heading color={"white"}>Error Component</Heading>
  <AlertIcon marginInline={"10"} width={"40%"}>{message}</AlertIcon>
 
  </Alert>
  
  
  </>
    
    
  )
}

export default Coindetailerror
