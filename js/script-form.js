// um padrão de boa prática é que os nomes em JS quando composto todo nome que sucede o primeiro sempre vai começar com letra maiúscula.
function enviarContato() {
    let name = document.getElementById('nome')
    /*
    Criado uma variável (nesse caso a let é uma variavel de uso somente dentro da função onde ela foi declarada, mas pode usar var pra variaveis que poden ser usadas e declarada na função ou fora dela. temos tambem const que define como uma constante, uma vez declarada tem de ser mantida ete o final da função e não pode ser alterada) nome que vai receber o conteúdo do id='nome'
    get= Pega, Element= Elemento, by=por, Id=nome, ('')=nome da id do HTML
    */
    // alert(nome.value)
    // para mostrar o valor do conteúdo
    if(nome.value ==''){
        name.style.border="1px solid red"
        // ele vai alterar a borda para red
        // '' coresponde a vazio
    }else{
        nome.style.border='1px solid #202c73'
    }
    // Para programar para mudar a borda somente se (if) estiver vazio.
    // a borda estiver red e preencher então passa para o código: se não (else) voltar a borda para azul
    // **** vimos acima como confirmar se o campo nome tem falor
    
    // let email = document.getElementById('email')
    // neste caso não declaramos a variavel, o JS busca no HTML
    if(email.value ==''){
        email.style.border="1px solid red"
    }else{
        email.style.border='1px solid #202c73'
    }
    // **** vimos acima como confirmar se o campo email tem falor

    if(tipo.value ==''){
        tipo.style.border="1px solid red"

        document.getElementById('div-form-alerta').innerHTML=(`
        <div id="form-alerta">
            Preencha todos os campos obrigatórios!
        </div>
        `)
    }else{
        tipo.style.border='1px solid #202c73'

        document.getElementById('div-form-alerta').innerHTML=(``)
    }
    // **** vimos acima como confirmar se o campo tipo (selecione) tem falor
    
    
    /*
    &&=e
    ||=ou (PIPE ( | ) )
    */

    /*
    tudo isso poderia ser escrito assim:

    function enviarContato() {
        validaCampoVazio(nome)
        validaCampoVazio(email)
        validaCampoVazio(tipo)
        }  
        
    function validaCampoVazio(campo) {
        if(campo.value ==''){
            campo.style.border="1px solid red"
        }else{
             campo.style.border='1px solid #202c73'
            }
        }

        isso se chama: REFATORAR
    */
}