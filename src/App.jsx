import {Header} from './components/Header';
import Post from './components/Post';


import './global.css';
import styles from './App.module.css'
import Sidebar from './components/Sidebar';

export default function App(){
  return(
    <div>
      <Header />

        <div className={styles.wrapper}>
          <Sidebar></Sidebar>
          <main>
          <Post
        author="Diego Fontes"
        content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Post 
                author="Gabriel Fadel"
                content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit."   
        />
          </main>
        </div>
        
    </div>
  );
}

