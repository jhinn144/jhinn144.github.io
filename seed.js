const fs = require('fs');
const path = require('path');
const os = require('os');

// Define the directory for posts
const postsDir = path.join(__dirname, '_posts');

// Ensure the directory exists
if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir);
}

// Create 10 posts
for (let i = 1; i <= 10; i++) {
    // Calculate the date for each post
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];

    // Define the filename
    const filename = path.join(postsDir, `${dateStr}-post-${i}.md`);

    // Define the content of the post
    const content = `---
layout: post
title:  "Post ${i}"
date:   ${dateStr}
categories: Blog
description: "This is post ${i}."
---

# Welcome to StackEdit!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.


# Files

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

## Create files and folders

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

## Switch to another file

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

## Rename a file

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.
\`\`\`mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
\`\`\`
`;

    // Write the content to the file
    fs.writeFileSync(filename, content);
}

console.log("Created 10 posts.");
