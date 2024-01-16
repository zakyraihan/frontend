"use client";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import Select from "@/components/Select";
import { useFormik, Form, FormikProvider } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { ProdukCreatePayload } from "../interface";
import useProdukModule from "../lib";

export const createProdukSchema = yup.object().shape({
  nama_produk: yup.string().nullable().default("").required("Wajib isi"),
  harga_produk: yup
    .number()
    .nullable()
    .default(undefined)
    .required("Wajib isi"),
  kategori_produk: yup.string().nullable().default("").required("Wajib isi"),
  tahun_pembuatan: yup.number().nullable().required("Wajib isi"),
});
export const option = [
  {
    value: 2020,
    label: "2020",
  },
  {
    value: 2021,
    label: "2021",
  },
  {
    value: 2022,
    label: "2022",
  },
  {
    value: 2023,
    label: "2023",
  },
];

export const kategori = [
  {
    value: "handphone",
    label: "handphone",
  },
  {
    value: "laptop",
    label: "laptop",
  },
  {
    value: "mobil",
    label: "mobil",
  },
  {
    value: "motor",
    label: "motor",
  },
];

const CreateBook = () => {
  const router = useRouter();
  const { useCreateBook } = useProdukModule();
  const { mutate, isLoading } = useCreateBook();
  const onSubmit = async (values: ProdukCreatePayload) => {
    router.push("/produk");
    mutate(values, {
      onSuccess: () => {
        resetForm();
        setValues(createProdukSchema.getDefault());
      },
    });
  };
  const formik = useFormik<ProdukCreatePayload>({
    initialValues: createProdukSchema.getDefault(),
    validationSchema: createProdukSchema,
    enableReinitialize: true,
    onSubmit: onSubmit,
  });

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    handleBlur,
    values,
    errors,
    resetForm,
    setValues,
  } = formik;

  return (
    <section className="flex items-center justify-center h-screen">
      <section className="w-1/2">
        <Link href={"/produk"}>
          <span className="flex items-center">
            <ArrowLongLeftIcon className="h-5 w-5 mr-2 hover:text-green-400" />
            Kembali
          </span>
        </Link>
        <h2 className="text-xl font-bold text-green-400">Tambah Produk</h2>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-5 items-center">
              <section>
                <Label htmlFor="nama_produk" title="nama produk" />
                <InputText
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setFieldValue("nama_produk", e.target.value);
                  }}
                  value={values.nama_produk}
                  placeholder="nama_produk"
                  id="nama_produk"
                  name="nama_produk"
                  isError={!!errors.nama_produk}
                  messageError={errors.nama_produk}
                />
              </section>
              <section>
                <Label htmlFor="harga_produk" title="harga produk" />
                <InputText
                  onChange={handleChange}
                  value={values.harga_produk}
                  placeholder="harga_produk"
                  id="harga_produk"
                  name="harga_produk"
                  isError={!!errors.harga_produk}
                  messageError={errors.harga_produk}
                />
              </section>
            </div>
            <div className="flex gap-5 items-center">
              <section>
                <Label htmlFor="tahun_pembuatan" title="tahun_pembuatan" />
                <Select
                  onChange={handleChange}
                  value={values.tahun_pembuatan}
                  id="tahun_pembuatan"
                  name="tahun_pembuatan"
                  options={option}
                  isError={!!errors.tahun_pembuatan}
                  messageError={errors.tahun_pembuatan}
                />
              </section>
              <section>
                <Label htmlFor="kategori_produk" title="kategori" />
                <Select
                  onChange={handleChange}
                  value={values.kategori_produk}
                  id="kategori_produk"
                  name="kategori_produk"
                  options={kategori}
                  isError={!!errors.kategori_produk}
                  messageError={errors.kategori_produk}
                />
              </section>
            </div>
            <section className="flex gap-5">
              <Button
                type="submit"
                height="sm"
                title="Simpan"
                colorSchema="green"
              />
              <Button
                type="button"
                height="sm"
                title="Cancel"
                colorSchema="red"
                onClick={() => {
                  resetForm();
                }}
              />
            </section>
          </Form>
        </FormikProvider>
      </section>
    </section>
  );
};

export default CreateBook;
