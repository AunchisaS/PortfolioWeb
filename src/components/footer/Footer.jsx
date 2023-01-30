import React, { useState } from 'react'
import "./footer.css"

const CardList = ({ ...props }) => (<>
  {props.children}
</>)

const Card = ({ name }) => (<div>{name}</div>)

const Footer = () => {
  const [tagInput, setTagInput] = useState("")
  const cardItems = [
    {name:'apple', tag:'fruit'},
    {name:'banana', tag:'fruit'},
    {name:'carrot', tag:'vegetable'},
    {name:'dog', tag:'animal'},
  ]
  return(<>
    <div>Footer</div>
    <input title="Test" onChange={(e) => {setTagInput(e.target.value)}} />
    <CardList>
      {cardItems.filter(item => item.tag === tagInput).map(item => <Card name={item.name} />)}
    </CardList>
  </>)
}

export default Footer