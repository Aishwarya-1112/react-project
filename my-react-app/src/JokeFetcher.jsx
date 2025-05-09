import axios from 'axios';
import { useState } from 'react';

const JokeFetcher = () => {
  const [joke, setJoke] = useState(""); 

  const apicall = async () => {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      setJoke(response.data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke.");
    }
  };



  return (
    <>
      <h1>Jokes</h1>
      <button onClick={apicall}>Get a Joke</button>
      <p>{joke}</p>
    </>
  );
}



export default JokeFetcher






// import React, { useState } from 'react';

// function JokeFetcher() {
//   const [joke, setJoke] = useState('');
//   const [loading, setLoading] = useState(false);

//   const getJoke = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://official-joke-api.appspot.com/random_joke');
//       const data = await response.json();
//       setJoke(`${data.setup} - ${data.punchline}`);
//     } catch (error) {
//       setJoke("Oops! Couldn't fetch a joke.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Random Joke Generator</h1>
//       <button onClick={getJoke} disabled={loading}>
//         {loading ? 'Loading...' : 'Tell me a joke'}
//       </button>
//       <p>{joke}</p>
//     </div>
//   );
// }

// export default JokeFetcher;
