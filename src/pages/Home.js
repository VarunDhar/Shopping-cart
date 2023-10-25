import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Spinner } from '../components/Spinner';
import { Product } from '../components/Product';

export const Home = () => {

    const [isLoading, setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const apiUrl = "https://fakestoreapi.com/products";

    async function fetchData(){
        setLoading(true);
        try {
            let {data} = await axios.get(apiUrl);
            // console.log(data);
            setPosts(data);
        } catch (error) {
            console.log("Error getting data from API."); 
            setPosts([]);     
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <div className='home'>
        {isLoading?

        (<Spinner/>)
        :
        (posts.length?
            (posts.map((post)=>{
                return <Product key={post.id} post={post}/>;
            }))
            :
            <h2>No data found 😥</h2>)
        }
    </div>
  )
}
