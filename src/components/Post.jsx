import styles from './Post.module.css'


const Post = () => {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src= "https://github.com/gabfadel.com" />
                <div className={styles.authorInfo}>
                    <strong>Gabriel Fadel</strong>
                    <span>Web Engineer</span>
                </div>
            </div>
            <time title="11 de maio às 8 e 13" dateTime="2022-05-11 08:13:30 "></time>
        </header>
        
        <div className={styles.content}><p> Fala galera!!</p>
       <p> a construção desse projeto foi parte do curso do Ignite da RocketSeat.</p>
        <p>Também é possivel acessar meu site em pessoal em <a rel="stylesheet" href="https://gabrielfadel.com">https://gabrielfadel.com</a></p>
        </div>
    </article>
   
  )
}

export default Post
