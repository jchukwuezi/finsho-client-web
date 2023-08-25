import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
//import { notify } from "../toasts/toasts";
import { useNavigate } from "react-router-dom";
import { FINSHO_COLORS } from "../../utils/globalStyles";

const UploadProductForm = () => {
  const [image, setImage] = useState("")

  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const {
      productName,
      productBrand,
      productCategory,
      productBarcode,
      productPrice,
      productDescription,
    } = data;
    alert(JSON.stringify(data));
  };

  const handleImage = (e) =>{
    const file = e.target.files[0]
    setFileToBase(file)
    console.log(file)
  }

  const setFileToBase = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
        setImage(reader.result.toString())
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel> Upload Product Image </FormLabel>
        <Input
          type="file"
          id="productImage"
          placeholder="Product Image"
          autoFocus
          accept="image/*"
          {...register('productImage')}
          onChange={handleImage}
        />
        <FormErrorMessage>
          {errors.productName && errors.productName?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Product Name </FormLabel>
        <Input
          type="text"
          id="productName"
          placeholder="Product Name"
          autoFocus
          {...register("productName", {
            required: "Please enter a product name",
          })}
          aria-invalid={errors.productName ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.productName && errors.productName?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Product Brand </FormLabel>
        <Input
          type="text"
          id="productBrand"
          placeholder="Product Brand"
          autoFocus
          {...register("productBrand", {
            required: "Please enter a product brand",
          })}
          aria-invalid={errors.productBrand ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.productBrand && errors.productBrand?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Product Category </FormLabel>
        <Input
          type="text"
          id="productCategory"
          placeholder="Product Category"
          autoFocus
          {...register("productCategory", {
            required: "Please enter a product category",
          })}
          aria-invalid={errors.productCategory ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.productCategory && errors.productCategory?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Product Barcode </FormLabel>
        <Input
          type="text"
          id="productBarcode"
          placeholder="Barcode"
          autoFocus
          {...register("productBarcode", {
            required: "Please enter a product barcode",
          })}
          aria-invalid={errors.productBarcode ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.productBarcode && errors.productBarcode?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Product Price </FormLabel>
        <Input
          type="number"
          id="productPrice"
          step="0.01"
          placeholder="€"
          autoFocus
          {...register("productPrice", {
            required: "Please enter a product price",
          })}
          aria-invalid={errors.productPrice ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.productPrice && errors.productPrice?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Product Description </FormLabel>
        <Textarea
          size="sm"
          autoFocus
          {...register("productDescription", {
            required: "SPlease enter a product description",
          })}
          aria-invalid={errors.productDescription ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.productDescription && errors.productDescription?.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        mt={4}
        bgColor={FINSHO_COLORS.purple}
        color={FINSHO_COLORS.white}
        isLoading={isSubmitting}
        type="submit"
      >
        Upload
      </Button>
    </form>
  );
};

export default UploadProductForm;
