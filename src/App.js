

import './App.css';
import LikeImage from './components/LikeImage';
// import LikeImageHoc from './components/LikeImageHoc';
import LikePost from './components/LikePost';
// import LikePostHoc from './components/LikePostHoc';
import Post from './components/Post';

function App() {
  return (
    <div>

      <h3>Some Blog</h3>

  {/* solve the issue by render */}
      <div className='buttons'>
        <Post render={(counter, handleIncreament)=>{
          return <LikeImage likeImageCounter={counter} handleLikeImageCount = {handleIncreament}/>}}/>
        <Post render={(counter, handleIncreament)=>{
          return <LikePost LikePostCounter={counter} handlePostCount = {handleIncreament}/>}}/>
      </div>


  {/* solve the issue by hoc */} 

      {/* <div className='buttons'>
        <LikeImageHoc/>
        <LikePostHoc/>
      </div> */}

    </div>
  );
}

export default App;