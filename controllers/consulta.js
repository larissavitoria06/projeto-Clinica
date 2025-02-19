const con = require ('../connect');//Pra criar escreve connect.js depois pode tirar o .js

const create = (req, res) => {
    const {paciente, medico, data} = req.body;
    con.query('INSERT INTO consultas(nome_paciente, nome_medico, data_hora) VALUES(?,?,?)',
        [paciente, medico, data], (err, result) => {
        if(err){
            res.status(500).json({erro: err});
        }else{
            res.status(201).json(result);
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM consultas', (err, result) => {
        if(err){
            res.status(400).json({erro: err});
        }else{
            res.status(201).json(result);
        }
    });
};


module.exports = {read, create}