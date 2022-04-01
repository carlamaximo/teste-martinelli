// import React, {
  
//   useState,
//   useEffect,
//   useMemo,
//   useContext,
//   useCallback,
//   useReducer,
//   useRef,
// } from 'react';

// interface IUser {
//   name: string,
//   login: string,
//   avatar_url: string,
// }

// const App:React.FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null); // usando a tipagem de um html input element
//   const [users, setUsers] = useState<[IUser]>();

//   const names = useMemo(() => users?.map((user) => user.name).join(', ') || '', [users]);

//   // inferencia de tipos com useMemo e useCallback

//   async function loadData() {
//     const response = await fetch('https://api.github.com/users/carlamaximo');
//     const data = await response.json();

//     setUsers(data);
//   }

//   const greeting = useCallback(
//     (user: IUser) => alert(`Hello${names}`),
//     [names]
//   )
//   function TextInputWithFocusButton() {
//     const inputEl = useRef(null);
//     const onButtonClick = () => {
//       // `current` aponta para o evento de `focus` gerado pelo campo de texto
//       inputEl.current?.focus();
//     };
//   }

//   return (
//         <>
//           <input ref={inputEl} type="text" />
//           <button onClick={onButtonClick}>Focus no input</button>
//         </>
//   );
// }

// export default App;