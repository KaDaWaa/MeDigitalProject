import express from 'express';
import Category from '../models/category.js';
const router=express.Router();

//router.get('/dashboard',async(req,res)=>{
    //API
    //return  res.status(200).json({
      //  message: 'Hi'
    //})
    
    //HTML
    router.get('/dashboard',async(req,res)=>{
        Category.findAll()
        .then(categories=>{
          res.render('index',{
            pageTitle:'Welocme to Admin',
            categories:categories
          })
        })
        .catch(error=>{
          res.render('index',{
            pageTitle:'Welocme to Admin',
          })
        })

    })




export default router;