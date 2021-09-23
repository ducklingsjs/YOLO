const fs = require('fs');
let Cartoonlization = require('photo2cartoon');
let c = new Cartoonlization();

const testFolder = './';

fs.readdir(testFolder, async (err, files) => {
  for (let i = 0; i < files.length; i++) {
    person = files[i];
    if (!person.endsWith('.jpg')) continue;
    console.log(person);
    await c.init(`./${person}`).then((cs) => {
      let c = cs[0];
      c.make();
      return c.toFile(`../Cartoonized/${person.replace('jpg', 'png')}`);
    });
  }
});
