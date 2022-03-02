import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CoinData from '../components/CoinData'
import { Add } from './Add'
import { CoinControls } from '../components/CoinControls'

export const Dashboard = () => {
    const [coinsList, setCoinsList]=useState([])
    {console.log(coinsList)}  
  
    useEffect(() => {
      fetchData()
    }, []);

    const fetchData = async ()=>{
       const res = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&curreny=USD')
        if(!res.errors){
          setCoinsList(res.data.coins);
          // console.log(response);
          console.log(res.data.coins);
        }else{
            setCoinsList([]);
        }
    }  
     
    
  return (
    <main>
        <div className="container">
            <div className="nav-spacer"></div>
                <h1>My Dashboard</h1>
                <Add/>
                <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Available Supply</th>
            <th>Volume 24hrs</th>
            <th>Watch</th>
          </tr>
        </thead>
        <tbody>       
            {coinsList.map((coin)=>{
              return(
                //the unique key should be in the map function.
                <CoinData coin={coin} key={coin.id}/>
              )
            }
            
          )
          }
        </tbody>
      </table>
      
      </div>
    </main>
  )
}