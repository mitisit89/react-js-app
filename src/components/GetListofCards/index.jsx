import React from 'react'
import Index from '../Card'



export default function GetListOfCards(props){
    return(
        props.jsonData.map(item =>{
            return <Index data/* data это  параметр который передаётся в компонет */={item} key={item.id} />
        })
    )
};