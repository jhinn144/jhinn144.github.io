const fs = require('fs');
const path = require('path');
const os = require('os');

// Define the directory for posts
const postsDir = path.join(__dirname, '_posts');

// Ensure the directory exists
if (!fs.existsSync(postsDir)){
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
categories: jekyll update
---

This is post ${i}.
`;

    // Write the content to the file
    fs.writeFileSync(filename, content);
}

console.log("Created 10 posts.");
