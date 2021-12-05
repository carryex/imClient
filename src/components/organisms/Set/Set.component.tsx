import React from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../../hooks';
import {Card} from '../../moleculs/Card';
const Set = () =>{
  const params = useParams();
  const set = useAppSelector((state) =>
    state.sets.collection.find((set)=>set.id === params.setId));

  const cardJSX = set?.cards.map((card)=><Card card={card} key={card.id}/>);

  return ( <>{cardJSX}</>);
};

export {Set};
