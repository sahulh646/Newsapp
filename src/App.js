
import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {
  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("kerala")

  useEffect(()=>{
    fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json `)
    .then((Response)=>Response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[category])
  return (
    <div className="App">
      <header className='header'>
        <h1>Local News</h1>
        <input type='text' onChange={(event)=>{
          if(event.target.value !== "")
          {
            setCategory(event.target.value);
          }
          else
          {
            setCategory("kerala")
          }
          
        }} placeholder='News Search'></input>

      </header>
      <section className='news-articles'>
        {
        

          articles.map((article)=>{
            return (
              <News article = {article}/>
            )
          })
          
        }
      </section>
     
    </div>
  );
}

export default App;
