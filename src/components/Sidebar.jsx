import Avatar from './Avatar';
import styles from './Sidebar.module.css';
import {PencilLine} from "@phosphor-icons/react"

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="alt" />
        <div className={styles.profile}> 
        <Avatar  src="https://avatars.githubusercontent.com/u/92528987?s=400&u=3a33dba0d05d7ee08be4e3ae138ce29c3d972dc6&v=4" />
        
        <strong>Gabriel Fadel</strong>
        <span>Software Engineer</span>
        </div>
        <footer>
        <a href="#">
        <PencilLine size={20} /> editar seu perfil
        </a>
       
        </footer>
    </aside>
  )
}

export default Sidebar