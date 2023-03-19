const db = require('../db');

class UserController{
    async createUser(req, res){
        const {nickname, password, mail} = req.body;
        const newPerson = await db.query('INSERT INTO users (nickname, mail, password) values ($1, $2, $3) returning *', [nickname, mail, password ]);

        res.json(newPerson.rows[0]);
    }
    async getUser(req, res){
        const users = await db.query('select * from users');
        res.json(users.rows)
    }
    async getOneUser(req, res){
        const id = req.params.id;
        const user = await db.query('select * from users where id = $1', [id]);
        res.json(user.rows[0]);
    }
    async updateUser(req, res){
        const {id, nickname, mail, password} = req.body;
        const user = await db.query('update users set nickname = $1, mail = $2, password = $3 where id = $4 returning *', [nickname, mail, password, id]);
        res.json(user.rows[0]);
    }
    async deleteUser(req, res){
        const id = req.params.id;
        const user = await db.query('delete from users where id = $1', [id])
        res.json(user.rows[0]);
    }
}

module.exports = new UserController();