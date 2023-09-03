import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Checkbox,
  Select,
  useToast
} from "@chakra-ui/react";
import { FINSHO_COLORS } from "../../utils/globalStyles";
import productsService from "../../features/products/productsService";
import { mainStore } from "../../store/store";
import { createSuccessToast, createFailureToast } from "../toasts/toasts";

const UploadProductForm = () => {
  const [image, setImage] = useState("");
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const token = mainStore((state) => state.token);

  const toast = useToast()

  const onSubmit = async (data) => {
    const {
      title,
      manufacturer,
      barcode,
      price,
      unitOfMeasure,
      weight,
      restricted,
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
      restricted: restricted,
    };

    const productAdded = await productsService.addProduct(token, productData);

    if(productAdded.status === 200){
      const successToast = createSuccessToast("Success with adding Product", productAdded.message)
      toast({
        title: successToast.title,
        description: successToast.description,
        status: successToast.status,
        duration: successToast.duration
      })
    }

    else{
      const failureToast = createFailureToast("Error with adding Product", productAdded.message)
      toast({
        title: failureToast.title,
        description: failureToast.description,
        status: failureToast.status,
        duration: failureToast.duration
      })
    }
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
        <Checkbox
          id="restricted"
          {...register("restricted")}
        >Is this product restricted? 18+</Checkbox>
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
          <Select
            placeholder="Product Unit of Measure"
            {...register("unitOfMeasure", {
              required: "Please select a unit of measure",
            })}
            aria-invalid={errors.unitOfMeasure ? "true" : "false"}
          >
            <option value='kilogrammes'> kilogrammes (KG) </option>
            <option value='grammes'> grammes (G) </option>
            <option value='litres'> litres (L) </option>
            <option value='millilitres'> millilitres (ML) </option>
            <option value='other'> other </option>
          </Select>
        <FormErrorMessage>
          {errors.unitOfMeasure && errors.unitOfMeasure?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Weight </FormLabel>
        <Input
          type="number"
          id="weight"
          placeholder="Product Weight"
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
