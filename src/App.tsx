
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'


import { User } from './components/State/User'
import { LoggedIn } from './components/State/LoggedIn'
function App() {

  const personName = {
    first: 'Vidhya',
    last: 'Anand',
  }
  const nameList=[
    {
      first: 'A',
      last: 'Z',
    },
    {
      first: 'B',
      last: 'Y',
    },
    {
      first: 'C',
      last: 'X',
    }
  ]
  return (
    <div className="App">

<Greet name='Vidhya'  isLoggedIn={false}/>
<Person name={personName}/>
<PersonList names={nameList} />
<Status status='success' />
<Heading>PlaceHolder text </Heading>
<Oscar>
  <Heading> Oscar goes to A.R Rahman</Heading>
</Oscar>
<LoggedIn></LoggedIn>
<User></User>
<Button handleClick={(event,id) =>{
 
<h2>"Button Clicked",event,id</h2>
}}/>
<Input value='Enter your name' handleChange={event =>console.log(event)}/>
    <Container styles={{border: '1px solid black', padding: '1rem'}}/>
    </div>
  )

}


export default App
