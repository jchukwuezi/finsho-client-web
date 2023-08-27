import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
//import { notify } from "../toasts/toasts";
import { FINSHO_COLORS } from "../../utils/globalStyles";
import productsService from "../../features/products/productsService";

const UploadProductForm = () => {
  const [image, setImage] = useState("");
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const {
      title,
      manufacturer,
      barcode,
      price,
      unitOfMeasure,
      weight,
      restricted
    } = data;
    //alert(JSON.stringify(data));

    const productData = {
      image: image,
      title: title,
      manufacturer: manufacturer,
      barcode: barcode,
      price: price,
      unitOfMeasure: unitOfMeasure,
      weight: weight,
      restricted: restricted
    }

    productsService.addProduct(productData)
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result.toString());
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel> Upload Product Image </FormLabel>
        <Input
          type="file"
          id="image"
          placeholder="Product Image"
          autoFocus
          accept="image/*"
          {...register("productImage")}
          onChange={handleImage}
        />
        <FormErrorMessage>
          {errors.productName && errors.productName?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Title </FormLabel>
        <Input
          type="text"
          id="title"
          placeholder="Product Title"
          autoFocus
          {...register("title", {
            required: "Please enter a product title",
          })}
          aria-invalid={errors.title ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.title && errors.title?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Manufacturer </FormLabel>
        <Input
          type="text"
          id="manufacturer"
          placeholder="Product Manufacturer"
          autoFocus
          {...register("manufacturer", {
            required: "Please enter a product manufacturer",
          })}
          aria-invalid={errors.manufacturer ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.manufacturer && errors.manufacturer?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Barcode </FormLabel>
        <Input
          type="text"
          id="barcode"
          placeholder="Barcode"
          autoFocus
          {...register("barcode", {
            required: "Please enter a product barcode",
          })}
          aria-invalid={errors.barcode ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.barcode && errors.barcode?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Price </FormLabel>
        <Input
          type="number"
          id="price"
          step="0.01"
          placeholder="€"
          autoFocus
          {...register("price", {
            required: "Please enter a product price",
          })}
          aria-invalid={errors.price ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.price && errors.price?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Unit of Measure </FormLabel>
        <Input
          type="text"
          id="unitOfMeasure"
          placeholder="Please select one of the 5 options"
          autoFocus
          {...register("unitOfMeasure", {
            required: "Please select a unit of measure",
          })}
          aria-invalid={errors.unitOfMeasure ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.unitOfMeasure && errors.unitOfMeasure?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Weight </FormLabel>
        <Input
          type="number"
          id="weight"
          placeholder="Enter the weight of the product"
          autoFocus
          {...register("weight", {
            required: "Please enter a product weight",
          })}
          aria-invalid={errors.price ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.weight && errors.price?.weight}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Is this product restricted (18+)? </FormLabel>
        <Input
          type="text"
          id="restricted"
          placeholder="Please select one of the 5 options"
          autoFocus
          {...register("restricted", {
            required: "Please select a unit of measure",
          })}
          aria-invalid={errors.restricted? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.restricted && errors.restricted?.message}
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
