import {MdPostAdd, MdMessage} from 'react-icons/md';
import classes from './MainHeader.module.css';

export default function MainHeader({ onCreatePost }){
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                <span>React Poster</span>
            </h1>
            <p>
                <button className={classes.button} onClick={onCreatePost}>
                    <MdPostAdd size={18}/>
                    <span>New Post</span>
                </button>
            </p>
        </header>
    );
}