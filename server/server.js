/**
 * Created by yangwang on 18/1/9.
 */
var express=require('express');
var server=express();

var appData=require('../data.json');
var seller=appData.seller;
var goods=appData.goods;
var ratings=appData.ratings;
var apiRouters=express.Router();
apiRouters.get('/seller',function(req,res){
    res.json({
        errno:0,
        seller:seller
    })
});
apiRouters.get('/goods',function(req,res){
    res.json({
        errno:0,
        seller:goods
    })
});
apiRouters.get('/ratings',function(req,res){
    res.json({
        errno:0,
        seller:ratings
    })
});
server.use('/api',apiRouters);
server.listen(3000,function(){
    console.log('http://localhost:3000')
});
