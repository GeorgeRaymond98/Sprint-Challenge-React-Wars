import React, {useState, useEffect}  from 'react';
import CharCards from "./CharCards";
import axios from 'axios';
import { CardDeck } from "reactstrap";
import "./StarWars.css";

export default function StarCards() {
    const[starPeople, setStarPeople] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/').then(res => {
            setStarPeople(res.data.results);
            console.log(res.data);
            console.log(res);
        })
        .catch(err => {
            console.log('not working',err);
        })
    },[]);

    return (
        <CardDeck className='container'>
            {starPeople.map(person => CharCards(person))}
        </CardDeck>
    )
}