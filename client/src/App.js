import React, { useEffect, useState } from 'react';
import { CircularProgress, Fab } from '@material-ui/core';
import { Add, Edit, EditIcon } from '@material-ui/icons';
import logo from './logo.svg';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import './App.css';

async function getPosts() {
  const response = await fetch('/api/posts');
  const responseData = await response.json();
  return responseData;
}

function App() {
  var [mode, setMode] = useState('home');
  var [postTitle, setPostTitle] = useState('');
  var [postDate, setPostDate] = useState('');
  var [postContent, setPostContent] = useState('');
  var [data, setData] = useState('');

  useEffect(() => {
    getPosts().then(res => setData(res))
              .catch(err => console.log(err));
  });

  var mainSection = null;
  if(mode == 'home') {
    mainSection = <Home />
  } else if(mode == 'about') {
    mainSection = <About />
  } else if(mode == 'postList') {
    mainSection = data ? <PostList postData={ data } 
                        onPostClick={ (postTitle, postDate, postContent) => {
                          setMode('postDetail');
                          setPostTitle(postTitle);
                          setPostDate(postDate);
                          setPostContent(postContent);
                        }}/> : <CircularProgress />;
  } else if(mode == 'postDetail') {
    mainSection = <PostDetail postTitle={ postTitle }
                          postDate={ postDate }
                          postContent={ postContent }
                          onBackArrowClick={ () => {
                            setMode('postList');
                          } }/>;
  }
  
  return (
    <div className="App">
      <Header onLogoClick={ () => {setMode('home')} }
              onAboutClick={ () => {setMode('about')} }
              onPostListClick={ () => {setMode('postList')} }/>
      { mainSection }
    </div>
  );
}

export default App;