import logo from './logo.svg';
import styles from './App.module.css';
import { HelloWorld } from './Helloworld';
import { BukuSy } from './app/BukuSy';
import Counter from './app/Counter';





function App() { 
  return (
    <div class={styles.App}>
      <h3 >Welcume</h3>
      <HelloWorld/>
      <BukuSy title="MyBook1"/>
      <Counter/>
    </div>
  );
}

export default App;
