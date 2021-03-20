exports.index = (req, res)=>{
    
    // making a sample
    let obj = {
        name:'Caio',
        age:27,
        //pageTitle: 'Título de teste'
    }
    //render(<nameOfFileInViews>, [{objectWithParams}])
    res.render('home', obj/*sample*/);
}