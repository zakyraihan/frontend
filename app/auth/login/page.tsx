"use client";

import { useFormik, Form, FormikProvider, getIn } from "formik";

import * as yup from "yup";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import Button from "@/components/Button";
import Link from "next/link";
import useAuthModule from "../lib/auth_service";
import { LoginPayload } from "../interface/auth_interface";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .default("")
    .email("Gunakan format email")
    .required("Wajib isi"),
  password: yup
    .string()
    .nullable()
    .default("")
    .required("Wajib isi")
    .min(8, "Minimal 8 karakater"),
});

const Login = () => {
  const { useLogin } = useAuthModule();
  const { mutate, isLoading } = useLogin();
  const formik = useFormik<LoginPayload>({
    initialValues: registerSchema.getDefault(),
    validationSchema: registerSchema,
    enableReinitialize: true,
    onSubmit: (payload) => {
      mutate(payload);
    },
  });
  const { handleChange, handleSubmit, handleBlur, values, errors } = formik;

  return (
    <section className="px-10">
      <div className="flex items-center justify-center w-full">
        <h1 className="text-3xl text-blue-400">Login</h1>
      </div>
      <FormikProvider value={formik}>
        <Form className="space-y-5  " onSubmit={handleSubmit}>
          <section>
            <Label htmlFor="email" title="Email" />
            <InputText
              value={values.email}
              placeholder="exampel@email.com"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={getIn(errors, "email")}
              messageError={getIn(errors, "email")}
            />
          </section>
          <section>
            <Label htmlFor="password" title="Password" />

            <InputText
              value={values.password}
              placeholder="**********"
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={getIn(errors, "password")}
              messageError={getIn(errors, "password")}
            />
          </section>
          <section>
            <Button
              title="Login"
              colorSchema="blue"
              isLoading={isLoading}
              isDisabled={isLoading}
            />
            <div className="flex flex-row justify-center gap-4 mt-5">
              <Link href={"register"}>
                <Button title="Register" colorSchema="green" />
              </Link>

              <Link href={"lupa-password"}>
                <Button title="Lupa password" colorSchema="green" />
              </Link>

              <section>
                <Button title="Google" colorSchema="red" />
              </section>
            </div>
          </section>
        </Form>
      </FormikProvider>
    </section>
  );
};

export default Login;
