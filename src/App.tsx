import { FC } from "react";

// type User = {
//   firstName: string;
//   lastName: string;
// };

// const formatUser = (user: User) => {
//   let { firstName, lastName } = user;
//   return firstName + " " + lastName;
// };

// const user: User = {
//   firstName: "Sasha",
//   lastName: "Kiliushin",
// };

// const greetingUser = (user: User) => {
//   if (user) {
//     return <h1>Hello,{formatUser(user)}</h1>;
//   }
//   return <h1>Hello, Stranger</h1>;
// };

// const title: string = "sdfsf";
// const element = <h1>{title}:string</h1>;

// const element = <div>Hello, Sasha!</div>;
// const element = React.createElement("div", "", "Hello");

// type Props = {
//   name: string;
// };

// const Welcome: FC<Props> = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// };

// class Welcome extends React.Component<Props> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       surname: "jehe",
//     };
//   }

//   render() {
//     return <h1>Hello,{this.props.name}</h1>;
//   }
// }

// type Props = {
//   author: {
//     name: string;
//     age: number;
//   };
//   text: string;
//   date: string;
// };

// const Comment: FC<Props> = (props) => {
//   return (
//     <>
//       <div>{props.author.name}</div>
//       <div>{props.author.age}</div>
//       <div>{props.text}</div>
//       <div>{props.date}</div>
//     </>
//   );
// };

// const author = {
//   name: "Sasha",
//   age: 25,
// };

import s from "./App.module.css";

type Props = {
  time: string;
};

const Clock: FC<Props> = (props) => {
  return <h2 className={s.Heh}>It's + {props.time}</h2>;
};

const Tick = () => {
  return <Clock time={new Date().toLocaleTimeString()} />;
};
const App: FC = () => {
  return <Tick />;
};

export default App;
