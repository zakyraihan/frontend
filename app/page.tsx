"use client"
import Button from "./components/Button";
import InputText from "./components/InputText";
import Label from "./components/Label";
// import Latihan from "./components/latihan";
import Note from "./components/Note";

const Home = () => {
  return (
    <main className="space-y-5">
      <h1>Hello World</h1>

      <section>
        <Label title="username" htmlFor="username" isRequired />
        <InputText
          id="username"
          name="username"
          value={"ihsanabuhanifah"}
          placeholder="username"
          type="text"
          messageError="Username not empty"
        />
      </section>
      <section>
        <Label title="password" htmlFor="password" isRequired />
        <InputText
          id="password"
          name="password"
          value={"12345678"}
          placeholder="******"
          type="passoword"
        />
      </section>

      <section>
        <Label title="name" htmlFor="name" />
        <InputText
          id="name"
          name="name"
          value={"ihsan"}
          onChange={() => {
            console.log("ok");
          }}
        />
      </section>

      <section className="space-x-5">
        <Button
          title="simpan"
          isDisabled={false}
          variant="solid"
          colorSchema="blue"
        />
         <Button
          title="simpan"
          isDisabled={true}
          variant="solid"
          colorSchema="blue"
        />
        <Button
          title="Update"
          isDisabled={false}
          variant="outline"
          colorSchema="blue"
        />
         <Button
          title="Update"
          isDisabled={true}
          variant="outline"
          colorSchema="blue"
        />
        <Button
          title="Draft"
          isDisabled={false}
          variant="outline"
          colorSchema="green"
        />

        <Button title="batal" isDisabled variant="solid" colorSchema="red" />
        <Button title="batal" isDisabled={false} variant="solid" colorSchema="red" />
      </section>
    </main>
  );
};

export default Home;
