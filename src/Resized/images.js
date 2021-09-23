const fs = require('fs');

const images = [];

fs.readdir('./', (err, files) => {
  for (let i = 0; i < files.length; i++) {
    person = files[i];
    if (!person.endsWith('.png')) continue;
    images.push(
      `import ${person
        .replace('.png', '')
        .replace(' ', '')} from './Resized/${person}'`,
    );
  }
  console.log(`${images}`);
});
