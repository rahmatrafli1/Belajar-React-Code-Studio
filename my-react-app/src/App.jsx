// import React from "react";
import Button from "./components/elements/Button";

// // Cara 1 Menggunakan class component:
// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold text-white rounded-md bg-slate-800">
//         Klik Saya
//       </button>
//     );
//   }
// }

// // Cara 2 Menggunakan function component:
// function ButtonBlack() {
//   return (
//     <button className="h-10 px-6 font-semibold text-white bg-black rounded-md">
//       Klik Saya
//     </button>
//   );
// }

// // Cara 3 Menggunakan arrow function component:
// const ButtonPink = () => {
//   return (
//     <button className="h-10 px-6 font-semibold text-white bg-red-400 rounded-md">
//       Klik Saya
//     </button>
//   );
// };

// Cara 4 menggunakan properti:
// const ButtonAja = (props) => {
//   // eslint-disable-next-line react/prop-types
//   const { variant = "bg-slate-500", text = "..." } = props;
//   return (
//     <button
//       className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
//     >
//       {text}
//     </button>
//   );
// };

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="flex gap-x-2">
        {/* <Button />
        <Button />
        <Button />
        <ButtonBlack />
        <ButtonPink /> */}
        <Button variant="bg-red-800" text="Login" />
        <Button variant="bg-green-800" text="Register" />
        <Button variant="bg-black" text="Klik Saya" />
        <Button />
      </div>
    </div>
  );
}

export default App;
