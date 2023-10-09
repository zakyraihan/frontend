import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { BookListFilter } from "@/app/book/interface";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import Select from "@/components/Select";

type FilterProps = {
  params: BookListFilter;
  setParams: Dispatch<SetStateAction<BookListFilter>>; // Perubahan di sini
};

const options = [ // Ubah nama variabel menjadi "options"
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

const Filter: React.FC<FilterProps> = ({ params, setParams }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { // Perubahan di sini
    const { name, value } = e.target;
    setParams((prevParams: BookListFilter) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  return (
    <section className="space-y-2">
      <section>
        <Label title="Title" htmlFor="title" />
        <InputText
          onChange={handleChange}
          value={params.title}
          name="title"
          id="title"
        />
      </section>
      <section>
        <Label title="Author" htmlFor="author" />
        <InputText
          onChange={handleChange}
          value={params.author}
          name="author"
          id="author"
        />
      </section>
      <section>
        <Label title="From Year" htmlFor="from_year" /> {/* Ubah label sesuai dengan properti yang direferensikan */}
        <Select
          onChange={handleChange}
          options={options}
          value={params.from_year}
          name="from_year"
          id="from_year"
        />
      </section>
      <section>
        <Label title="To Year" htmlFor="to_year" /> {/* Ubah label sesuai dengan properti yang direferensikan */}
        <Select
          onChange={handleChange}
          options={options}
          value={params.to_year}
          name="to_year"
          id="to_year"
        />
      </section>
    </section>
  );
};

export default Filter;
