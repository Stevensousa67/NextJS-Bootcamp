import { useState } from 'react';
import classes from './NewPost.module.css';

export default function NewPost({ onCancel, onAddPost }) {
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');
    
    function messageChangeHandler(event) {
        setMessage(event.target.value);
    }
    
    function authorChangeHandler(event) {
        setAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            message: message,
            author: author,
        };
        onAddPost(postData);
        onCancel();
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={messageChangeHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button type="button" className={classes.cancel} onClick={onCancel}>Cancel</button>
                <button type="submit" className={classes.submit}>Post</button>
            </p>
        </form>
    );
}