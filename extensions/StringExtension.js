const moment = require('moment');
String.prototype.toString = function(){return ""+this;}
String.prototype.toDateYMD = function(){return objmoment = moment(this,"YYYY-MM-DD").toDate();}
String.prototype.toDate = function(){
    if(this.indexOf("T") != -1 && this.indexOf("-") != -1) {
        var date = this.split("T")[0];
        var arr = date.split("-");
        if (arr.length == 3) {
            if (arr[0].length == 4) {
                return new Date(parseInt(arr[0]), parseInt(arr[1]) - 1, parseInt(arr[2]));
            }
        }
    }else if(this.indexOf("-") != -1) {
        var arr = this.split("-");
        if (arr.length == 3) {
            if (arr[0].length == 4) {
                return new Date(parseInt(arr[0]), parseInt(arr[1]) - 1, parseInt(arr[2]));
            }
        }
    }else if(this.indexOf("/") != -1){
        var arr = this.split("/");
        if (arr.length == 3) {
            if (arr[2].length == 4) {
                return new Date(parseInt(arr[2]), parseInt(arr[1]) - 1, parseInt(arr[0]));
            }
        }
    }
    return null;
}
String.prototype.toDateYMD = function(){return objmoment = moment(this,"YYYY-MM-DD").toDate();}
String.prototype.toTimeStamp = function(){return objmoment = moment(this,"YYYY-MM-DD HH:mm").toDate();}
String.prototype.isNumber = function () { return /^\d+$/.test(this); }
String.prototype.isCPF = function () {
    var Soma = 0;
    var Resto;
    var strCPF = this.replaceAll(".","").replaceAll("-","");
    console.log(strCPF)
    if(!strCPF.isNumber())return false;

    if (strCPF == "00000000000") return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
}
String.prototype.toString = function() {
    return this;
}
String.prototype.isEmail = function () {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this);
}
String.prototype.isCNPJ = function () {
    cnpj = this.replace(/[^\d]+/g,'');

    if(cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;
}

String.prototype.isPhoneNumber = function(){
    if(this.indexOf(")") != 3 || this.indexOf("(") != 0 || this.indexOf(" ") != 4){
        return false;
    }

    var pos = this.indexOf("-");
    if(pos == -1 || (pos != 9 && pos != 10)){
        return false;
    }
    if(this.substring(pos,this.length-1).length != 4){
        return false;
    }
    return /^\d+$/.test(this.replace(")","").replace("(","").replace(" ","").replace("-",""));
}