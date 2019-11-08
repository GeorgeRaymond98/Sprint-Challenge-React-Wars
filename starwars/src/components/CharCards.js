import React from 'react';

import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';


const CharCards = ({url,gender,eye_color,height,mass,skin_color,hair_color,name}) => {
    return (
      <div>
        <Card className="main"> 
          <CardBody>
            <CardTitle className="name"> {name}</CardTitle>
            <CardText>Gender: {gender}</CardText>
            <CardText>Eye Color: {eye_color}</CardText>
            <CardText>Height: {height}</CardText>
            <CardText>Mass: {mass}</CardText>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Skin Color: {skin_color}</CardText>
            <CardText>Hair Color: {hair_color}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default CharCards;