import React, { useState } from 'react';
import { Treebeard } from 'react-treebeard';

const FileVisualizer = () => {
  const [data, setData] = useState({ name: 'root', toggled: true, children: [] });

  const handleToggle = (node, toggled) => {
    node.toggled = toggled;
    setData({ ...data });
  };

  return <Treebeard data={data} onToggle={handleToggle} />;
};

export default FileVisualizer;
