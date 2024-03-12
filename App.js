import React,{useState} from 'react'
import Data from './Data'
function App() {
   let[item,setitem]=useState(Data)


  let filtercat=(cat)=>{
let fdata=Data.filter((sub)=>{
  return cat===sub.category
})
// console.log(fdata);
setitem(fdata)
  }

let filtersubcat=(cat,subcat)=>{
  let fsubdata=Data.filter((res)=>{
  return cat===res.category && subcat===res.subcat
  })
  setitem(fsubdata)
}
  return (
    <>
    <div className="btn-group">
    <button type="button" className="btn btn-primary" onClick={()=>{setitem(Data)}}>All</button>
  <button type="button" className="btn btn-primary" onClick={()=>{filtercat('mobile')}}>Mobile</button>
  <button type="button" className="btn btn-primary" onClick={()=>{filtercat('shirt')}}>shirt</button>
  <button type="button" className="btn btn-primary" onClick={()=>{filtercat('watch')}}>watch</button>
</div>
<div className="btn-group">
  <button type="button" className="btn btn-primary" onClick={()=>{filtersubcat('mobile','lg')}}>Lg</button>
  <button type="button" className="btn btn-primary" onClick={()=>{filtersubcat('mobile','nokia')}}>Nokia</button>
  <button type="button" className="btn btn-primary" onClick={()=>{filtersubcat('mobile','samsung')}}>samsung</button>
  <button type="button" className="btn btn-primary" onClick={()=>{filtersubcat('shirt','woman')}}>woman shirt</button>
  <button type="button" className="btn btn-primary" onClick={()=>{filtersubcat('shirt','man')}}>Man shirt</button>
  <button type="button" className="btn btn-primary" onClick={()=>{filtersubcat('shirt','kids')}}>Kids shirt</button>
  <button type="button" className="btn btn-primary" onClick={()=>{filtersubcat('watch','womanwatch')}}>womanwatch</button>
  <button type="button" className="btn btn-primary" onClick={()=>{filtersubcat('watch','manwatch')}}>Manwatch</button>
  <button type="button" className="btn btn-primary" onClick={()=>{filtersubcat('watch','kidswatch')}}>Kidswatch</button>



</div>
   
   {item?<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">

{item.map((pro)=>{
return(
  <div class="col">
    <div class="card">
      <img src={pro.pimage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{pro.pname}</h5>
        <p class="card-text">Price={pro.price}</p>
        <p class="card-text">category={pro.category}</p>
        <p class="card-text">sub-category={pro.subcat}</p>

      </div>
    </div>
  </div>
)
})}



   </div>:<p>No data</p>}
    </>
  )
}

export default App