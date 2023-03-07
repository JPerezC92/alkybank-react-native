import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button, Input, Spinner, Text } from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { ImageProps } from "react-native-svg";
import { UserNodeRepository } from "../../../users/repos/UsersRepository";
import { UserCreate } from "../../../users/schemas";
import { FormRegister } from "../../schemas";

const LoadingIndicator: RenderProp<Partial<ImageProps>> = (props) => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <Spinner size="small" />
  </View>
);

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormRegister),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const registers = useMutation(
    ["REGISTER"],
    async (userCreate: UserCreate) => {
      const res = await UserNodeRepository().register(userCreate);
      console.log(res);
      return res;
    }
  );
  const ref = React.useRef<Input>(null);
  const onSubmit = (data: UserCreate) => registers.mutate(data);

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          marginHorizontal: 20,
        }}
      >
        <Text category="h1" style={{ textAlign: "center", marginBottom: 10 }}>
          Register
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                ref.current?.focus();
              }}
              label="First name"
            />
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              ref={ref}
              onChangeText={onChange}
              value={value}
              label="Last name"
            />
          )}
          name="lastName"
        />
        {errors.lastName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Email"
            />
          )}
          name="email"
        />
        {errors.email && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Password"
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Confirm password"
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && <Text>This is required.</Text>}

        <Button
          onPress={handleSubmit(onSubmit)}
          disabled={registers.isLoading}
          accessoryRight={LoadingIndicator}
        >
          Register
        </Button>
      </View>
    </>
  );
};
