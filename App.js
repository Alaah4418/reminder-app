
import React, { useState } from 'react'
import Datecounts from './components/Datecounts';
import {Container } from "react-bootstrap";
import Reminder from './components/Reminder';
import { person } from "./data";
import Nextaction from './components/Nextaction';


const App = () => {
    const [personData, setPersonData] = useState(person);
    const  onDelete = ()=>{
        setPersonData([])
    }
    const  onViewData = ()=>{
        setPersonData(person)
    }
    return (
        <div className="font colorBody">
        <Container className="py-5">
           <Datecounts person = {personData}/>
           <Reminder  person = {personData}/>
           <Nextaction deleteData = {onDelete}  viewData = {onViewData}/>
        </Container>
      </div>
    )
}

export default App;