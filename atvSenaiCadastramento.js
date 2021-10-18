let dataevento = new Date ("10/15/2021").toLocaleDateString().substr(0,10);
let datapalestrante = new Date ("10/17/2021").toLocaleDateString().substr(0,10);
let evento = ["TECNOLOGIA" , "MARKETING" , "LIBRAS" , "LETRAS"]
let nomepalest =  ("Thiago")


console.log("                                                                                     ")
console.log("                                                                                     ")
 console.log ("               -------------CADASTRATO DE PALESTRANTES--------------")
 console.log("                                                                                     ")
 console.log("                                                                                     ")
 console.log(`---------------------------------------------------- `)
console.log (evento)
console.log(`----------------------------------------------------- `)
console.log ("Escolha um dos eventos? ")
   console.log (`Show, o evento será ${evento[2]}`)
 console.log ("Qual a data do evento? ")
if (dataevento <= datapalestrante ) {
  console.log(`DATA AUTORIZADA ${datapalestrante} data disponivel`)
   console.log  ("Qual seu nome ?")
   console.log (`Prazer, ${nomepalest}`)
   console.log(`-------------------------------------------------------------------------------------------- `)
   console.log(`Ola Sr(a) ${nomepalest} Seu evento --- ${evento[2]} --- na data ${datapalestrante} foi agendado com sucesso!`) 
   console.log(`-------------------------------------------------------------------------------------------- `)
   
   console.log("                                                                                     ")
   console.log("                                                                                     ")
   console.log("                                                                                     ")
   console.log("                                                                                     ")
} else {
  console.log(`------------------------------------------------------------------------------------ `)
  console.log (`Infelizmente ${nomepalest} DATA INVALIDA - ${datapalestrante} data não disponivel`)
  console.log(`------------------------------------------------------------------------------------ `)
  console.log("                                                                                     ")
   console.log("                                                                                     ")
   console.log("                                                                                     ")
   console.log("                                                                                     ")
  
}

let quantparticipante = 85
let idade = 18
let nome = ("Hugo")
let dataparticipante = new Date ("10/14/2021").toLocaleDateString().substr(0,10);


console.log ("-------------CADASTRAMENTO DE PARTICIPANTE--------------")
console.log("                                                                                     ")
console.log ("Qual evento deseja participar? ")
console.log(`---------------------------------------------------- `)
console.log (evento)
console.log(`----------------------------------------------------- `)
console.log (`Show, o evento será ${evento[0]}`)
console.log ("Qual seu nome?")
console.log(`${nome}, qual sua idade? `)
if (19 >= idade) {
  console.log(`Idade permitida! Sr ${nome} já atingiu a maior idade`) 
    console.log ("Qual a data do evento deseja participar?") 
    if (dataevento >= dataparticipante) {
        console.log(`Data permitida para o evento ${evento[0]} `)
        if (quantparticipante <= 100 ) {
          console.log(`--------------------------------------------------------`)
          console.log(`Cadastro realizado com sucesso para o evento ${evento[0]} `)
          console.log(`-------------------------------------------------------- `)
          
        } else {
          console.log(`-------------------------------------------------------------------------- `)
          console.log(`Cadastro não realizado para ${evento[0]} limite de participante atingido.`)
          console.log(`-------------------------------------------------------------------------- `)
          
        }
      
    } else {
      console.log(`------------------------------------------ `)
      console.log(`Data invalida para o evento ${evento[0]} `)
      console.log(`------------------------------------------ `)
      
    }
} else {
  console.log(`---------------------------------------------------- `)
  console.log(`Idade negada! Sr ${nome} não atingiu a maior idade`)  
  console.log(`---------------------------------------------------- `)
}


