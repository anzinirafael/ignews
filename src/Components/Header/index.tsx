import style from './styles.module.scss';

export function Header(){
    return(
        <header className={style.headerContainer}>
            <div className={style.headerContent}>
                <img src="/images/logo.svg" alt="" />
                <nav>
                    <a href="#" className={style.active}>Home</a>
                    <a href="#" >Posts</a>
                </nav>
            </div>
        </header>
    );
}