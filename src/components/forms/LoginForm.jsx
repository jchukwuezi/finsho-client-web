import React from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { mainStore } from "../../store/store";
import {notify} from "../components/toasts/toasts"


const LoginForm = () => {
  const navigate = useNavigate();
  const REACT_APP_BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;
  const setToken = mainStore((state) => state.setToken)

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm();

  const onSubmit = async (data) => {
    const {shopEmail, shopPassword } = data;

    const response = await fetch(`${REACT_APP_BACKEND_API_URL}/shops/login`, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        redentials: 'include',
        body: JSON.stringify({
            email: shopEmail,
            password: shopPassword
        })
    })

    const resData = await response.json()
    //console.log("Response data " + JSON.stringify(resData));
    if (response.ok){
      const {token, message} = resData;
      setToken(token);
      //notify(message);
      navigate("/dashboard")
    }
    else{
      const errorToast = await response.text()
      notify(errorToast)
    }
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mt={4}>
        <FormLabel> Shop Email </FormLabel>
        <Input
          id="shopEmailLogin"
          type="email"
          placeholder="test@example.com"
          autoFocus
          {...register("shopEmail", {
            required: "Please enter an email",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
          aria-invalid={errors.shopEmail ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.shopEmail && errors.shopEmail?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Password </FormLabel>
        <Input
          id="shopPasswordLogin"
          type="password"
          autoFocus
          {...register("shopPassword", {
            required: "Please enter a password",
            minLength: {
              value: 6,
              message: "Miniumum password length is 6 characters",
            },
          })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.password && errors.password?.message}
        </FormErrorMessage>
      </FormControl>


      <Button mt={4} colorScheme="purple" isLoading={isSubmitting} type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
