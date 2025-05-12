import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/createSlice'
import { addToCart } from '../redux/cartSlice'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    let {data:posts,loading,error}=useSelector(state=>state.posts)
    let dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])

    if(loading) return <p className="loading">Loading...</p>
    if(error) return <p className="error">Error: {error}</p>

    return (
        <div className="home-container">
            <h1 className="home-title">Products</h1>
            <div className="products-grid">
                {posts.map(post=>(
                    <div key={post.id} className="product-card">
                        <Link to={`./product/${post.id}`}>
                        <img src={post.image} alt={post.title} className="product-image"/>
                        </Link>
                        <h2 className="product-title" >{post.title}</h2>
                        <p className="product-price">Rs. {post.price}</p>
                        <button className="add-to-cart" onClick={()=>dispatch(addToCart(post))}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
