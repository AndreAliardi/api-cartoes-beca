let jwt = require('jsonwebtoken');
let config = require('config');
let secret = config.get("secret");

exports.loginSistema = async (req, res, next) => {
    validarBasicAuthLogin(req, res, next, async function () {
        try {
            //Validações de dados enviados
            var raw = req.body
            var json = getJsonFail()
            if (!isValidAndLegth(raw.user, 3)) json.msg = "Usuário ou senha inválidos!"
            if (!isValidAndLegth(raw.pass, 7)) json.msg = "Usuário ou senha inválidos!"
            if(json.msg != undefined){res.status(422).send(json); return;}

            //verifica se usuário e senha estão corretos
            //Pega algumas informações tbm
            var sql = "SELECT id, nome, email, telefone FROM login WHERE user = ? AND pass = ?"
            var rsLogin = await req.connectionAsync.query(sql, [raw.user, raw.pass])
             if (rsLogin.length == 0) {
                json.code = 0
                json.msg = "Usuário ou senha incorretos!"
                res.status(200).send(json)
                return;
            }

            //Criando sessão
            var session = {}
            session.nome = rsLogin[0].nome;
            session.email = rsLogin[0].email;
            session.idUser = rsLogin[0].id;

            var token = jwt.sign({session}, secret, {
                expiresIn: 60 * 60 * 24 // expires in 24 hours
            });

            json.token  = token
            json.status = "OK"
            json.code = 1
            json.msg = "Login com sucesso!"
            json.nome = rsLogin[0].nome
            json.email = rsLogin[0].email
            json.telefone = rsLogin[0].telefone
            res.status(200).send(json);
        } catch (e) {
            return next(e)
        }
    });
}