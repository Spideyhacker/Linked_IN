import { Avatar } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react';
import './feed.css';
import PostTools from './postTools';
import Post from './Post';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';
import { db } from './firebase/config';
import { onSnapshot } from '@firebase/firestore';
import firebase from './firebase/config';
import {
  serverTimestamp,
  doc,
  setDoc,
  addDoc,
  collection,
  query,
  where,
  orderBy,
  getDoc,
} from '@firebase/firestore';
import { v4 } from 'uuid';
import { deleteDoc, updateDoc } from 'firebase/firestore';
import { TodayOutlined } from '@mui/icons-material';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  const Posts = posts;

  const colRef = collection(db, 'Post');

  const q = query(
    colRef,
    where('status', '==', 'Online'),
    orderBy('lastUpdated', 'desc')
  );

  const unsub = onSnapshot(q, (snapshot) => {
    const posts = [];
    snapshot.docs.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
    });

    setPosts(posts);
  });

  useEffect((e) => {
    return unsub;
  });

  var userid = v4();

  var userId = userid;
  var name = 'Shashwat Tiwari';
  var description = 'Online';
  var message = { input };
  var imageURL =
    'https://lh3.googleusercontent.com/a-/AOh14GjRxaIJ6gYmxhJ2g6STElC4WgtjtwmeU-Z1vwoL=s96-c';

  var docid = userId;

  const sendPost = async (e) => {
    e.preventDefault();

    const docRef = doc(db, 'Post', userId);
    const posted = {
      username: name,
      status: description,
      imageURL: imageURL,
      message: message,
      lastUpdated: serverTimestamp(),
      docId: docid,
    };
    setDoc(docRef, posted, { merge: true });
  };

  const data = posts;

  /*const handleEdit = async (name, description, message) => {
    await updateDoc(doc(db, "Post", docid), { message: input });
  };

  const toggleComplete = async (name) => {
    await updateDoc(doc(db, "Post", docid), {
      completed: !name.completed
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Post", id));
  };*/

  return (
    <div className="feed_container">
      <div className="feed">
        <div className="feed_post">
          <Avatar
            className="post_avatar"
            src="https://lh3.googleusercontent.com/a-/AOh14GjRxaIJ6gYmxhJ2g6STElC4WgtjtwmeU-Z1vwoL=s96-c"
          />

          <form className="add">
            <input
              className="post_input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button className="postButton" onClick={sendPost} type="submit">
              Post
            </button>
          </form>
        </div>
        <div className="postTools">
          <PostTools Icon={InsertPhotoIcon} title="Photo" color="#70B5F9" />
          <PostTools Icon={VideocamIcon} title="Video" color="#5f9b41" />
          <PostTools Icon={EventNoteIcon} title="Event" color="#c37d16" />
          <PostTools Icon={ArticleIcon} title="Article" color="#e16745" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
