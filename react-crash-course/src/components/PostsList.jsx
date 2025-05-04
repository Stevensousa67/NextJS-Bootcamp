import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

export default function PostList({ posts }) {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                {posts.map((post, index) => (
                    <Post key={index} name={post.name} message={post.message} />
                ))}
            </ul>
        </>
    );
}