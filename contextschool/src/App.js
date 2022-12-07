import logo from './logo.svg';
import './App.css';

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use non Ugly mode
      </label>
    </ThemeContext.Provider>
  )
}

function Form({ children }) {
  const theme = useContext(ThemeContext)
  const className = 'p-' + theme;
  return (
    <Panel title="useContext!">
      <p>Open the console and see what happens when you push the ugly mode button!!!!</p>
      <Button>Sign up</Button>
      <Button>Log in</Button>
      <p className={className}> notice that the class-names for the elements are changing dynaically because of the change to state and context!</p>
      <p> Even the font on the above text is changing!!!!</p>
      <p>try changing some of the css or adding className context to some of these other elements! or even add your own elements entirely!</p>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
