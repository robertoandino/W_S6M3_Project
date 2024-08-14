import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
//import { Alert } from 'reactstrap' ;
import styled from 'styled-components';
//const Button = styled.button`
  //background: cyan;
  //border-radius: 3px;
  //border: 2px solid #BF4F74;
  //color: #BF4F74;
  //margin: 0 1em;
  //padding: 0.25em 1em;
//`;

const api_Key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_Key}`
const refreshPage = () => {
  window.location.reload();
};

function App() {
  
  const [apod, setApod] = useState()
   
  useEffect(() => {
  
    function fetchPhoto(){
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    //fetchPhoto()

    setApod({
        "date": "2024-08-12",
        "explanation": "What's happening in the sky above Stonehenge? A meteor shower: specifically, the Perseid meteor shower. A few nights ago, after the sky darkened, many images of meteors from this year's Perseids were captured separately and merged into a single frame. Although the meteors all traveled on straight paths, these paths appear slightly curved by the wide-angle lens of the capturing camera. The meteor streaks can all be traced back to a single point on the sky called the radiant, here just off the top...",
        "hdurl": "https://apod.nasa.gov/apod/image/2408/PerseidsStonehenge_Dury_2780.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Perseid Meteors over Stonehenge",
        "url": "https://apod.nasa.gov/apod/image/2408/PerseidsStonehenge_Dury_960.jpg"
    })
    

  }, [])

  if(!apod) return "Fetching Photo of the day..."

  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
