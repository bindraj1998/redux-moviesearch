import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
  import style from "../component/style.module.css"
const Main = () => {


      const movies=useSelector((state)=>state.movies)
      console.log(movies)
      const dispatch=useDispatch()
   const [quiry,setquiry]=useState("avatar")
      async function searchmovies(data){
         let d=await fetch(data)
         let movi=await d.json()

         if(movi.Response=="True"){

             dispatch({type:"add",payload:movi.Search})

         }

      }

      useEffect(()=>{

        searchmovies(`https://www.omdbapi.com/?apikey=9386b6c9&s=${quiry}`)
    },[quiry])


  return (

    <div>
      <div >
          <input className={style.input} type="text" placeholder='Enter movies' onChange={(e)=>setquiry(e.target.value)}/>
          </div>
    
       <div  className={style.head}>
      {movies.map((el)=>
      <div className={style.div}  >
          <img style={{width:"100%",height:"400px"}} src={el.Poster}/>
          <p className={style.p}>Name : {el.Title}</p>

      </div>
    )}
    </div>
      </div>
  )
}

export default Main