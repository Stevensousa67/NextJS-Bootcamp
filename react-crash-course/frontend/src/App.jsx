import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function hideModalHandler() {
    setIsModalOpen(false);
  }
  function showModalHandler() {
    setIsModalOpen(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isModalOpen={isModalOpen} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
