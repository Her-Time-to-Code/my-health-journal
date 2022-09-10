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
        'children': true, 
        'journals' :
        [
            "mental-health", 
            "emotional-health", 
            "period-health", 
            "physical-health", 
            "medical-health", 
            "relationship-health", 
            "goals"

        ], 
        'groups': 
        [
            'healthy recipes', 
            'parenting',
            'games'
        ]
        
    },
    'joanne' :{
        'name': 'Joanne',
        'occupation': 'Specialty Baker', 
        'location': 'SC', 
        'children': true
    },
    'greywolfgirl' :{
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

app.get('/api/users', (request, response) => {
    console.log("users:", users)
    if(users) {
        response.json(users)
    }
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
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})