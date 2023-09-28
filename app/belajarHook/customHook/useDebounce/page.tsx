// "use client";
// import { useEffect, useRef, useState } from "react";
// import Button from "@/app/components/Button";
// import InputText from "@/app/components/InputText";
// import useDisClosure from "@/hook/useClosure";
// import useDebounce from "@/hook/useDebounce";

// const Home = () => {
//   const [keyword, setKeyword] = useState("");
//   const { isOpen, onOpen, onClose } = useDisClosure();
//   const { debouncedValue } = useDebounce(keyword, 500);
//   return (
//     <section className="h-screen w-screen space-y-5">
//       <Button
//         onClick={onOpen}
//         colorSchema="blue"
//         variant="solid"
//         title="open"
//       />
//       <Button
//         onClick={onClose}
//         colorSchema="red"
//         variant="solid"
//         title="closed"
//       />
//       <InputText
//         value={keyword}
//         onChange={(e) => {
//           setKeyword(e.target.value);
//         }}
//       />

//       {debouncedValue}

//       {isOpen ? <p>Open</p> : <p>Close</p>}
//     </section>
//   );
// };

// export default Home;
