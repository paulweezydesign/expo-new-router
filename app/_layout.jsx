import {Slot} from 'expo-router'
import Navbar from './components/Navbar'

const Layout = () => {
    return (
        <>
        <Navbar />
        <Slot />
    </>
    )
}
export default Layout