import InputText from "@/components/InputText";
import React from "react";
import * as yup from "yup";

export const lupaPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .default("")
    .email("Gunakan format email")
    .required("Wajib isi"),
});

const LupaPasswordPage = () => {
  return (
    <div>
      <div className="h-[40vh]"></div>
      <InputText name="email" id="email" value={"ihsan@gmail.com"} />
    </div>
  );
};

export default LupaPasswordPage;
