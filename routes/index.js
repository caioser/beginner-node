const express = require('express');

const router = express.Router();

//get root
router.get('/', (req, res)=>{
    
    // making a sample
    let obj = {
        name:'Caio',
        age:27,
        //pageTitle: 'Título de teste'
    }
    //render(<nameOfFileInViews>, [{objectWithParams}])
    res.render('home', obj/*sample*/);
});

module.exports = router;
