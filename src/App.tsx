import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Register/Register';

const App :FC = () => (
  <>
    <Navbar />
    <Flex minH="93vh" w="100%">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Flex>
  </>
);

export default App;
