import React, {
  ChangeEventHandler,
  Context,
  FC,
  FormEvent,
  FormEventHandler,
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useId,
} from "react";

import ReactDOM from "react-dom";
import s from "./App.module.css";

// type Props = {};
// type State = {
//   time: string;
// };

// class Clock extends React.Component<Props, State> {
//   timerId: NodeJS.Timer | undefined;

//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       time: new Date().toLocaleTimeString(),
//     };
//   }

//   componentDidMount() {
//     this.timerId = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     if (this.timerId === undefined) return;
//     clearInterval(this.timerId);
//   }

//   tick() {
//     this.setState({ time: new Date().toLocaleTimeString() });
//   }

//   render() {
//     return <h2 className={s.Heh}>It's {this.state.time}</h2>;
//   }
// }

// const Form: FC = () => {
//   const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     alert("Sumbitted");
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <label>Please enter your age</label>
//       <input></input>
//       <fieldset>
//         <legend>Your music</legend>
//         <select>
//           <option>Indie</option>
//           <option>Alt-rock</option>
//         </select>
//       </fieldset>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// type Props = {};
// type State = {
//   isToggleOn: boolean;
// };

// class Toggle extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = { isToggleOn: false };
//     // this.changeToggle = this.changeToggle.bind(this);
//   }
//   changeToggle() {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }

//   render() {
//     return (
//       <>
//         <div>Click this button</div>
//         <button onClick={() => this.changeToggle()} type="button">
//           Change toggle
//         </button>
//         <div>Toggle status is {this.state.isToggleOn.toString()}</div>
//       </>
//     );
//   }
// }

///////////////////////////////////////////////
// type Props = {};
// type Props2 = { Logged: boolean };
// type State = {
//   isLogged: boolean;
// };

// const UserAdress: FC<Props2> = ({ Logged }) => {
//   if (!Logged) {
//     return null;
//   } else {
//     return <div>Danilov</div>;
//   }
// };

// class LoginControl extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = { isLogged: false };
//   }
//   handleLogIn() {
//     this.setState({ isLogged: true });
//   }

//   handleLogOut() {
//     this.setState({ isLogged: false });
//   }

//   render() {
//     let greeting = () => {
//       if (this.state.isLogged) {
//         return <h1>Welcome, Sasha!</h1>;
//       } else {
//         return <h1>Hi, anonymous</h1>;
//       }
//     };

//     let button = () => {
//       return (
//         <button
//           onClick={() => {
//             this.state.isLogged ? this.handleLogOut() : this.handleLogIn();
//           }}
//           type="button"
//         >
//           {!this.state.isLogged && "Login"}
//           {this.state.isLogged && "Log Out"}
//         </button>
//       );
//     };

//     return (
//       <>
//         <UserAdress Logged={this.state.isLogged} />
//         {greeting()}
//         {button()}
//         <div>The user is logged in : {this.state.isLogged ? "Yes" : "No"}</div>
//       </>
//     );
//   }
// }

// type Props = {
//   list: (number | undefined)[];
// };
// const NumbersList: FC<Props> = ({ list }) => {
//   const listMapped = list.map((listItem, i) => <li key={i}>{listItem}</li>);
//   return <div>{listMapped}</div>;
// };

// const list = [1, 4, 5, , 8, 6, 345, 34234];
// _______________________________________________________________

// type Props = {};
// type State = {
//   isGoing: boolean;
//   numberOfGuests: number;
// };

// class Reservation extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2,
//     };
//   }

//   onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
//     let name = event.target.name;

//     if (name === "isGoing") {
//     console.log(this.state.isGoing);

//     this.setState({
//       [name]: !this.state.isGoing,
//     });
//   }

//   if (name === "numberOfGuests") {
//     const newValue = parseFloat(event.target.value) || 0;
//     this.setState({
//       [name]: newValue,
//     });
//   }
// };

// render() {
// console.log(this.state.isGoing);
// console.log(this.state.numberOfGuests);

// return (
//   <form>
//     <label>
//       Is going:
//       <input
//         name="isGoing"
//         type="checkbox"
//         checked={this.state.isGoing}
//         onChange={(e) => this.onChange(e)}
//       />
//     </label>
//     <br />
//     <label>
//       Number of guests:
//       <input
//         onChange={(e) => this.onChange(e)}
//         name="numberOfGuests"
//         type="number"
//         value={this.state.numberOfGuests}
//           />
//         </label>
//       </form>
//     );
//   }
// }

// const App: FC = () => {
//   return <Reservation />;
// };

// export default App;
//////////////////////////////////////////////////////////////////////
// type PropsVerdict = {
//   celsius: number;
// };

// type Props = {
//   scale: string;
//   temperature: number;
//   onChange: (arg0: number) => void;
// };

// type State = {
//   tempCelsius: number;
// };

// type StateApp = {
//   temperature: number;
//   scale: string;
// };
// ///////
// function toCelsius(fahrenheit: number) {
//   return ((fahrenheit - 32) * 5) / 9;
// }

// function toFahrenheit(celsius: number) {
//   return (celsius * 9) / 5 + 32;
// }

// function tryConvert(temperature: number, convert: (arg0: number) => number) {
//   if (Number.isNaN(temperature)) {
//     return 0;
//   }
//   const output = convert(temperature);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded;
// }

// ///////

// class BoilerVerdict extends React.Component<PropsVerdict> {
//   constructor(props: PropsVerdict) {
//     super(props);
//   }
//   render() {
//     if (this.props.celsius > 100) {
//       return <h1>The water would boil</h1>;
//     } else {
//       return <h1>The water would not boil</h1>;
//     }
//   }
// }

// class Calculator extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//   }

//   render() {
//     const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
//       this.props.onChange(parseFloat(e.target.value));
//     return (
//       <fieldset>
//         <legend>Enter temperature in {this.props.scale}:</legend>
//         <input
//           type="number"
//           onChange={(e) => onChange(e)}
//           value={this.props.temperature}
//         />
//         <BoilerVerdict celsius={this.props.temperature} />
//       </fieldset>
//     );
//   }
// }

// class App extends React.Component<{}, StateApp> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       temperature: 0,
//       scale: "Celsius",
//     };
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
//   }
//   handleCelsiusChange(value: number) {
//     this.setState({
//       temperature: value,
//       scale: "Celsius",
//     });
//   }

//   handleFarenheitChange(value: number) {
//     this.setState({
//       temperature: value,
//       scale: "Farenheit",
//     });
//   }

//   render() {
//     const temperature = this.state.temperature;
//     const scale = this.state.scale;
//     const celcius =
//       scale === "Farenheit" ? tryConvert(temperature, toCelsius) : temperature;
//     const farenheit =
//       scale === "Celsius" ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <>
//         <Calculator
//           scale="Celcius"
//           temperature={celcius}
//           onChange={this.handleCelsiusChange}
//         />
//         ;
//         <Calculator
//           scale="Farenheit"
//           temperature={farenheit}
//           onChange={this.handleFarenheitChange}
//         />
//         ;
//       </>
//     );
//   }
// }

// export default App;
//////////////////////////////////////////////////////////////////////////
// type Props = {
//   color: string;
//   children: any;
// };
// const FancyBorder: FC<Props> = (props) => {
//   return <div className={"FancyBorder" + props.color}>{props.children}</div>;
// };

////////////////////////////////////////////////////////////////////////

// export const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee",
//   },
//   red: {
//     foreground: "#FF0000",
//     background: "#FF0000",
//   },
// };

// type Pr = {
//   children: React.ReactNode;
// };

// type Pr2 = {
//   children: string;
// };
// type ThemedButtonProps = {
//   children: string;
// };
// type ToolbarProps = {};

// const Button: FC<Pr2> = (props) => {
//   return (
//     <ThemeContext.Consumer>
//       {({ theme, onChangeTheme }) => (
//         <button onClick={onChangeTheme} style={{ backgroundColor: theme }}>
//           {props.children}
//         </button>
//       )}
//     </ThemeContext.Consumer>
//   );
// };

// class ThemedButton extends React.Component<ThemedButtonProps> {
//   render() {
//     return <Button>{this.props.children}</Button>;
//   }
// }
// const ThemeContext = React.createContext({
//   theme: themes.red.background,
//   onChangeTheme: () => {},
// });

// const Toolbar: FC<ToolbarProps> = () => {
//   return (
//     <div>
//       <ThemedButton>Change theme from state</ThemedButton>
//     </div>
//   );
// };

// type State = {
//   theme: string;
//   onChangeTheme: () => void;
// };
// class App extends React.Component<{}, State> {
//   constructor(props: {}) {
//     super(props);
//     this.onChangeTheme = () => {
//       this.setState((state) => ({
//         theme:
//           state.theme === themes.light.background
//             ? themes.red.background
//             : themes.light.background,
//       }));
//     };
//     this.onChangeTheme = this.onChangeTheme.bind(this);

//     this.state = {
//       theme: themes.light.background,
//       onChangeTheme: this.onChangeTheme,
//     };
//   }
//   render() {
//     return (
//       <>
//         <ThemeContext.Provider value={this.state}>
//           <Toolbar />
//         </ThemeContext.Provider>
//         <section>
//           <ThemedButton>Derived from context</ThemedButton>
//         </section>
//       </>
//     );
//   }
// }
///////////////////////////////////////////////////////////////////////////////
// type State = {
//   hasError: boolean;
// };

// type ErrorProps = {
//   hasError: boolean;
//   children: React.ReactNode;
// };

// type ButtonProps = {
//   onError: () => void;
// };

// const Button: FC<ButtonProps> = (props) => {
//   return (
//     <button
//       onClick={() => {
//         props.onError();
//       }}
//     >
//       throw Error
//     </button>
//   );
// };

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can also log the error to an error reporting service
//     logErrorToMyService(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }

// class App extends React.Component<{}, State> {
//   render() {
//     return (
//       <ErrorBoundary>
//         <Button />
//       </ErrorBoundary>
//     );
//   }
// }
//////////////////////////////////////////////////
// type Props = {
//   ref: React.ForwardedRef<HTMLButtonElement>;
//   children: string;
// };

// const FancyButton: FC<Props> = React.forwardRef((props, ref) => {
//   return (
//     <>
//       <input ref={ref} value={props.children} />
//       {console.log(ref.current)}
//     </>
//   );
// });
///////////////////////////////////
// type Props = {};
// type FCProps = {
//   WrappedComponent: FC<Props>;
// };

// type LogProps = Component<{}, {}, any>;
// const logProps: (Component: FCProps) => typeof LogProps = (Component) => {
//   class LogProps extends React.Component {
//     componentDidUpdate(prevProps: any) {
//       console.log(prevProps);
//       console.log(this.props);
//     }
//     render() {
//       const ref = React.createRef();
//       return <Component ref={ref} />;
//     }
//   }
//   return LogProps;
// };

// const FancyButton: FC<Props> = React.forwardRef(function MyRefs(props, ref) {
//   MyRefs.displayName = "dsfsdf";
//   return <button ref={ref}>{props}</button>;
// });
// const DataSource = {
//   getComments() {
//     return ["first", "second", "third"];
//   },
//   getBlogPost(id: number) {
//     return "Hehehe" + id;
//   },
// };

// class CommentsRows extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     comments: DataSource.getComments(),
//   };
// }

// componentDidMount() {
//   DataSource.addChangeListener(this.handleChange);
// }
// componentWillUnmount() {
//   DataSource.removeChamgeListener(this.handleChange);
// }
// handleChange() {
//   this.setState({ comments: DataSource.getComments() });
// }

// render() {
//   return (
//     <>
//       {this.state.comments.map((comment: string) => (
//         <div>{comment}</div>
//       ))}
//     </>
//   );
// }
// }

// class BlogPost extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       blogPost: DataSource.getBlogPost(props.id),
//     };
//   }

//   componentDidMount() {
//     DataSource.addChangeListener(this.handleChange);
//   }

//   componentWillUnmount() {
//     DataSource.removeChangeListener(this.handleChange);
//   }

//   handleChange() {
//     this.setState({
//       blogPost: DataSource.getBlogPost(this.props.id),
//     });
//   }

//   render() {
//     return <input value={this.state.blogPost} />;
//   }
// }
// type Props = {
//   WrappedComponent: React.Component;
//   selectData: (DataSource: any, props: {}) => [];
// };

// const WithSubscription: (
//   WrappedComponent: Props,
//   selectData: any
// ) => typeof React.Component = (WrappedComponent, selectData) => {
//   return class Wrapped extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {
//         data: selectData(DataSource, props),
//       };
//     }
//     componentDidMount() {
//       DataSource.addChangeListener(this.handleChange);
//     }

//     componentWillUnmount() {
//       DataSource.removeChangeListener(this.handleChange);
//     }

//     handleChange() {
//       this.setState({
//         data: selectData(DataSource, this.props),
//       });
//     }
//     render() {
//       return <WrappedComponent data={this.state.data} {...this.props} />;
//     }
//   };
// };
/////////////////////////////Move the MOUSE////////////////////////////////////////////
// type PropsMouse = {
//   mouseCoords: {
//     x: number;
//     y: number;
//   };
// };

// type MoveProps = {
//   render: (mouseCoords: { x: number; y: number }) => JSX.Element;
// };
// const Cat: FC<PropsMouse> = ({ mouseCoords }) => {
//   return (
//     <img
//       style={{ position: "absolute", left: mouseCoords.x, top: mouseCoords.y }}
//       src="download.jpeg"
//     />
//   );
// };

// const Coordinates: FC<PropsMouse> = ({ mouseCoords }) => {
//   return (
//     <div>
//       Mouse position is X:{mouseCoords.x} Y:{mouseCoords.y}
//     </div>
//   );
// };

// class MosueMove extends React.Component<MoveProps, PropsMouse["mouseCoords"]> {
//   constructor(props: MoveProps) {
//     super(props);
//     this.state = { x: 0, y: 0 };
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//   }
//   handleMouseMove: MouseEventHandler = (event) => {
//     this.setState({ x: event.clientX, y: event.clientY });
//   };
//   render() {
//     const mouseCoords = this.state;
//     return (
//       <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
//         {this.props.render(mouseCoords)}
//       </div>
//     );
//   }
// }

// class MouseTracker extends React.Component {
//   render() {
//     return (
//       <>
//         <div>Move the mouse!</div>
//         <MosueMove
//           render={(mouseCoords: PropsMouse["mouseCoords"]) => (
//             <Coordinates mouseCoords={mouseCoords} />
//           )}
//         />
//       </>
//     );
//   }
// }

/////////////////////////////Move the MOUSE////////////////////////////////////////////
import { useState } from "react";

// const Example: FC = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `clicked ${count} times`;
//   });
//   const countChange = () => {
//     setCount((count) => count + 1);
//   };
//   return <div onClick={countChange}>This is {count}</div>;
// };

// const Status = () => {
//   const useStatus = (id) => {
//     const [isOnline, setStatus] = useState(false);
//     const onChange = (status) => {
//       setStatus(status.isOnline);
//     };
//     useEffect(() => {
//       chatAPI.subscribe(id, onChange);
//       return () => {
//         chatAPI.UnSubscribe(id, onChange);
//       };
//     }, [id]);
//     return isOnline;
//   };
//   return isOnline
// };
import { useContext } from "react";

// const ThemeContext = React.createContext("white");

// const Wrapper = () => {
//   return (
//     <div>
//       <ThemeContext.Provider value="black">
//         <Button></Button>
//       </ThemeContext.Provider>
//     </div>
//   );
// };

// const Button = () => {
//   const text = useContext(ThemeContext);
//   return <button>{text}</button>;
// };

const MyContext = React.createContext<{
  id: number;
  logName(): void;
}>({
  id: 123,
  logName: () => console.log("21332"),
});

import { useRef } from "react";
const Input: FC = () => {
  const [name, setName] = useState<string>("");

  const id = useId();
  const id1 = useId();

  console.log(id);
  console.log(id1);

  // const { id, logName } = useContext(MyContext);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const onFocus = () => {
    if (inputRef.current === null) return;
    if (!(inputRef.current instanceof HTMLInputElement)) return;
    inputRef.current.focus();
  };

  return (
    <>
      <label onClick={onFocus}>Click to focus</label>
      <input ref={inputRef} />
    </>
  );
};
const App: FC = () => {
  return <Input />;
};

export default App;

// //Above all const NameOfContext = React.createContext('defaultValue')
// //Class components subscribe to a COntext via '
// //static contextType = NameOfContext' inside a class
// //or via 'MyClassName.contextType=NameOfContext' outside a class (after it usually)
// ///////////
// //FC subscribes via '<NameOfContext.Consumer'  ---Requires a function as a child
// //Above should be wrapped in
// //<NameOfContext.Provider value ={x}>
// //class comp should not be wrapped in provider
// //
