"use client";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import React from "react";
import * as yup from "yup";
import useAuthModule from "../lib/auth_service";
import { getIn, useFormik, FormikProvider, Form } from "formik";
import { LupaPasswordPayload } from "../interface/auth_interface";

export const lupaPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .default("")
    .email("Gunakan format email")
    .required("Wajib isi"),
});

const Page = () => {
  const { useLupaPw } = useAuthModule();
  const { mutate, isLoading, isError, error } = useLupaPw();
  const formik = useFormik<LupaPasswordPayload>({
    initialValues: lupaPasswordSchema.getDefault(),
    enableReinitialize: true,
    onSubmit: (payload) => {
      mutate(payload);
      console.log(payload);
    },
  });

  const { handleSubmit, handleBlur, values, errors, setFieldValue } = formik;
  return (
    <div>
      <div className="h-[40vh]"></div>
      <FormikProvider value={formik}>
        <Form>
          <InputText
            name="email"
            id="email"
            value={values.email}
            placeholder="email"
            onChange={(e: any) => {
              setFieldValue("email", e.target.value);
            }}
            onBlur={handleBlur}
            isError={getIn(errors, "email")}
            messageError={getIn(errors, "email")}
          />

          <Button
            height="lg"
            colorSchema="blue"
            title="submit"
            isLoading={isLoading}
          />
        </Form>
      </FormikProvider>
    </div>
  );
};

export default Page;
