const prompt = require ('prompt-sync')();


console.log(`\n\n\n
Um acidente no espaço faz com que um monstro caia no planeta, sua cápsula foi vista caindo em uma grande floresta proximo a cidade, porém as pessoas
da cidade alegam que o extraterrestre está rondando a cidade e quando ele começa a entrar em contato com as pessoas transmite um vírus letal 
que vai dizimar a população em 3 dias.
Ao ser reconhecido como uma ameaça, se inicia no planeta uma caçada para capturar o extraterrestre e encontrar uma cura para esse vírus.
No laboratório da cidade começam as pesquisas para encontrar uma cura para esse vírus letal,o cientista ao examinar os corpos mortos 
que há uma alteração no sangue dos infectados e que só poderá produzir o antídoto para a cura com o sangue do monstro.
Capturar esse monstro não é fácil ele ronda por toda a cidade eningém sabe ao certo o que ele pode fazer além de infectar, ele é muito poderoso 
e somente com materiais como fibra espacial produzidos no seu planeta são capazes de aniquilar o extraterrestre
\n\n\n`);



let escolha = "";
let separados = true;
let chances = 3;
let count = 0;
let numeroCodigo = [];
var codigo = [1, 3, 5];
var sorteio = shuffle(codigo);



//variavel de status

let infoMonstroVida = { 
    vida: 200
 }
let infoCacador1Vida = {
    vida: 100
}
let infoCacador2Vida = { 
    vida: 100
}
let infoCientistaVida = {   
    vida: 100
}
// infoCientistaVida = infoCientistaVida - 33.1
// let intCientista = parseInt(infoCientistaVida);

// variavel de tempo
var dias = 0;



let monstroNome = prompt(`Digite o nome do personagem Monstro extraterrestre: `);
let cientista = prompt(`Digite o nome do personagem Cientista: `);
let cacador1 = prompt(`Digite o nome do personagem Caçador 1: `);
let cacador2 = prompt(`Digite o nome do personagem Caçador 2: `);

validador();
tentativasS();


        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
            let numero = "";

            // While there remain elements to shuffle...
            while (currentIndex != 0) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
            for (const item of array) {
                numero = numero + item.toString();
            }
            return numero;
        }

        


        function validador(){
            do { console.log(`
                Deseja separar ${cacador1} e ${cacador2} para cada um buscar um elemento?: 
                1) Sim            2) Não
                `)
                escolha = prompt(`R: `).toLowerCase();
                if (escolha == 1 || escolha == `sim`) {
                    separados = true;
                    break;
                } else if (escolha == 2 || escolha == `nao`) {
                    separados = false;
                    break;
                } else {
                    console.log('Escolha não identificada')
                    //criar retorno para escolha
                };
            }while(true){}

        }
  
        function tentativasS(){
            if(separados == true){    
                    console.log('\n\nStatus de vida '+cacador1+': '+Math.trunc(infoCacador1Vida.vida))
                    console.log('Status de vida '+cacador2+': '+Math.trunc(infoCacador2Vida.vida)+'\n\n')
                    dias++
            
                if(dias == 1){  
                    console.log('\n\n'+cacador2+' Encontra o monstro na cidade, ao se aproximar acaba tomando arranhois pois o monstro deixou muita \ndestruição ao redor, '+cacador2+' resolve disparar com sua arma um dardo especial capaz de deixar dormindo o monstro: '+monstroNome+'\n por alguns minutos, \n '+cacador2+' aproveita o momento para extrair o sangue e voltar ao laboratorio.\n\n')
                    infoMonstroVida.vida = infoMonstroVida.vida - 50;
                
                    console.log(cacador1+' Encontra a navi do monstro: '+monstroNome+', A navi emite um forte calor, '+cacador1+' ao se aproximar da navi encontra uma porta com senha para ser desbloqueada, \n pois desconfia que os materiais importantes para neutralizar o '+monstroNome+' esteja lá\n\n\n')
                    console.log('\n\nTentativa do dia '+dias+' para salvar o mundo\n\n')
                    
                }
                else if (dias == 2){
                    console.log('\n\nTentativa do dia '+dias+' para salvar o mundo\n\n')

                }
                else if(dias == 3){
                    console.log('\n\nTentativa do dia '+dias+' para salvar o mundo\n\n')
                }

                    
                    
                for (let tentativa = 0; tentativa < 3; tentativa++) {
                        codigo = prompt('Digite o códico para desbloquear a porta da navi: ')
                    
                        if (codigo == sorteio) {
                            console.log(`Você acertou, o código é ${sorteio}, pegue seus elementos e siga para a próxima etapa.`)
                            
                            voltaAoLaboratorioComMaterial();
                        }
                    }
                    
                    
                    if (codigo != sorteio) {
                        console.log('você errou, se ainda possui vida tente mais uma vez!\n\n')
                        voltaLaboratorioSemMaterial();
                        
                
                        }
            }
            else if (separados == false){
                    console.log('Caçador 1: '+cacador1+' e caçador 2: '+cacador2+' Vão juntos, porém acabam se atrasando demais na busca pelos materiais, e o monstro acaba destruindo a humanidade')
                    jogarnovamente();
            }

       
        }

        function voltaLaboratorioSemMaterial(){
            

                infoCacador1Vida.vida = infoCacador1Vida.vida - 33.1
                infoCacador2Vida.vida = infoCacador2Vida.vida - 33.1


            if (infoCacador2Vida.vida == 0.7000000000000028 && infoCacador2Vida.vida == 0.7000000000000028 ){    
                
                console.log('Você esta sem vida, Você perdeu o jogo\n\n')
                
                jogarnovamente();
                // intCacador2 = parseInt(infoCacador2Vida);
                // intCacador1 = parseInt(infoCacador1Vida);
            }else{
                tentativasS();
            }

        }

        // function voltaAoLaboratorioComMaterial(){
        //     console.log('\n\n'+cacador2+' Volta para o laboratório com material fibra espacial que será ultilizada para criar uma arma letal \n e matar o monstro. \n\n\n '+cacador1+' Volta com o Sangue do monstro \nque sera ultilizada para criar um antidoto e salvar a humanidade.')
        //     ganharGame();
        // }


        function jogarnovamente(){
            let jogarD = prompt('Deseja jogar novamente ? digite 1 para Sim, 2 Para não ?')

            console.log('\n\nStatus de vida '+cacador1+': '+Math.trunc(infoCacador1Vida.vida))
            console.log('Status de vida '+cacador2+': '+Math.trunc(infoCacador2Vida.vida)+'\n\n')

            if ( jogarD == 1){
                
                //Retornando valores das variaves
                 escolha = "";
                 separados = true;
                 chances = 3;
                 count = 0;
                 dias = 0;

                //Retornando valores das variaves
                 infoMonstroVida.vida = 200;
                 infoCacador1Vida.vida = 100;
                 infoCacador2Vida.vida = 100;
                 infoCientistaVida.vida = 100;
                 
                
                validador();
                tentativasS();
                
            }
            else if (jogarD == 2){
            }

    }

    function voltaAoLaboratorioComMaterial(){
        let continua = 

        console.log('\n\n'+cacador2+' Volta para o laboratório com material fibra espacial que será ultilizada para criar uma arma letal \n e matar o monstro. \n\n\n '+cacador1+' Volta com o Sangue do monstro \nque sera ultilizada para criar um antidoto e salvar a humanidade.')
        ganharGame();
    }

    function ganharGame(){
        console.log('Parabéns você ganhou o jogo, O monstro foi Derrotado com uma arma letal e a humanidade foi salva com o antitodo criado pelo cientista  \n ')
    }