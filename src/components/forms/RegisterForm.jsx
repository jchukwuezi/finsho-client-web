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
import { notify } from "../toasts/toasts";
import { useNavigate } from "react-router-dom";
import { FINSHO_COLORS } from "../../utils/globalStyles";

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    const { shopName, shopAddress, shopEmail, shopIban, shopAccountName, shopPassword } = data;
    fetch("http://localhost:4000/api/shops/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: shopName,
        location: shopAddress,
        accountName: shopAccountName,
        email: shopEmail,
        iban: shopIban,
        password: shopPassword,
      }),
    }).then(async (res) => {
      if (!res.ok) {
        const errorMsg = await res.text();
        //notify(errorMsg);
      }

      const successMsg = await res.text();
      notify(successMsg);

      /*
      setTimeout(() => {
        navigate("/login");
      }, 5000);
      */

    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.shopName}>
        <FormLabel> Shop Name </FormLabel>
        <Input
          type="text"
          placeholder="Bill's Grocer"
          id="shopName"
          autoFocus
          {...register("shopName", {
            required: "Please enter a shop name",
          })}
          aria-invalid={errors.shopName ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.shopName && errors.shopName?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Shop Address </FormLabel>
        <Input
          type="text"
          id="shopAddress"
          placeholder="42 O'Connell Street, Dublin 1, Co. Dublin."
          autoFocus
          {...register("shopAddress", {
            required: "Please enter a shop location",
          })}
          aria-invalid={errors.shopAddress ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.shopAddress && errors.shopAddress?.message}
        </FormErrorMessage>
        <FormHelperText>
          {" "}
          Entering the most accurate location helps Finsho shoppers find your
          store.
        </FormHelperText>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Shop Email </FormLabel>
        <Input
          id="shopEmail"
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
        <FormLabel> Shop Iban </FormLabel>
        <Input
          type="text"
          id="shopIban"
          placeholder="Eg: IE30BOFI900017482251"
          autoFocus
          {...register("shopIban", {
            required: "Please enter the iban of your shop",
          })}
          aria-invalid={errors.shopIban ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.shopIban && errors.shopIban?.message}
        </FormErrorMessage>
        <FormHelperText>
          {" "}
          Entering your Iban allows you to be able to collect payments from your
          shoppers. store.
        </FormHelperText>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Shop Acccount Name </FormLabel>
        <Input
          type="text"
          id="shopAccountName"
          placeholder="Bill's Grocer"
          autoFocus
          {...register("shopAccountName", {
            required: "Please enter the name of the bank account associated your shop",
          })}
          aria-invalid={errors.shopAccountName ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.shopAccountName && errors.shopAccountName?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel> Password </FormLabel>
        <Input
          id="shopPassword"
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

      <FormControl mt={4}>
        <FormLabel> Confirm Password </FormLabel>
        <Input
          id="confirmedPassword"
          type="password"
          {...register("confirmedPassword", {
            required: true,
            validate: (val) => {
              if (watch("shopPassword") !== val) {
                return "Passwords do not match";
              }
            },
          })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.confirmedPassword && errors.confirmedPassword?.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        mt={4}
        bgColor={FINSHO_COLORS.purple}
        color={FINSHO_COLORS.white}
        isLoading={isSubmitting}
        type="submit"
      >
        Create Account
      </Button>
    </form>
  );
};

export default RegisterForm;
