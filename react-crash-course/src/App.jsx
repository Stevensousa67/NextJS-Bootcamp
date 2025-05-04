import Post from './components/Post';
import PostsList from './components/PostsList';

function App() {
  const names = ['Steven', 'Max'];
  const message = ['React.js is awesome!', 'React.js is great!'];

  const getRandomName = () => (Math.random() > 0.5 ? names[0] : names[1]);
  const getRandomMessage = () => (Math.random() > 0.5 ? message[0] : message[1]);

  const posts = [
    { name: getRandomName(), message: getRandomMessage() },
    { name: getRandomName(), message: getRandomMessage() },
    { name: getRandomName(), message: getRandomMessage() },
    { name: getRandomName(), message: getRandomMessage() },
    { name: getRandomName(), message: getRandomMessage() },
  ];

  return(
    <main>
      <PostsList posts={posts} />
    </main>
  )
}

export default App;
