import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProductDropdown = ({ offeredProduct }) => {
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [displayProduct, setDisplayProduct] = useState({});

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:8000/user/products',
                    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                await setProducts(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        getProducts()
    }, [])

    const getProduct = async (selectedProduct) => {
        try {
            const res = await axios.get(`http://localhost:8000/product/${selectedProduct}`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            await setDisplayProduct(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    // Function to handle component selection
    const handleSelectChange = (product) => {

        setSelectedProduct(product);
        if (product !== '') getProduct(product);
    };

    const handleSubmit = async () => {
        // Make an offer
        try {
            const res = await axios.post(`http://localhost:8000/sendmessage/${offeredProduct.owner._id}`,
                {
                    'message': `Hello I would like to make an offer on the product: ${offeredProduct.name}. In return you recieve ${displayProduct.name}`,
                    'offer': true
                },
                { headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                } })
            const messageId = await res.data._id
            await axios.post(`http://localhost:8000/createoffer/${offeredProduct.owner._id}`,
                {
                    'products': [offeredProduct._id, displayProduct._id],
                    'messageId': messageId
                },
                { headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                } })
            alert('Offer sent successfully')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='flex flex-row gap-2'>
            <div className='pt-2'>
                <select onChange={(e) => handleSelectChange(e.target.value)} className='rounded-md'>
                    <option value="">Select a Product to Trade</option>
                    {products && products.map(product => (
                        <option key={product._id} value={product._id}>{product.name},  ${product.price_range}</option>
                    ))}
                </select>
            </div>
            <button className='bg-teal-500 text-white rounded-md p-2 mt-2 h-[60%]' onClick={handleSubmit}>Make Offer</button>
        </div>
    )
}

export default ProductDropdown