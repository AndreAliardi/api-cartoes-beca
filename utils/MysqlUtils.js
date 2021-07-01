const TIPO = {
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    INSERT: 'INSERT'
}

startTransaction = async function (req, next) {
    await req.connection.query("START TRANSACTION", [])
    req.isTransaction = true;
}
commit = async function (req, next) {
    await req.connection.query("COMMIT", [])
    req.isTransaction = false;
}

query = async function(req,sql,array){
    return await req.connectionAsync.query(sql,array)
}

querySyncBasePonto = async function(req,sql,array){
    var sqlFinal = await req.connection.format(sql,array).replaceAll(req.session.basePonto+".","")
    var sqlAtua = "INSERT INTO "+req.session.basePonto+".atualizacoes (tipo,tabela,clausula,dataatualizacao) VALUES (?,?,?,CURRENT_TIMESTAMP())"
    await  req.connectionAsync.query(sqlAtua,[
        getTipoSQL(sql),
        getTabela(req,sql),
        sqlFinal
    ])
    return query(req,sql,array)
}

function getTipoSQL(sql) {
    var tipo = TIPO.UPDATE
    if(sql.toLowerCase().startsWith("insert"))tipo = TIPO.INSERT;
    else if(sql.toLowerCase().startsWith("delete"))tipo = TIPO.DELETE;
    return tipo
}

function getTabela(req,sql){
    var tabela = sql.substring(sql.indexOf(req.session.basePonto)+req.session.basePonto.length+1)
    tabela = tabela.substring(0,tabela.indexOf(" "))
    return tabela
}