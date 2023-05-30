import styles from './Post.module.css'
import Comment from './Comment'
import Avatar from './Avatar'


const Post = () => {
  return (<>
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src= "https://gabrielfadel.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-2.9e36baa0.png&w=750&q=75" />
                <div className={styles.authorInfo}>   
                    <strong>Gabriel Fadel</strong>
                    <span>Web Engineer</span>
                </div>
            </div>
            <time title="11 de maio às 8h13" dateTime="2022-05-11 08:13:30 ">publicado há 1 hora</time>
        </header>
        
        <div className={styles.content}><p> Fala galera!!</p>
       <p> a construção desse projeto foi parte do curso do Ignite da RocketSeat.</p>
        <p>Também é possivel acessar meu site em pessoal em <a rel="stylesheet" href="https://gabrielfadel.com">https://gabrielfadel.com</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>

        </p>
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder='Deixe um comentário' />
          <footer>
          <button type='submit'>Publicar</button>
          </footer>
          
        </form>
        <div><Comment /><Comment /><Comment /></div>
      
    </article>
   
   </>
  )
}

export default Post
