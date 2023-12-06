// import React from "react";

// // Cara 1 Menggunakan class component:
// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-slate-800 text-white">
//         Klik Saya
//       </button>
//     );
//   }
// }

// // Cara 2 Menggunakan function component:
// function ButtonBlack() {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
//       Klik Saya
//     </button>
//   );
// }

// // Cara 3 Menggunakan arrow function component:
// const ButtonPink = () => {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-red-400 text-white">
//       Klik Saya
//     </button>
//   );
// };

// Cara 4 menggunakan properti:
const ButtonAja = (props) => {
  // eslint-disable-next-line react/prop-types
  const { variant = "bg-slate-500", text = "..." } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
    >
      {text}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-500 min-h-screen items-center">
      <div className="flex gap-x-2">
        {/* <Button />
        <Button />
        <Button />
        <ButtonBlack />
        <ButtonPink /> */}
        <ButtonAja variant="bg-red-800" text="Login" />
        <ButtonAja variant="bg-green-800" text="Register" />
        <ButtonAja variant="bg-black" text="Klik Saya" />
        <ButtonAja />
      </div>
    </div>
  );
}

export default App;
