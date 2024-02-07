import React from 'react'
import './Birthday.css'
function Birthday(props){
let {msg}=props;
// msg.map((index,value)=>{
//     console.log(index,value);
// })

return <>
<div className='cart'>

  {msg.map((value) => (
  <div key={value.id}>
    <img src={value.image} alt={value.name} className='img'/>
    <h4>{value.name}</h4>
    <h5>{value.age}</h5>
  </div>
))}
</div>
</>
}

export default Birthday;
