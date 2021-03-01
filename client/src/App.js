import React, { useState } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import PostWrite from './components/PostWrite'
import './App.css';

function App() {
  var [mode, setMode] = useState('home');
  var [postTitle, setPostTitle] = useState('');
  var [postDate, setPostDate] = useState('');
  var [postContent, setPostContent] = useState('');

  var mainSection = null;
  if(mode === 'home') {
    mainSection = <Home />
  } else if(mode === 'about') {
    mainSection = <About />
  } else if(mode === 'postList') {
    mainSection = <PostList onPostClick={ (postTitle, postDate, postContent) => {
                              setMode('postDetail');
                              setPostTitle(postTitle);
                              setPostDate(postDate);
                              setPostContent(postContent);
                            }}
                            onAddClick={ () => {
                              setMode('postWrite');
                            }}/>;
  } else if(mode === 'postDetail') {
    mainSection = <PostDetail postTitle={ postTitle }
                              postDate={ postDate }
                              postContent={ postContent }
                              onBackArrowClick={ () => {
                                setMode('postList');
                              }}/>;
  } else if(mode === 'postWrite') {
    mainSection = <PostWrite onBackArrowClick={ () => {
                               setMode('postList');
                             }}/>;
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