exports.listaCompras = async (req, res, next) => {
    try {
        var raw = req.body
        var json = getJsonFail()
        if(isNotDate(raw.dataInicial))raw.dataInicial = null
        if(isNotDate(raw.dataFinal))raw.dataFinal = null
        if(isNotNumber(raw.idCompraPaginacao))raw.idCompraPaginacao = null
        if(isNotNumber(raw.idCompra))raw.idCompra = null
        if(isNotValidAndLegth(raw.loja, 3))raw.loja = null
        if(isNotValidAndLegth(raw.descricao, 3))raw.descricao = null
        if(isNotMoneyFormat(raw.valor))raw.valor = null
        var sql = "SELECT id, valor, parcelado, loja, descricao, dataCompra FROM compras WHERE idUser = ?"
        var args = []
        args.push(req.session.idUser)
        if(raw.dataInicial != null){
            sql += " AND dataCompra >= ?"
            args.push(raw.dataInicial)
        }
        if(raw.dataFinal != null){
            sql += " AND dataCompra <= ?"
            args.push(raw.dataFinal)
        }
        if(raw.idCompraPaginacao != null){
            sql += " AND id >= ?"
            args.push(raw.idCompraPaginacao)
        }
        if(raw.idCompra != null){
            sql += " AND id = ?"
            args.push(raw.idCompra)
        }
        if(raw.loja != null){
            sql += " AND loja LIKE ?"
            args.push("%"+raw.loja+"%")
        }
        if(raw.descricao != null){
            sql += " AND descricao LIKE ?"
            args.push("%"+raw.descricao+"%")
        }
        if(raw.valor != null){
            sql += " AND valor = ?"
            args.push(raw.valor)
        }
        sql += " LIMIT 15"
        var rs = await req.connectionAsync.query(sql,args)
        json.code = 1
        json.msg = "OK"
        json.status = "OK"
        json.listaCompras = rs
        res.status(200).send(json)
    } catch (e) {
        console.log(e)
        return next(e)
    }
}

exports.listaCartoes = async (req, res, next) => {
    try {
        var raw = req.body
        var json = getJsonFail()
        var sql = "SELECT titular, finalCartao, bandeira, tipo FROM cartoes WHERE idUser = ?"
        var args = []
        args.push(req.session.idUser)
        var rs = await req.connectionAsync.query(sql,args)
        json.code = 1
        json.msg = "OK"
        json.status = "OK"
        json.listaCartoes = rs
        res.status(200).send(json)
    } catch (e) {
        await registerError(req,e)
        return next(e)
    }
}