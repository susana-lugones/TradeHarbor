import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const User = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const [products, setProducts] = useState([])
    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarClick = (star) => {
        setSelectedStars(star);
    };

    const handleSumbit = async () => {
        try {
            axios.put(`http://localhost:8000/rate/${id}`,
                { rating: selectedStars },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })

            setSelectedStars(0)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getAccountInfo = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/account/${id}`)
                await setUser(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        const getProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/user/${id}/products`)
                await setProducts(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getAccountInfo()
        getProducts()
    }, [user])

    return (
        <div className="flex flex-col flex-grow gap-3 w-full items-center justify-center bg-[#ececec] text-gray-800">
            <div className="flex h-[] w-[300px] flex-col rounded-lg bg-teal-500">
                <div className="flex flex-col items-start p-3">
                    <h2 className="pb-[8px] text-3xl font-semibold">Profile</h2>
                    <h2 className='text-xl'>User reviews:</h2>
                    <div className="pb-[4px] text-2xl">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                style={{ cursor: 'context-menu', color: index < user?.totalRating ? 'gold' : 'gray' }}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                    <h2 className="pb-[8px]">Username: {user.username}</h2>
                    <h2 className="pb-[8px]">Email: {user.email}</h2>
                    <>
                        {localStorage.getItem('token') && (
                            <>
                                <h2 className='pb-[2px] text-2xl font-semibold'>Leave a Review:</h2>
                                <div className='text-xl'>
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            style={{ cursor: 'pointer', color: index < selectedStars ? 'gold' : 'gray' }}
                                            onClick={() => handleStarClick(index + 1)}
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                    <br />
                                    <button className='bg-gray-200 border-2 mt-2 p-0.5 text-lg rounded-md' onClick={handleSumbit}>Leave Review</button>
                                </div>
                            </>
                        )}
                    </>


                </div>
            </div>
            <div className="flex h-[] w-[300px] flex-col rounded-lg bg-teal-500 p-3">
                <h2 className="pb-[4px] text-xl font-semibold">Products:</h2>
                <div className="flex flex-col">
                    {products?.map((product) => (
                        <div key={product._id} className="flex flex-col py-1">
                            <Link to={`/product/${product._id}`}><p className='text-lg'>{product.name}:</p></Link>
                            <p>{product.description}</p>
                            <p>${product.price_range}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default User