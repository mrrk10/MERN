
// import {useEffect, useState} from 'react';
import {Route,Routes} from "react-router-dom";
import RegisterUser from './container/admin/registerUser.js';
import TicketWinner from "./container/users/ticketWinner";

const App=()=>{
  return(
    <>
    <Routes>

      <Route exact path="/" element={<TicketWinner/>}></Route>
    

      <Route exact path="/registerUser" element={<RegisterUser/>}>
        
      </Route>


    </Routes>
    </>
  )
}

export default App;