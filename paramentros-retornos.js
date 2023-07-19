// Métodos - parâmetros e retornos
class Usuario {

  constructor(){
    this.email = ""
    this.senha = ""
    this.subtotalCompra = 0
  }
  
  logar(){
    
    let emailBD = "nathan@gmail.com"
    let senhaBD = "1234"
    
    if( senhaBD == this.senha ){
      //console.log("senha válida")
      return "senha válida"
    }else{
      //console.log("senha inválida")
      return "senha inválida"
    }
    
  }
  
  calcularDesconto( cupom ){
    
    let desconto = 0
    if( cupom == "DESC20" ){
      desconto = 20
    }else if( cupom == "FESTA10" ){
      desconto = 10
    }
    
    return this.subtotalCompra - desconto
  
    
  }
  
}

const usuario = new Usuario()
usuario.subtotalCompra = 500
usuario.calcularDesconto( "FESTA10" )



/*
usuario.email = "nathan@gmail.com"
usuario.senha = "1234"

let mensagem = usuario.logar()
console.log(mensagem)
*/


