import React, { useState } from 'react';
import { Fab, Grow } from '@material-ui/core';
import { Add, Edit, EditIcon } from '@material-ui/icons';
import logo from './logo.svg';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import './App.css';


var testList = [{ postTitle: "제목 1", postDate: "2021.02.24", postContent: "첫 번째 포스트" }
, { postTitle: "제목 2", postDate: "2021.02.23", postContent: "두 번째 포스트" }];

function App() {
  var [mode, setMode] = useState('home');
  var [postTitle, setPostTitle] = useState('');
  var [postDate, setPostDate] = useState('');
  var [postContent, setPostContent] = useState('');
  var data = testList;

  var mainSection = null;
  if(mode == 'home') {
    mainSection = <Home />
  } else if(mode == 'about') {
    mainSection = <About />
  } else if(mode == 'postList') {
    mainSection = <PostList postData={ data } 
                        onPostClick={ (postTitle, postDate, postContent) => {
                          setMode('postDetail');
                          setPostTitle(postTitle);
                          setPostDate(postDate);
                          setPostContent(postContent);
                        }}/>;
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