import './App.css';
import React, { useState } from 'react';
import Random from './Random';
import Feed from './Feed';
import Loading from './Loading';

function App() {const [randomFeed, setRandomFeed] = useState([]);

  const [feed, setFeed] = useState([]);
  const [loader, setLoader] = useState(true);
  const [fav, setFav] = useState('');

   //can i parse my values inside a useState
   const category=["technology","business","entertainment","health","science","sports"];
   const category_ = Math.floor(Math.random() * category.length);
  let caetgories_= category[category_]

  //templates/variable for country code
   const  councategory=["ae","ar","at","au","us"];
   const councategory_ = Math.floor(Math.random() * councategory.length);

   let councategories_=councategory[ councategory_];

  const random = e => {
    e.preventDefault();
    // const url =
    //    `https://newsapi.org/v2/top-headlines/sources?country=us&category=${caetgories_}&apiKey=4e39113d7f33497f8c0cc054ff0fbd3b`;
      // 'https://jsonplaceholder.typicode.com/todos/';

      //  https://newsapi.org/v2/top-headlines?country=us&apiKey=4e39113d7f33497f8c0cc054ff0fbd3b

  const URI= `https://newsapi.org/v2/top-headlines/?country=${councategories_}&apiKey=4e39113d7f33497f8c0cc054ff0fbd3b`;


    fetch(URI)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setFeed(data.articles);
        setLoader(false);
        console.log(data.articles)
;        // setFeed(data)
      });
  };

  return (
    <div>
      <Random randomNizer={random} />
      <Feed feed={feed}  loader={loader}/>
    </div>
  );
}

export default App;
