'use client'
import { authClient } from '@/lib/authClient';
import React, { useEffect, useState } from 'react'
const HomePage = () => {
  const [user,setUser]=useState(null)
useEffect(() => {
  const fetchData = async () => {
    try {
               const {data}=await authClient.getSession();  
               console.log(data)     
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, []);
console.log(user)
  return (
    <div>
      this is home page
    </div>
  )
}

export default HomePage
