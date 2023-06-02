import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import Example from './components/Karakter';
import Example1 from './components/k1';
import Example2 from './components/k2';
import Example3 from './components/k3';
import Example4 from './components/k4';
import Example5 from './components/k5';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const dummyVariable= [
    {
        "name": "Luke Skywalker", 
        "height": "172", 
        "mass": "77", 
        "hair_color": "blond", 
        "skin_color": "fair", 
        "eye_color": "blue", 
        "birth_year": "19BBY", 
        "gender": "male", 
        "homeworld": "https://swapi.dev/api/planets/1/", 
        "films": [
            "https://swapi.dev/api/films/1/", 
            "https://swapi.dev/api/films/2/", 
            "https://swapi.dev/api/films/3/", 
            "https://swapi.dev/api/films/6/"
        ], 
        "species": [], 
        "vehicles": [
            "https://swapi.dev/api/vehicles/14/", 
            "https://swapi.dev/api/vehicles/30/"
        ], 
        "starships": [
            "https://swapi.dev/api/starships/12/", 
            "https://swapi.dev/api/starships/22/"
        ], 
        "created": "2014-12-09T13:50:51.644000Z", 
        "edited": "2014-12-20T21:17:56.891000Z", 
        "url": "https://swapi.dev/api/people/1/"
    }, 
    {
        "name": "C-3PO", 
        "height": "167", 
        "mass": "75", 
        "hair_color": "n/a", 
        "skin_color": "gold", 
        "eye_color": "yellow", 
        "birth_year": "112BBY", 
        "gender": "n/a", 
        "homeworld": "https://swapi.dev/api/planets/1/", 
        "films": [
            "https://swapi.dev/api/films/1/", 
            "https://swapi.dev/api/films/2/", 
            "https://swapi.dev/api/films/3/", 
            "https://swapi.dev/api/films/4/", 
            "https://swapi.dev/api/films/5/", 
            "https://swapi.dev/api/films/6/"
        ], 
        "species": [
            "https://swapi.dev/api/species/2/"
        ], 
        "vehicles": [], 
        "starships": [], 
        "created": "2014-12-10T15:10:51.357000Z", 
        "edited": "2014-12-20T21:17:50.309000Z", 
        "url": "https://swapi.dev/api/people/2/"
    }, 
    {
        "name": "R2-D2", 
        "height": "96", 
        "mass": "32", 
        "hair_color": "n/a", 
        "skin_color": "white, blue", 
        "eye_color": "red", 
        "birth_year": "33BBY", 
        "gender": "n/a", 
        "homeworld": "https://swapi.dev/api/planets/8/", 
        "films": [
            "https://swapi.dev/api/films/1/", 
            "https://swapi.dev/api/films/2/", 
            "https://swapi.dev/api/films/3/", 
            "https://swapi.dev/api/films/4/", 
            "https://swapi.dev/api/films/5/", 
            "https://swapi.dev/api/films/6/"
        ], 
        "species": [
            "https://swapi.dev/api/species/2/"
        ], 
        "vehicles": [], 
        "starships": [], 
        "created": "2014-12-10T15:11:50.376000Z", 
        "edited": "2014-12-20T21:17:50.311000Z", 
        "url": "https://swapi.dev/api/people/3/"
    }, 
    {
        "name": "Darth Vader", 
        "height": "202", 
        "mass": "136", 
        "hair_color": "none", 
        "skin_color": "white", 
        "eye_color": "yellow", 
        "birth_year": "41.9BBY", 
        "gender": "male", 
        "homeworld": "https://swapi.dev/api/planets/1/", 
        "films": [
            "https://swapi.dev/api/films/1/", 
            "https://swapi.dev/api/films/2/", 
            "https://swapi.dev/api/films/3/", 
            "https://swapi.dev/api/films/6/"
        ], 
        "species": [], 
        "vehicles": [], 
        "starships": [
            "https://swapi.dev/api/starships/13/"
        ], 
        "created": "2014-12-10T15:18:20.704000Z", 
        "edited": "2014-12-20T21:17:50.313000Z", 
        "url": "https://swapi.dev/api/people/4/"
    }, 
    {
        "name": "Leia Organa", 
        "height": "150", 
        "mass": "49", 
        "hair_color": "brown", 
        "skin_color": "light", 
        "eye_color": "brown", 
        "birth_year": "19BBY", 
        "gender": "female", 
        "homeworld": "https://swapi.dev/api/planets/2/", 
        "films": [
            "https://swapi.dev/api/films/1/", 
            "https://swapi.dev/api/films/2/", 
            "https://swapi.dev/api/films/3/", 
            "https://swapi.dev/api/films/6/"
        ], 
        "species": [], 
        "vehicles": [
            "https://swapi.dev/api/vehicles/30/"
        ], 
        "starships": [], 
        "created": "2014-12-10T15:20:09.791000Z", 
        "edited": "2014-12-20T21:17:50.315000Z", 
        "url": "https://swapi.dev/api/people/5/"
    }, 
    {
        "name": "Owen Lars", 
        "height": "178", 
        "mass": "120", 
        "hair_color": "brown, grey", 
        "skin_color": "light", 
        "eye_color": "blue", 
        "birth_year": "52BBY", 
        "gender": "male", 
        "homeworld": "https://swapi.dev/api/planets/1/", 
        "films": [
            "https://swapi.dev/api/films/1/", 
            "https://swapi.dev/api/films/5/", 
            "https://swapi.dev/api/films/6/"
        ], 
        "species": [], 
        "vehicles": [], 
        "starships": [], 
        "created": "2014-12-10T15:52:14.024000Z", 
        "edited": "2014-12-20T21:17:50.317000Z", 
        "url": "https://swapi.dev/api/people/6/"
    }, 
    {
        "name": "Beru Whitesun lars", 
        "height": "165", 
        "mass": "75", 
        "hair_color": "brown", 
        "skin_color": "light", 
        "eye_color": "blue", 
        "birth_year": "47BBY", 
        "gender": "female", 
        "homeworld": "https://swapi.dev/api/planets/1/", 
        "films": [
            "https://swapi.dev/api/films/1/", 
            "https://swapi.dev/api/films/5/", 
            "https://swapi.dev/api/films/6/"
        ], 
        "species": [], 
        "vehicles": [], 
        "starships": [], 
        "created": "2014-12-10T15:53:41.121000Z", 
        "edited": "2014-12-20T21:17:50.319000Z", 
        "url": "https://swapi.dev/api/people/7/"
    }, 
    {
        "name": "R5-D4", 
        "height": "97", 
        "mass": "32", 
        "hair_color": "n/a", 
        "skin_color": "white, red", 
        "eye_color": "red", 
        "birth_year": "unknown", 
        "gender": "n/a", 
        "homeworld": "https://swapi.dev/api/planets/1/", 
        "films": [
            "https://swapi.dev/api/films/1/"
        ], 
        "species": [
            "https://swapi.dev/api/species/2/"
        ], 
        "vehicles": [], 
        "starships": [], 
        "created": "2014-12-10T15:57:50.959000Z", 
        "edited": "2014-12-20T21:17:50.321000Z", 
        "url": "https://swapi.dev/api/people/8/"
    }, 
    {
        "name": "Biggs Darklighter", 
        "height": "183", 
        "mass": "84", 
        "hair_color": "black", 
        "skin_color": "light", 
        "eye_color": "brown", 
        "birth_year": "24BBY", 
        "gender": "male", 
        "homeworld": "https://swapi.dev/api/planets/1/", 
        "films": [
            "https://swapi.dev/api/films/1/"
        ], 
        "species": [], 
        "vehicles": [], 
        "starships": [
            "https://swapi.dev/api/starships/12/"
        ], 
        "created": "2014-12-10T15:59:50.509000Z", 
        "edited": "2014-12-20T21:17:50.323000Z", 
        "url": "https://swapi.dev/api/people/9/"
    }, 
    {
        "name": "Obi-Wan Kenobi", 
        "height": "182", 
        "mass": "77", 
        "hair_color": "auburn, white", 
        "skin_color": "fair", 
        "eye_color": "blue-gray", 
        "birth_year": "57BBY", 
        "gender": "male", 
        "homeworld": "https://swapi.dev/api/planets/20/", 
        "films": [
            "https://swapi.dev/api/films/1/", 
            "https://swapi.dev/api/films/2/", 
            "https://swapi.dev/api/films/3/", 
            "https://swapi.dev/api/films/4/", 
            "https://swapi.dev/api/films/5/", 
            "https://swapi.dev/api/films/6/"
        ], 
        "species": [], 
        "vehicles": [
            "https://swapi.dev/api/vehicles/38/"
        ], 
        "starships": [
            "https://swapi.dev/api/starships/48/", 
            "https://swapi.dev/api/starships/59/", 
            "https://swapi.dev/api/starships/64/", 
            "https://swapi.dev/api/starships/65/", 
            "https://swapi.dev/api/starships/74/"
        ], 
        "created": "2014-12-10T16:16:29.192000Z", 
        "edited": "2014-12-20T21:17:50.325000Z", 
        "url": "https://swapi.dev/api/people/10/"
    }
]
  const [veriler,setVeriler]=useState([]);
  const [veriler1,setVeriler1]=useState([]);
  const [veriler2,setVeriler2]=useState([]);
  const [veriler3,setVeriler3]=useState([]);
  const [veriler4,setVeriler4]=useState([]);
  const [veriler5,setVeriler5]=useState([]);
  const [veriler6,setVeriler6]=useState([]);


  useEffect(()=>{
    
    axios.get("https://swapi.dev/api/people/").then((data)=>{
      console.log(data.data)
    setVeriler(data.data[0])});
    
    
    },[])
    useEffect(()=>{
      
      axios.get("https://swapi.dev/api/people/").then((data)=>{
        console.log(data.data)
      setVeriler1(data.data[1])});
     
      
      },[])
      useEffect(()=>{
        
        axios.get("https://swapi.dev/api/people/").then((data)=>{
          console.log(data.data)
        setVeriler2(data.data[2])});
     
        
        },[])
        useEffect(()=>{
          
          axios.get("https://swapi.dev/api/people/").then((data)=>{
            console.log(data.data)
          setVeriler3(data.data[3])});
         
          
          },[])
          useEffect(()=>{
            
            axios.get("https://swapi.dev/api/people/").then((data)=>{
              console.log(data.data)
            setVeriler4(data.data[4])});
           
            
            },[])
            useEffect(()=>{
              
              axios.get("https://swapi.dev/api/people/").then((data)=>{
                console.log(data.data)
              setVeriler5(data.data[5])});
              
              
              },[])

    
    console.log(veriler);
    const Divv11  = styled.div`
    display: flex ;
    flex-direction : column;
    flex-wrap: wrap;
    margin: auto;
   
`
    
  
  return (
    <div className="App">
      <h1 className="Header">Star Wars Majors characters List </h1>
       <Divv11>
        <Example verilerName ={veriler.name} verilerGender ={veriler.gender} verilerHeight ={veriler.height}  verilerMass={veriler.mass} verilerBirthYear={veriler.birth_year}
        verilerEyeColor={veriler.eye_color}  verilerHairColor={veriler.hair_color} verilerSkinColor={veriler.skin_color}  />
        <Example1 verilerName1 ={veriler1.name} verilerGender1 ={veriler1.gender} verilerHeight1 ={veriler1.height}  verilerMass1={veriler1.mass} verilerBirthYear1={veriler1.birth_year}
        verilerEyeColor1={veriler1.eye_color}  verilerHairColor1={veriler1.hair_color} verilerSkinColor1={veriler1.skin_color}  />
         <Example2 verilerName2 ={veriler2.name} verilerGender2 ={veriler2.gender} verilerHeight2 ={veriler2.height}  verilerMass2={veriler2.mass} verilerBirthYear2={veriler2.birth_year}
        verilerEyeColor2={veriler2.eye_color}  verilerHairColor2={veriler2.hair_color} verilerSkinColor2={veriler2.skin_color}  />
         <Example3 verilerName3 ={veriler3.name} verilerGender3 ={veriler3.gender} verilerHeight3 ={veriler3.height}  verilerMass3={veriler3.mass} verilerBirthYear3={veriler3.birth_year}
        verilerEyeColor3={veriler3.eye_color}  verilerHairColor3={veriler3.hair_color} verilerSkinColor3={veriler3.skin_color}  />
         <Example4 verilerName4 ={veriler4.name} verilerGender4 ={veriler4.gender} verilerHeight4 ={veriler4.height}  verilerMass4={veriler4.mass} verilerBirthYear4={veriler4.birth_year}
        verilerEyeColor4={veriler4.eye_color}  verilerHairColor4={veriler4.hair_color} verilerSkinColor4={veriler4.skin_color}  />
         <Example5 verilerName5 ={veriler5.name} verilerGender5 ={veriler5.gender} verilerHeight5 ={veriler5.height}  verilerMass5={veriler5.mass} verilerBirthYear5={veriler5.birth_year}
           verilerEyeColor5={veriler5.eye_color}  verilerHairColor5={veriler5.hair_color} verilerSkinColor5={veriler5.skin_color} />
         </Divv11>
       
      
    </div>
  );
}

export default App;
