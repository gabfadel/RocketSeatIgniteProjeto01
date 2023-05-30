
import PropTypes from 'prop-types';
import styles from './Avatar.module.css'

const Avatar = ({hasBorder= true, src}) => {
    
  return (
    <img className={hasBorder? styles.avatarWithBorder: styles.avatar} 
    src={src} alt="Avatar" />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool.isRequired,
};

export default Avatar;
