import React from "react";
import * as yup from "yup";

const belajar_yup = () => {
  {
    data: [
      {
        nama: "",
        alamat: "",
        ujian: [
          {
            fisika: "null",
            nilai: "100",
          },
          {
            mtk: "null",
            nilai: "90",
          },
        ],
        test: {
          test1: "wajib",
          test2: "wajib",
        },
      },
    ];
  }

  const ujianSchema = yup.object().shape({
    nilai: yup.number().required(),
    mapel: yup.string().required(),
  });

  const createuser = yup.object().shape({
    nama: yup.string().nullable().required(),
    alamat: yup.string().nullable().required(),
    ujian: yup.array().of(ujianSchema),
    test: yup.object().shape({
      test1: yup.string().nullable().required(),
      test2: yup.string().nullable().required(),
    }),
  });
};

export default belajar_yup;
