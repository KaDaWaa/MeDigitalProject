import express from 'express';
import Category from '../models/category.js';
import Product from '../models/product.js';
import { where } from 'sequelize';
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

    router.get('/products/:id',async(req,res)=>{
      const id=req.params.id;

      Category.findByPk(id)
      .then(category=>{
        Product.findAll({where:{categoryId: id}})
        .then(products=>{
          res.render('products',{
            pageTitle:'Edit '+ category.categoryName,
            category:category,
            products:products
          })
        })
      })
      .catch(error=>{
        res.render('index',{
          pageTitle:'Welocme to Admin',
        })
      })

  })
  router.get('/edit_product/:id',async(req,res)=>{
    const id=req.params.id;

    Product.findByPk(id)
    .then(product=>{
      Category.findAll()
      .then(categories=>{
        res.render('editproduct',{
          pageTitle:'Edit '+ product.productName,
          product:product,
          categories:categories
        })
      })        
    })
      .catch(error=>{
        res.redirect('/product/'+product.categoryId)
    })
  })




export default router;