const Client = require('pg').Client


const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Harkirat@1",
    database: "postgres"
})

client.connect()
client.on("connect",()=>{
    console.log("Database connection")
})


client.on("end",()=>{
    console.log("Database end")
})


const getUser= (req,res)=>{
    client.query("SELECT * FROM users", (err,results)=>{
        if(err){
            console.log(err.message)
        }

        res.status(200).json(results.rows)
    })
}

const insertUser= (req,res)=>{
    const {name,email,phone} = req.body
    client.query("INSERT INTO users(name,email,phone) VALUES($1,$2,$3) RETURNING *",[name,email,phone], (err,results)=>{
        if(err){
            console.log(err.message)
        }

        res.status(201).send("user added!")
    })
}
module.exports = {client, getUser, insertUser}