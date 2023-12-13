"use client";
import Button from "@/components/Button";
import { DeleteButton } from "@/components/ButtonAction";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import { isError } from "@tanstack/react-query";
import {
  useFormik,
  Form,
  FormikProvider,
  getIn,
  ArrayHelpers,
  FieldArray,
} from "formik";
import * as yup from "yup";

const defaulUserArray = {
  nama: "",
  alamat: "",
  ujian: [
    {
      mapel: "",
      nilai: null,
    },
  ],
  tes: {
    tes1: "",
    tes2: "",
  },
};

const ujianSchema = yup.object().shape({
  nilai: yup.number().nullable().default(null).required("nilai wajib di isi"),
  mapel: yup.string().nullable().default("").required("mapel wajib di isi"),
});

const createUjian = yup
  .object()
  .shape({
    nama: yup.string().nullable().default("").required("nama wajib di isi"),
    alamat: yup.string().nullable().default("").required("alamat wajib di isi"),
    ujian: yup.array().of(ujianSchema),
    tes: yup.object().shape({
      tes1: yup.string().nullable().default("").required("test 1 wajib di isi"),
      tes2: yup.string().nullable().default("").required("test 2 wajib di isi"),
    }),
  })
  .default(defaulUserArray);

const user = () => {
  const formik = useFormik({
    initialValues: createUjian.getDefault(),
    validationSchema: createUjian,
    enableReinitialize: true,
    onSubmit: () => {},
  });

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    handleBlur,
    values,
    errors,
    touched,
  } = formik;

  return (
    <section className="flex items-center  justify-center w-full h-full">
      <section className="w-1/3">
        <h2 className="text-xl font-bold text-gray-500">Create User</h2>
        {JSON.stringify(values)}
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="space-y-5">
            <section>
              <Label htmlFor="nama" title="nama" />
              <InputText
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nama}
                placeholder="Penulis Buku"
                id="nama"
                name="nama"
                isError={!!errors.nama}
                messageError={errors.nama}
              />
            </section>
            <section>
              <Label htmlFor="alamat" title="alamat" />
              <InputText
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.alamat}
                placeholder="Penulis Buku"
                id="alamat"
                name="alamat"
                isError={!!errors.alamat}
                messageError={errors.alamat}
              />
            </section>
            <FieldArray
              name={"ujian"}
              render={(arrayHelpers: ArrayHelpers) => (
                <>
                  {values &&
                    values?.ujian?.map((value, index) => (
                      <>
                        <section
                          key={index}
                          className="space-y-2 shadow-lg p-3"
                        >
                          <section className="flex items-center justify-between">
                            <p className="font-semibold">Ujian</p>
                            <DeleteButton
                              onClick={() => arrayHelpers.remove(index)}
                            />
                          </section>
                          <section className="flex flex-row gap-3">
                            <section>
                              <Label
                                htmlFor={`ujian[${index}]nilai`}
                                title="nilai"
                              />
                              <InputText
                                value={value.nilai || undefined}
                                placeholder="nilaimu"
                                id={`ujian[${index}]nilai`}
                                name={`ujian[${index}]nilai`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isError={getIn(errors?.ujian?.[index], "nilai")}
                                messageError={getIn(
                                  errors?.ujian?.[index],
                                  "nilai"
                                )}
                              />
                            </section>
                            <section>
                              <Label
                                htmlFor={`ujian[${index}]mapel`}
                                title="mapel"
                              />
                              <InputText
                                value={value.mapel}
                                placeholder="mapel"
                                id={`ujian[${index}]mapel`}
                                name={`ujian[${index}]mapel`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isError={getIn(errors?.ujian?.[index], "mapel")}
                                messageError={getIn(
                                  errors?.ujian?.[index],
                                  "mapel"
                                )}
                              />
                            </section>
                          </section>
                        </section>
                      </>
                    ))}
                  <section>
                    <Button
                      title="tambah"
                      colorSchema="blue"
                      onClick={() =>
                        arrayHelpers.push(ujianSchema.getDefault())
                      }
                    />
                  </section>
                </>
              )}
            />
            <section className="flex flex-row gap-3">
              <section>
                <Label htmlFor="test1" title="test1" />
                <InputText
                  value={values.tes.tes1}
                  placeholder="test1"
                  id={"test1"}
                  name={"test1"}
                  onChange={(e) => {
                    setFieldValue(`data[${values}]test`, e.target.value);
                  }}
                  onBlur={handleBlur}
                  isError={!!errors.tes?.tes1}
                  messageError={errors.tes?.tes1}
                />
              </section>
              <section>
                <Label htmlFor="test2" title="test2" />
                <InputText
                  value={values.tes.tes2}
                  placeholder="test2"
                  id={"test2"}
                  name={"test2"}
                  onChange={(e) => {
                    setFieldValue(`data[${values}]test`, e.target.value);
                  }}
                  onBlur={handleBlur}
                  isError={!!errors.tes?.tes2}
                  messageError={errors.tes?.tes2}
                />
              </section>
            </section>

            <section>
              <Button
                width="lg1"
                title="Simpan"
                colorSchema="blue"
                type="submit"
                onClick={() => {
                  console.log(values);
                }}
              />
            </section>
          </Form>
        </FormikProvider>
      </section>
    </section>
  );
};

export default user;
