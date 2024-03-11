"use client";
import { useFormik, Form, FormikProvider, getIn } from "formik";
import Link from "next/link";
import * as yup from "yup";
import { RegisterPayload } from "../interface/auth_interface";
import useAuthModule from "../lib/auth_service";
import { useState } from "react";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import Button from "@/components/Button";

export const registerSchema = yup.object().shape({
  nama: yup.string().nullable().default("").required("Wajib isi"),
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

const Register = () => {
  const [isPasswordActive, setIsPasswordActive] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const { useRegister } = useAuthModule();
  const { mutate, isLoading, isError, error } = useRegister();
  const formik = useFormik<RegisterPayload>({
    initialValues: registerSchema.getDefault(),
    enableReinitialize: true,
    onSubmit: (payload) => {
      mutate(payload);
    },
  });
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    resetForm,
    setValues,
    setFieldValue,
  } = formik;
  const errorMessages = isError ? error.response?.data?.message || [] : [];

  const emailError = errorMessages.find((msg: any) => msg.includes("email"));
  const passwordError = errorMessages.find((msg: any) =>
    msg.includes("password")
  );

  return (
    <section className="px-10">
      <div className="flex items-center justify-center  w-full">
        <h1 className="text-3xl text-blue-400">Register</h1>
      </div>

      <div className="flex flex-col mb-8">
        <p>nama: {values.nama}</p>
        <p>email: {values.email}</p>
        <p>password: {values.password}</p>
      </div>

      <FormikProvider value={formik}>
        <Form className="space-y-5" onSubmit={handleSubmit}>
          <section>
            <Label htmlFor="nama" title="Nama" />
            <InputText
              value={values.nama}
              placeholder="Nama"
              id="nama"
              name="nama"
              onChange={(e: any) => {
                setFieldValue("nama", e.target.value);
              }}
              onBlur={handleBlur}
              isError={getIn(errors, "nama")}
              messageError={getIn(errors, "nama")}
            />
          </section>
          <section>
            <Label htmlFor="email" title="Email" />
            <InputText
              value={values.email}
              placeholder="exampel@email.com"
              id="email"
              name="email"
              onChange={(e: any) => {
                setFieldValue("email", e.target.value);
                setIsEmailActive(false);
              }}
              onBlur={handleBlur}
              isError={isEmailActive ? emailError : null}
              messageError={isEmailActive ? emailError : null}
            />
          </section>
          <section>
            <Label htmlFor="password" title="Password" />

            <InputText
              value={values.password}
              placeholder="****"
              id="password"
              name="password"
              type="password"
              onChange={(e: any) => {
                setFieldValue("password", e.target.value);
                setIsPasswordActive(false);
              }}
              onBlur={handleBlur}
              isError={isPasswordActive ? passwordError : null}
              messageError={isPasswordActive ? passwordError : null}
            />
          </section>
          <section>
            <Button
              height="lg"
              title="Register"
              colorSchema="blue"
              isLoading={isLoading}
              isDisabled={isLoading}
              onClick={() => {
                setIsEmailActive(true);
                setIsPasswordActive(true);
              }}
            />
            <Link href={"login"}>
              <Button height="lg" title="HalamanLogin" colorSchema="green" />
            </Link>
          </section>
        </Form>
      </FormikProvider>
    </section>
  );
};

export default Register;
