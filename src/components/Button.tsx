import React from 'react'
export type ButtonProps = {
    
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void

}
export const Button = (props:ButtonProps) => {
  
  console.log('Click button in Browser');
  return(  <button onClick={(event)=> props.handleClick(event, 1)}>Click</button>
 
  )
}
