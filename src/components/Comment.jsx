import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import Avatar from './Avatar';

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gabfadel.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Fadel</strong>
              <time title="11 de maio às 8h13" dateTime="2022-05-11 08:13:30">publicado 1 hora atrás</time>
            </div>
            <button  title='Deletar Comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp className="thumbs-up-icon"  /> <p>Aplaudir <span>20</span></p>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;
