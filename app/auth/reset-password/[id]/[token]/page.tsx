"use client";
import { ResetPassword } from "@/app/auth/interface/auth_interface";
import useAuthModule from "@/app/auth/lib/auth_service";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { Form, FormikProvider, getIn, useFormik } from "formik";
import React from "react";
import * as yup from "yup";

type Params = {
  params: {
    id: string;
    token: string;
  };
};

export const lupaPasswordSchema = yup.object().shape({
  new_password: yup
    .string()
    .nullable()
    .default("")
    .email("Gunakan format email")
    .required("Wajib isi"),
});

const ResetPW = ({ params }: Params) => {
  const { id, token } = params;

  console.log(id);
  console.log(token);

  const { useResetPassword } = useAuthModule();
  const { mutate, isLoading, isError, error } = useResetPassword(id, token);
  const formik = useFormik<ResetPassword>({
    initialValues: lupaPasswordSchema.getDefault(),
    enableReinitialize: true,
    onSubmit: (payload: any) => {
      mutate(payload);
      console.log(payload);
    },
  });

  const { handleSubmit, handleBlur, values, errors, setFieldValue } = formik;

  return (
    <div>
      <FormikProvider value={formik}>
        <Form>
          <InputText
            name="new_password"
            id="new_password"
            value={values.new_password}
            placeholder="new_password"
            onChange={(e: any) => {
              setFieldValue("new_password", e.target.value);
            }}
            onBlur={handleBlur}
            isError={getIn(errors, "new_password")}
            messageError={getIn(errors, "new_password")}
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

export default ResetPW;
