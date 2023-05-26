import styles from './Sidebar.module.css';
import {PencilLine} from "@phosphor-icons/react"

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="alt" />
        <div className={styles.profile}>        <img className={styles.avatar} src="https://github.com/gabfadel.png" alt="profilepic" 
/></div>
        
        <strong>Gabriel Fadel</strong>
        <span>Software Engineer</span>
        
        <footer>
        <a href="#">
        <PencilLine size={20} /> editar seu perfil
        </a>
       
        </footer>
    </aside>
  )
}

export default Sidebar