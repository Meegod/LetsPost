import React, { useState } from 'react';
import './Feed.css';
import Loading from './Loading';

function Feed({ feed,loader}) {
  //This script limits the numner of post on a page...


   
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = feed.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);

  let data = currentPosts;
  // console.log('i am the ', feed);

  function shuffleArray(data) {
    for (let i = data.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      [data[i], data[r]] = [data[r], data[i]];
    }
    return data;
  }

  console.log(shuffleArray(data));

  // let modifiedArr = data.map(function(element) {
  //   return element;
  // });

  // let imgUrl;
  // if (data.urlToImage ===undefined) {
  //   imgUrl = 'https://via.placeholder.com/350x150';
  //   console.log('hi')
  // } else {
  //   imgUrl = data.urlToImage;
  // }

  // let imgUrl='https://via.placeholder.com/350x150';
//Bug from the image


// Files left
//Spinner
//image authenication...


// if(loader){
//   <Loading/>
// }else{
  return loader? (
    <Loading/>
  ):(
<div className="container pt-8">
     {/* <h1 className="text-center pb-2 mt-2">I am the feed page</h1> */}
    
      <div className="grid-3 ">
      {data.map((book,index) => (
              <div key={index} className="card">
                {/* <img src={book.urlToImage||imageUrl} className="img-fluid"/> */}
                <img 
                src={book.urlToImage==null?
                  'https://via.placeholder.com/350x150':book.urlToImage  } class="img-fluid" />
    
                <h2>{book.name}</h2>
                <p className="text-center">{book.description==null? 'No Info':book.description}</p>
              </div>
            ))}
    </div>
     </div>
  )
    
    
      

  


  
}
export default Feed;
