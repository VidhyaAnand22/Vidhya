import React from 'react'
import {Name} from './Person.type'
type PersonListProps={
    names: Name[]
    }

export const PersonList = (Props: PersonListProps) => {
  return (
    <div>
        {Props.names.map((name) => {
            return(
                <h2 key={name.first}>{name.first} {name.last}</h2>
            )
        })}
    </div>
  )
}
