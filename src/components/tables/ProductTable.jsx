import { useQuery} from "@tanstack/react-query";
import { mainStore } from "../../store/store";
import productsService from "../../features/products/productsService";
import { Spinner, useToast } from "@chakra-ui/react";
import MainLayout from "../layouts/MainLayout";
import { createFailureToast } from "../toasts/toasts";
import { FINSHO_COLORS } from "../../utils/globalStyles";
import { useState } from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable} from "@tanstack/react-table";

const ProductTable = () => {

  const token = mainStore((state) => state.token);
  const toast = useToast()

  const getProducts = async () => {
    const products = await productsService.getProducts(token)
    return products
  }

 
 const {isLoading, error, data} = useQuery({
  queryKey: ["productListData"],
  queryFn: getProducts
 })

  if(isLoading) return (
    <MainLayout>
      <Spinner 
        thickness="4px"
        speed="0.65s"
        color={FINSHO_COLORS.purple}
        size="xl"
      />
    </MainLayout>
  )

  if(error) {
    const failureToast = createFailureToast(error, error.message)
    toast({
      title: failureToast.title,
      status: failureToast.status,
      description: failureToast.description,
      duration: failureToast.duration
    })
  }

  return (
    <MainLayout>

    </MainLayout>
  )
}

export default ProductTable;