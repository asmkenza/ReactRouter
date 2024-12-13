import React from 'react';
import { useLoaderData, useParams, useNavigation } from "react-router-dom";


function Data() {

const dogUrl= useLoaderData();
const {id}= useParams();
const navigation= useNavigation();

if(navigation.state === "loading") {
  return <h1>Loading ....</h1>
}

  return (
    <div>
      <p> Id : {id} </p>
      <img src={dogUrl} alt="Image de mon chien"/>
    </div>
  )
}

export default Data;

export const dataLoader= async () => { 
  
   const response = await fetch('https://random.dog/woof.json'); 
   const dog= await response.json();              

  return dog.url; 
}