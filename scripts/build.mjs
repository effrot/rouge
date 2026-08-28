import{cpSync,mkdirSync,rmSync,writeFileSync}from'node:fs';
rmSync('dist',{recursive:true,force:true});mkdirSync('dist/src',{recursive:true});cpSync('src','dist/src',{recursive:true});cpSync('index.html','dist/index.html');writeFileSync('dist/README.txt','Serve this directory with any static web server.');console.log('Built static site into dist/');
