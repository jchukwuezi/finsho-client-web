import React from 'react'
import {useForm} from 'react-hook-form'

const UploadProductForm = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => {

    }

  return (
    <form
        className='max-w-xl m-auto py-10 mt-10 px-12'
        onSubmit={handleSubmit(onSubmit)}
    >
        <label className="text-gray-600 font-medium block mt-4">Upload Image</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50
         dark:text-gray-400 focus:outline-none dark:bg-gray-700
         dark:border-gray-600
         dark:placeholder-gray-400" id="file_input" type="file" />

        <label className="text-gray-600 font-medium block mt-4">Product Name</label>
        <input 
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
        id="productName"
        placeholder='Product Name'
        autoFocus
        {...register('shopName',{
            required: "Please enter a product name"
        })}
        aria-invalid={errors.productName ? "true" : "false"}
        />
        {errors.productName && <p role="alert" className='text-red-400'> {errors.productName?.message} </p>}
        
        <label className="text-gray-600 font-medium block mt-4">Product Category</label>
        <input 
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
        id="productCategory"
        placeholder='Drinks'
        autoFocus
        {...register('productCategory',{
            required: "Please enter a product category"
        })}
        aria-invalid={errors.productCategory ? "true" : "false"}
        />
        {errors.productCategory && <p role="alert" className='text-red-400'> {errors.productCategory?.message} </p>}

        <label className="text-gray-600 font-medium block mt-4">Barcode</label>
        <input 
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
        id="productBarcode"
        placeholder='Barcode'
        autoFocus
        {...register('productBarcode',{
            required: "Please enter a product barcode"
        })}
        aria-invalid={errors.productCategory ? "true" : "false"}
        />
        {errors.productCategory && <p role="alert" className='text-red-400'> {errors.productCategory?.message} </p>}

        
        <label className="text-gray-600 font-medium block mt-4">Product Price</label>
        <input 
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
        id="productPrice"
        type="number"
        placeholder='€'
        autoFocus
        {...register('productPrice',{
            required: "Please enter a product category"
        })}
        aria-invalid={errors.productPrice ? "true" : "false"}
        />
        {errors.productPrice && <p role="alert" className='text-red-400'> {errors.productPrice?.message} </p>}


        <label className="text-gray-600 font-medium block mt-4">Product Description</label>
        <textarea
        className="border-solid border-gray-300 border py-20 px-4 w-full rounded text-gray-700"
        id="description"
        rows={5}
        cols={5}
        autoFocus
        {...register('productDescription',{
            required: "Please enter a product description"
        })}
        />

        <button type='submit' className='w-full bg-finsho-purple hover:bg-finsho-purple-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'>Add Product</button>

    </form>
  )
}

export default UploadProductForm