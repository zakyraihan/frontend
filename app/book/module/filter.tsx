import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";
import { BookListFilter } from "@/app/book/interface";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import Select from "@/components/Select";

type FilterProps = {
  params: BookListFilter;
  setParams: Dispatch<SetStateAction<any>>;
};

const option = [
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
  const handleChange = (e: ChangeEvent<any>) => {
    setParams((params: BookListFilter) => {
      return {
        ...params,
        [e.target.name]: e.target.value,
      };
    });

    if (e.target.name === "to_year") {
      if (params.from_year ?? 0 > e.target.value) {
        return alert(
          `pilih sampai tahun lebih atau sama dengan tahun ${params.from_year}`
        );
      }
    }
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
        <Label title="from_year" htmlFor="from_year" />
        <Select
          onChange={handleChange}
          options={option}
          value={params.from_year}
          name="from_year"
          id="from_year"
        />
      </section>
      <section>
        <Label title="to_year" htmlFor="to_year" />
        <Select
          onChange={handleChange}
          options={option}
          value={params.to_year}
          name="to_year"
          id="to_year"
          disabled={params.from_year === ""}
        />
      </section>
    </section>
  );
};

export default Filter;
