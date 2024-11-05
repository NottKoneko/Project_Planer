import React, { useState } from 'react';

const CodeSnippets = () => {
  const [snippets, setSnippets] = useState([]);
  const [newSnippet, setNewSnippet] = useState({ title: '', content: '' });

  const handleAddSnippet = () => {
    setSnippets([...snippets, newSnippet]);
    setNewSnippet({ title: '', content: '' });
  };

  return (
    <div>
      <input type="text" placeholder="Snippet Title" value={newSnippet.title} onChange={(e) => setNewSnippet({ ...newSnippet, title: e.target.value })} />
      <textarea placeholder="Snippet Content" value={newSnippet.content} onChange={(e) => setNewSnippet({ ...newSnippet, content: e.target.value })} />
      <button onClick={handleAddSnippet}>Add Snippet</button>
    </div>
  );
};

export default CodeSnippets;
