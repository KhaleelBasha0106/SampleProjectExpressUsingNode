import React from 'react'
import { Box } from '@mui/material'
import { BrowserRouter,Route,Routes } from 'react-router-dom/dist/umd/react-router-dom.development'
import DeleteUserData from './DeleteUserData'
import UserData from './UserData'
import OptionFile from './OptionFile'
import App from './App'
import EditUserData from './EditUserData'
const TestFile = () => {
  return (
    <Box>
      <BrowserRouter>
       <Routes>
        <Route  path='/' element={<OptionFile />}/>
        <Route  path='/details' element={<App />}/>
         <Route path ='/user' element={ <UserData />} />
         <Route path ='/deletedata' element={<DeleteUserData />} />
         <Route path ='/editdata' element={<EditUserData />} />
       </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default TestFile
