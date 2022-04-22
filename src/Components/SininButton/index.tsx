import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './style.module.scss'; 

export function SininButton(){
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button type="button" className={styles.singInButton}>
            <FaGithub className={styles.icon} color="#04d361"/>
            Rafael Anzini Ximenes
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button type="button" className={styles.singInButton}>
            <FaGithub className={styles.icon} color="#EBA417"/>
            Sing in with GitHub
        </button>
    );
}