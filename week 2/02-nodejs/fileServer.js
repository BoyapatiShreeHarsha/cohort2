/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
    const express = require('express');
    const fs = require('fs');
    const path = require('path');
    const app = express();

     function getfiles(path) {
      return  new Promise(function (reslove, reject) {
    
        fs.readdir(path, (err, files) => {
          if (err) {
            reject("Some Problem");
          }
          else
            reslove(files);
        })
      })
    
    }
    
     function readFile(path) {
      return new Promise(function (reslove, reject) {
        fs.readFile(path, "utf-8", (err, data) => {
          if (err) {
            reject("File not found");
          }
          else
            reslove(data);
        })
      })
    }
    
    app.get('/files', async function (req, res) {
      // console.log("entered one");
      try {
        // let d = req.params.directory;
        let p = path.join(__dirname, `./files/`);
        let arr = await getfiles(p);
        // console.log(arr);
        res.status(200).json(arr);
      } catch (error) {
        res.status(500).json({error:error});
      }
    
    });
    
    app.get('/file/:filename', async function (req, res) {
      // console.log("entered two");
      try {
        // let d = req.params.directory;
        let fn = req.params.filename;
        let p = path.join(__dirname, `./files/${fn}`);
        let data = await readFile(p);
        res.status(200).send(data);
    
      } catch (error) {
        res.status(404).send(error);
      }
    
    
    });
    
    
    app.get('*', function (req, res) {
      res.status(404).send("Route not found");
    });
    
    
    module.exports = app;