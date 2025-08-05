import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function MainContent() {
  const [view, setView] = useState('book');

  // Using Element Variable
  let content;
  if (view === 'book') {
    content = <BookDetails />;
  } else if (view === 'blog') {
    content = <BlogDetails />;
  } else if (view === 'course') {
    content = <CourseDetails />;
  }

  return (
    <div>
      <h1>Blogger App</h1>
      <div>
        <button onClick={() => setView('book')}>Book</button>
        <button onClick={() => setView('blog')}>Blog</button>
        <button onClick={() => setView('course')}>Course</button>
      </div>

      <hr />

      {/* 1. Conditional Rendering with Element Variable */}
      {content}

      {/* 2. Conditional Rendering with Ternary */}
      {view === 'book' ? <p>You're viewing books.</p> : null}

      {/* 3. Conditional Rendering using && */}
      {view === 'blog' && <p>Reading a blog post!</p>}
    </div>
  );
}

export default MainContent;
