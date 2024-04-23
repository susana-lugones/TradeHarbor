import React, { useState } from 'react'
import axios from 'axios'

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_url: '',
    price_range: ''
  });

  //const [token, setToken] = useState(''); // State to hold the authorization token

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/newproduct', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` // Include the token in the Authorization header
        }
      });
      console.log('Product created:', response.data);
      // Reset form after successful submission
      setFormData({
        name: '',
        description: '',
        image_url: '',
        price_range: ''
      });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className='flex flex-grow justify-center items-center bg-[#ececec] text-gray-800'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4 bg-teal-500 rounded-md'>
        <h1 className='text-3xl font-semibold'>Create Product</h1>
        <div>
          {/* <label>Name:</label> */}
          <input className='p-2 bg-zinc-200 rounded-lg' placeholder='Item Name' type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          {/* <label>Description:</label> */}
          <textarea className='p-2 bg-zinc-200 rounded-lg' placeholder='Description' name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          {/* <label>Image URL:</label> */}
          <input className='p-2 bg-zinc-200 rounded-lg' placeholder='Image URL' type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
        </div>
        <div>
          {/* <label>Price Range:</label> */}
          <input className='p-2 bg-zinc-200 rounded-lg' placeholder='Price Range' type="text" name="price_range" value={formData.price_range} onChange={handleChange} />
        </div>
        
        <button className='p-2 bg-[#ececec] hover:bg-zinc-200 rounded-lg' type="submit">Create Product</button>
      </form>
    </div>
  );
};


export default CreateProduct