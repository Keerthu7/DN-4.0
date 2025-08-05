import React from 'react';

const blogs = [
  { id: 1, title: 'Hooks in Depth' },
  { id: 2, title: 'JSX Gotchas' },
  { id: 3, title: 'React 18 Features' }
];

function BlogList() {
  return (
    <div>
      <h3>🗒 Blog List</h3>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li> // using key here
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
