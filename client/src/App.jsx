import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import HomePageHeader from './components/HomePageHeader'

function App() {

  return (
    <ChakraProvider>
      <HomePageHeader />
    </ChakraProvider>
  )
}

export default App
