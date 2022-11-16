const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 5755
// let nombre =''
// let contraseña =''

// let listar = [nombre, contraseña ]




//Motor de plantilla
hbs.registerPartials(__dirname + '/views/partials', function (err){});
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');

// Expresar el directorio público
app.use(express.static('public'))
/* 

app.get('menu', (req, res) => {
    res.render('home'),{
        nombre:'Home'
    }

});

app.get('/usuario', (req, res) => {
    res.send('Usuario encontrado')
});


app.get('/rol.hbs', (req, res) => {
    res.render('rol',{
        
    })

});  
app.get('/home', (req, res) => {
    res.render('home.hbs',{
        
    })

}); 
app.get('/', (req, res) => {
    res.sendFile('index.html',{
        
    })

});  
app.get('http://127.0.0.1:5500/views/home.hbs', (req, res) => {
    res.render('home.hbs',{
        
    })

}); 
 app.get('http://127.0.0.1:5500/views/index.html', (req, res) => {
    //res.send('Página de inicio')
    res.render('',{
   
    })
});  

// 
/* app.get('/', (req, res) => {
    res.render('direccionar',{
        
    })

});   *//*
app.get('/ventas.hbs', (req, res) => {
    res.render('ventas',{
       
    })

});  
app.get('/usuarios.hbs', (req, res) => {
    res.render('usuarios',{
       
    })

});  
app.get('*', (req, res)=>{
   // res.send('Pagina no encontrada')
    // res.sendFile(__dirname + '/public/views/404.html')
    res.render('partials/footer',{
    nombre:'Página no encontrada'
})
}) */

//Verificar si el puerto está escuchando
app.get('/', (req, res) => {
    res.render('Ejercicio1',{
    })

}); 
app.listen(port,()=>{
    console.log(`escuchando al puert ${port}`)
}) 


