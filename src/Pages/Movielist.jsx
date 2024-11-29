import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { movieApi } from '../Env/ApiUrl';

function Movielist() {
  const [movieList,setMovieList] = useState([]);

  const getallmovies = ()=>{
      axios.get(movieApi).then((res)=>{
           setMovieList(res.data);
           console.log(res.data);
           
      }).catch(err=>console.log(err))
  }

  useEffect(()=>{
    getallmovies();
  },[])

  const deleteMovie = (moviID)=>{
      axios.delete(`${movieApi}/${moviID}`).then((res)=>{
          alert("Movie Deleted...");
          getallmovies();
      }).catch(err=>console.log(err))
  }

  return (
    <div>
         <div className="container py-3">
             <div className="row">
                    {
                        movieList.map((movieitem)=>{
                              return(
                                <div className="col-md-4 mb-3 border border-top-4 p-3" key={movieitem.movieId}>
                                <h4>{movieitem.movieName}</h4>
                                <img src={movieitem.movieImg} alt=""  className='img-fluid'/>
                                <p>{movieitem.movieDesc}</p>
                                <h6>Price:<b>{movieitem.moviePrice}</b></h6>
                                <h6>Genre:<b>{movieitem.movieGenre}</b></h6>
                                <button className='btn btn-danger' onClick={()=>deleteMovie(movieitem.movieId)}>Delete Movie</button>
                                
                          </div>
                              )
                        })
                    }
             </div>
         </div>
    </div>
  )
}

export default Movielist