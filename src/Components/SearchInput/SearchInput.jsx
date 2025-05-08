import React, { useContext, useState } from 'react'
import ShopContext from '../Contexts/ShopContext/ShopContext';

export default function SearchInput() {
    const[search,setSearch]=useState("");
    const {setInputContext}= useContext(ShopContext);

    const searchfun=(e)=>{
        setSearch(e.target.value);
        console.log(e.target.value);
        setInputContext(e.target.value);
        
    }
  return (
    <div>
        <input type='text' name='search' value={search}  placeholder='Search...'   onChange={(e)=>searchfun(e)} />
      
    </div>
  )
}
