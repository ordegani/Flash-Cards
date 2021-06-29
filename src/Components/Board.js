import React from 'react'
import Card from './Card'

export default function Board() {
    const Data = [
        {country:"Israel" , Capital: "Jerusalem"},
        {country:"England" , Capital: "London"},
        {country:"Russia" , Capital: "moscow"},
        {country:"Egypt" , Capital: "Cairo"},
        {country:"India" , Capital: "New Delhi"},
    ]
    return (
        <div>
            {Data.map((card, index)=>(
            <Card cardCountry={card.country}/>))}
        </div>
    )
}
