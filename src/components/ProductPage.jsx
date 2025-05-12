import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductDetail = () => {
    const { id } = useParams()
    const { data: posts } = useSelector(state => state.posts)
    const product = posts.find(item => item.id.toString() === id)

    if (!product) return <p>Product not found.</p>

    return (
        <div className="product-detail">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: Rs. {product.price}</p>
        </div>
    )
}

export default ProductDetail
