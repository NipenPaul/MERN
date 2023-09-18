/*
* Title: File system
* Description: file system
* Author: Nipen Paul
* Date: 2023-09-13
* 
*/

// dependencies

const fs = require('fs');
const path = require('path');

// App object - module scafolding

const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

//write data to file
lib.create = (dir, file, data, callback) =>{
    // open file for writing
    fs.open(`${lib.basedir+dir}/${file}.json`, 'wx', (err, fileDescriptor) =>{
        if(!err && fileDescriptor){
            // convert data to string
            const stringData = JSON.stringify(data);
            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, function(err2){
                if(!err2){
                    fs.close(fileDescriptor, function(err3){
                        if(!err3){
                            callback(false);
                        }else{
                            callback('Error closing the new file!');
                        }
                    });
                }else{
                    callback('Error writing to new file!');
                }
            });
        }else{
            callback('could not create new file, it may already exists!');
        }
    });
};

// read data from file
lib.read = (dir, file, callback) =>{
    fs.readFile(`${lib.basedir+dir}/${file}.json`, 'utf-8', (err, data) =>{
        callback(err, data);
    });
}

// update existing file
lib.update = (dir, file, data, callback) =>{
    // file open for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescriptor) =>{
        if(!err && fileDescriptor){
            // convert the data to string
            const stringData = JSON.stringify(data);
            // trucate the file
            fs.ftruncate(fileDescriptor, (err1) =>{
                if(!err1){
                    // write to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (err2) =>{
                        if(!err2){
                            // close the file
                            fs.close(fileDescriptor, (err3) =>{
                                if(!err3){
                                    callback(false);
                                }else{
                                    callback('Error closing file!');
                                }
                            });
                        }
                    });
                }else{
                    callback('Error trucating file!');
                }
            })
        }else{
            callback('Error updating, file may not exit');
        }
    })
}

// delete existing file
lib.delete = (dir, file, callback) =>{
    // unlink file
    fs.unlink(`${lib.basedir+dir}/${file}.json`,(err) =>{
        if(!err){
            callback(false);
        }else{
            callback('Error deleting file!');
        }
    });
};

// list all the items in a dirctory
lib.list = (dir, callback) =>{
    fs.readdir(`${lib.basedir + dir}/`, (err, fileNames) =>{
        if(!err && fileNames && fileNames.length > 0){
            let trimedFileNames = [];
            fileNames.forEach(fileName =>{
                trimedFileNames.push(fileName.replace('.json', ''));
            });
            callback(false, trimedFileNames);
        }else{
            callback('Error reading directory!');
        }
    });
};

module.exports = lib;