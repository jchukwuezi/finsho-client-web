import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import uuid from 'react-uuid'
import { notify } from '../toasts/toasts'

const UploadProductForm = () => {
    const [files, setFiles] = useState([])
    const [images, setImages] = useState([])
    
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data)
        //const url = URL.createObjectURL(files[0].url)
        console.log(files)
        //const {productName, productCategory, productBrand, productBarcode, productPrice, productDescription} = data;
        /*
        fetch("http://localhost:4000/api/products/create", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: 'include',
            body: JSON.stringify({
                image: files,
                name: productName,
                description: productDescription,
                brand: productBrand,
                price: productPrice,
                barcode: productBarcode,
                category: productCategory
            })
        })
        .then(async res => {
            if(!res.ok){
                const errorMsg = await res.text()
                notify(errorMsg)
            }

            const successMsg = await res.text()
            notify(successMsg)
        })
        */
    }

    const uploadImg = async(e) =>{
        const file = e.target.files[0];
        if(file){
            console.log("e---image", files, images)
        }

        setImages([...images, (await readFileAsync(file))])
        setFiles([...files, file])
    }

    //function to read the file using promises
    const readFileAsync = (file) =>{
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () =>{
                resolve({
                    id: uuid(),
                    url: reader.result,
                    type: "image"
                })
            }

            reader.onerror = reject;
            reader.readAsDataURL(file)
        })
    }

    const handleSaveImg = () =>{
        console.log(files)
    }





  return (
    <form
        className='max-w-xl m-auto py-10 mt-6 px-12'
        onSubmit={handleSubmit(onSubmit)}
    >
        <label className="text-gray-600 font-medium block mt-4">Upload Image</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50
         dark:text-gray-400 focus:outline-none dark:bg-gray-700
         dark:border-gray-600
         dark:placeholder-gray-400" id="productImage" type="file"
         name="productImage"
         accept="image/*"
         {...register('productImage')}
         onChange={uploadImg}
         />


        <label className="text-gray-600 font-medium block mt-4">Product Name</label>
        <input 
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
        id="productName"
        placeholder='Product Name'
        autoFocus
        {...register('productName',{
            required: "Please enter a product name"
        })}
        aria-invalid={errors.productName ? "true" : "false"}
        />
        {errors.productName && <p role="alert" className='text-red-400'> {errors.productName?.message} </p>}

        <label className="text-gray-600 font-medium block mt-4">Product Brand</label>
        <input 
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
        id="productBrand"
        placeholder='Product Brand'
        autoFocus
        {...register('productBrand',{
            required: "Please enter a product brand"
        })}
        aria-invalid={errors.productBrand ? "true" : "false"}
        />
        {errors.productBrand && <p role="alert" className='text-red-400'> {errors.productBrand?.message} </p>}
        
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
        {errors.productDescription && <p role="alert" className='text-red-400'> {errors.productDescription?.message} </p>}

        <button type='submit' className='w-full bg-finsho-purple hover:bg-finsho-purple-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'>Add Product</button>

    </form>
  )
}

export default UploadProductForm