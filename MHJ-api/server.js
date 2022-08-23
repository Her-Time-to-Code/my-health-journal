const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

app.use(cors())

let users = {
    'kalynndier':{
        'name': 'Katrina',
        'occupation': 'Software Engineer', 
        'location': 'NC', 
        'children': true
        
    },
    'joanne' :{
        'name': 'Joanne',
        'occupation': 'Specialty Baker', 
        'location': 'SC', 
        'children': true
    },
    'greyWolfGirl' :{
        'name': 'Karie',
        'occupation': 'Gammer', 
        'location': 'NY', 
        'children': false
    }, 
    'unknown' :{
        'occupation': 'unknown', 
        'location': 'unknown', 
        'children': false
    }, 
}

    

    


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/users/:userName', (request, response) => {
    const userName = request.params.userName.toLowerCase()
    console.log(userName)
    if(users[userName]) {
        response.json(users[userName])
    }else {
        response.json(users['unknown'])
    }
})
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})