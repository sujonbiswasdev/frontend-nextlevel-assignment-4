'use client'
import StatsCard from '@/components/dashboard/stats/StatsCard';
import React, { useEffect, useState } from 'react'
export interface UserStats {
  oneMonthago: number;
  todaystats: number;
  totalActivateUser: number;
  totalAdmin: number;
  totalCustomer: number;
  totalSuspendUser: number;
  totalUsers: number;
  totalactiveusers: number;
  totalemailvarified: number; // matched the spelling "varified" from your image
  totalprovider: number;
  totalunactiveuser: number;
}

export interface UserStatsResponse {
  success: boolean;
  message: string;
  result: UserStats;
}
interface CategoryName {
  name: string;
}
interface CategoryStatsResponse {
  success: boolean;
  message: string;
  result: {
    totalcategory: number;
    mealsPerCategory: { _count: { _all: number }; category_name: string }[];
    totalcategory_name:CategoryName[]
  };
}
const StatsPage = () => {
    const [usercount,setusercount]=useState<UserStatsResponse>()
    const [Category,setCategory]=useState<CategoryStatsResponse>()
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch('http://localhost:5000/api/admin/users/stats',{credentials:"include",cache:"no-store"})
            const data=await res.json()
            setusercount(data)
        }
        fetchData()

        const categorydata=async()=>{
           const res=await fetch('http://localhost:5000/api/category/stats',{credentials:"include",cache:"no-store"})
            const data=await res.json()
            setCategory(data)
        }
        categorydata()
    })
    console.log(Category)
  return (
    <div>
     <div className='flex flex-wrap gap-4 w-full p-4'>
      <StatsCard title='total users' amount={usercount?.result.totalUsers || 0} icon='👤'/>
      <StatsCard title='total active users' amount={usercount?.result.totalActivateUser || 0} icon='🙋' />
      <StatsCard title='total suspend users' amount={usercount?.result.totalSuspendUser|| 0} icon='👤🚫' />
       <StatsCard title='total not email verified' amount={usercount?.result.totalemailvarified || 0} icon='🔐' />
        <StatsCard title='total category ' amount={Category?.result.totalcategory || 0} icon='🗃️' />
        {Category?.result.totalcategory_name.map((item,index:number)=>(<div key={index}>
          <StatsCard title={`${item.name}`}  icon='🗃️' />
          </div>))}
     </div>
    </div>
  )
}

export default StatsPage
