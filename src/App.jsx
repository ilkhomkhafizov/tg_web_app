import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardImage from './components/Card/CardImage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  }
  return (
    <div className='App-header'>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage data={getData}/>} />
          {/* <Route path="/blog/:id" element={<BlogPost content={getBlogContent}/>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
