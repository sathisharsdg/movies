import React, { useState } from 'react'
import { movieApi } from '../Env/ApiUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
function Home() {
  const redirect = useNavigate();
  const [movieName,setMoviename] = useState("");
  const [movieDesc,setMovieDesc] = useState("");
  const [movieGenre,setMovieGenre] = useState("");
  const [moviePrice,setMoviePrice] = useState("");
  const [movieImg,setMovieImg] = useState("");
  const [movieDuration,setMovieDuration] = useState("");
  const [msg,setMsg] = useState("")
  const movieData = {movieName,movieDesc,movieGenre,moviePrice,movieImg,movieDuration}
  const addMovieList = (e)=>{
      e.preventDefault();
      axios.post(movieApi, movieData ).then(()=>{
           console.log("Movie addedd successfully");   
            setMsg("Movie added succesffully...!!!");
            setTimeout(()=>{
              redirect("/movielist")
            },1500)

      }).catch((err)=> console.log(err))
  }
  return (
    <div>
        <div className="container">
             <div className="row">
                <div className="col-md-6 offset-md-3 mt-3 mb-3">
                    <h3>Enter Movie Details</h3>
                    <form onSubmit={addMovieList}>
                       <div className="form-group mb-3">
                          <input type="text" placeholder='Enter Movie Name' className='form-control' onChange={e=>setMoviename(e.target.value)} />
                       </div>
                       <div className="form-group mb-3">
                          <input type="text" placeholder='Enter Movie Description' className='form-control' onChange={e=>setMovieDesc(e.target.value)} />
                       </div>
                       <div className="form-group mb-3">
                          <input type="text" placeholder='Enter Movie Genre' className='form-control'  onChange={e=>setMovieGenre(e.target.value)}/>
                       </div>
                       <div className="form-group mb-3">
                          <input type="text" placeholder='Enter Price' className='form-control' onChange={e=>setMoviePrice(e.target.value)}/>
                       </div>
                       <div className="form-group mb-3">
                          <input type="text" placeholder='Enter Movie Image URL' className='form-control' onChange={e=>setMovieImg(e.target.value)} />
                       </div>
                       <div className="form-group mb-3">
                          <input type="text" placeholder='Enter Movie Duration' className='form-control'  onChange={e=>setMovieDuration(e.target.value)}/>
                       </div>

                       <div className="form-group mb-3">
                           <button type='submit'  className='btn btn-success'>Add Movie </button>
                       </div>

                       <h2>{msg}</h2>


                   
                    </form>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Home