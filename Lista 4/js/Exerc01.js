var contaCorrente = {
    saldo: "60",
    faturaAtual: 180,
    creditoDisponivel: 20,
    extrato: {
           entrada: [
            {
                data: "19/04/2025",
                valor: 30
            }
           ],
           saida: [
            {
                data: "16/04/2025",
                valor: "R$ 150",
                descricao: "Casa de carne"
            }
           ]
    },
    exibirExtrato: true
    }
    if(contaCorrente.saldo>=contaCorrente.faturaAtual){
        console.log("\nVocê possui saldo para pagar a fatura atual!\n")
    } 
    else {
        console.log("\nvocê não possui saldo para pagar a fatura atual!\n") 
    }
if(contaCorrente.exibirExtrato){
    console.log(contaCorrente.extrato)
} 
else{
    console.log("Não imprimir extrato.")
}