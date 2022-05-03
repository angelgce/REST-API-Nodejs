const { response } = require('express'); // importo el res

class Controllers {

    usersGet = (req, res = response) => {
        const query = req.query;

        res.json({
            msg: 'get API - controller',
            query
        });
    }
    usersPost = (req, res = response) => {
        const { nombre, edad } = req.body;
        res.json({
            msg: 'Post API - controller',
            nombre,
            edad
        });
    }
    usersPut = (req, res = response) => {
        const { id, username } = req.params;

        res.json({
            msg: 'Put API - controller',
            id,
            username
        });
    }
    usersDelete = (req, res = response) => {
        res.json({
            msg: 'Delete API - controller'
        });
    }
}



module.exports = Controllers;
