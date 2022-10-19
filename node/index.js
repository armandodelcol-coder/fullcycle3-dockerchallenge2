import { faker } from '@faker-js/faker';
import  mysql  from 'mysql';
import  express  from 'express';

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const connection = mysql.createConnection(config)

connection.query(`create table people(id int not null auto_increment, name varchar(60), primary key(id))`, (err, res) => {
    console.log(res)
})
const sql = `INSERT INTO people(name) values('${faker.address.city()}')`
connection.query(sql)
var names = []
connection.query(`select * from people`, (err, res) => {
    res.forEach(e => {
        names.push(`<p>${e.name}</p>`)
    })
})
connection.end()


app.get('/', (req,res) => {
    res.send(`<h1>Full Cycle</h1>${names}`)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})