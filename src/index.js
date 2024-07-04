// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./database/index.js"

dotenv.config({
    path:'./env'
})

connectDB()















// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"

// import express from "express"
// const app=express()

// // function connectDB(){}

// //or we can use iife
// //async se phele log generally semicolun lga dete hai for cleaner code

// ;((async)=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAme}`)
//        app.on("error",(error)=>{
//         console.log("ERRR:",error);
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })
//     }catch(error){
//         console.error("ERROR:",error)
//         throw err
//     }
// })()