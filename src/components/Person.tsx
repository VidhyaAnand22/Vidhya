import React from 'react'
import { PersonProps } from './Person.type'

export const Person = (props: PersonProps) => {
  return (
    <div>
        <h2>{props.name.first} {props.name.last}</h2>
        </div>
  )
}
