const express = require('express');
const multer = require('multer');
const path = require('path');

// File upload folder
const UPLOADS_FOLDER = './uploads/';

// define the storage

const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, UPLOADS_FOLDER);
    },
    filename: (req, file, callback)=>{
        // Important File.pdf => important-file-tiem.pdf
        const fileExt  = path.extname(file.originalname);
        const fileName = file.originalname
                        .replace(fileExt, "")
                        .toLowerCase()
                        .split(" ")
                        .join("-") + "-" +Date.now();
        callback(null, fileName +fileExt);
    },
});

// prepare the final multer upload object
var upload = multer({
    storage: storage,
    limits:{
        fileSize: 1000000, // 1MB 
    },
    fileFilter:(req, file, callback) =>{
        if(file.fieldname === "avatar"){
            if(file.mimetype === "image/png" || 
            file.mimetype === "image/jpg" ||
            file.mimetype == "image/jpeg"){
                callback(null, true);
            }else{
                callback(new Error("Only .jpg, .png or .jpeg format allowed!"));
            }
        }else if(file.fieldname === "doc"){
            if(file.mimetype === "application/pdf"){
                callback(null, true);
            }else{
                callback(new Error("Only .pdf format allowed!"));
            }
        }else{
            callback(new Error("There was an unknow error!"));
        }
    },
});

const app = express();

// application route

// single file...
// app.post('/', upload.single('avatar'), (req, res) =>{
//     res.send('Index page...');
// });

// multiple file uploadad, with max size .
// app.post('/', upload.array('avatar', 3), (req, res) =>{
//     res.send('File Uploaded done..');
// });

// multiple fields
app.post('/', upload.fields([
    {name: "avatar", maxCount: 1},
    {name: "doc", maxCount: 1},
]), (req, res) =>{
    res.send('File Uploaded done..');
});

// default error handle
app.use((err, req, res, next) =>{
    if(err){
        if(err instanceof multer.MulterError){
            res.status(500).send('There was an uploaded error!');
        }else{
            res.status(500).send(err.message);
        }
    }else{
       res.send("success");
    }
});


app.listen(3000, ()=>{
    console.log('app listening at port 3000');
});