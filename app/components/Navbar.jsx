import { MotiText, MotiView } from "moti"
import { View } from "react-native"
import {Link} from 'expo-router'


const Navbar = () => {
    return (
        <MotiView style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100vw', paddingTop: '20px', borderBottom: '1px' solid }}>

<Link href="/">Home</Link>
     <Link href="/about">About</Link> 
     <Link href="/kittens">Kittens</Link>
        <Link href="/resources">Resources</Link>
     <Link href="/contact">Contact</Link> 

          
        </MotiView>
    )
}
export default Navbar