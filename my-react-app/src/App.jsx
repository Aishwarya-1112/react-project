import React from 'react'
import JokeFetcher from "./JokeFetcher";
import Props from './Components/Props';




const App = () => {

  const User = {
    name: "Aish",
    age: '23',
    country: "india",
    phone: 643456787

  }
  return (

    <div><JokeFetcher />
    <Props {...User} />
    </div>
  )
}

export default App