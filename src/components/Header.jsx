import { Button, HStack, baseTheme } from '@chakra-ui/react'
import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'; 



const Header = () => {
  const location = useLocation();
  const { id } = useParams();
  return (
    <>
    
    <HStack p={3} backgroundColor={'black'} shadow={baseTheme}>
<Button variant={'unstyled'} ml={20} color={location.pathname==="/" ? '#13F4EF' :'white'}><Link to="/" >Home</Link></Button>
<Button variant={'unstyled'} ml={20}  color={location.pathname==="/coins" ? '#13F4EF' :'white'}><Link to="/coins" >Coins</Link></Button>
<Button variant={'unstyled'}  ml={20} color={location.pathname==="/exchanges" ? '#13F4EF' :'white'}><Link to="/exchanges" >Exchange</Link></Button>


<Button variant={'unstyled'} ml={20} color={location.pathname.startsWith('/coins/') ? '#13F4EF' : 'white'}>
        <Link to={`/coins/${id}`}>Coindetails</Link>
      </Button>


    </HStack>
    
    </>
     
      
    
  )
}

export default Header
