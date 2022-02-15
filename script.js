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


// nomes

let monstroNome = '';
let cientista = '';
let cacador1 = '';
let cacador2 = '';


// infoCientistaVida = infoCientistaVida - 33.1
// let intCientista = parseInt(infoCientistaVida);

// variavel de tempo
var dias = 0;


do {console.log('Digite o nome do personagem Monstro extraterrestre: ')
     monstroNome = prompt('').toUpperCase();
    if (monstroNome == ''){
        console.log('Digite um nome válido para o Monstro: ')
    }else{
        break;
    }
}while (true){};

do {console.log(`Digite o nome do personagem Cientista: `);
      cientista = prompt('').toUpperCase()
    if (cientista == "") {
        console.log('Digite um nome válido para o cientista')
    }else{
        break;
    }
}while (true){};

do {console.log(`Digite o nome do personagem Caçador 1: `);
     cacador1 = prompt('').toUpperCase()
    if (cacador1 == '') {
        console.log('Digite um nome válido para o caçador 1: ')
    }else{
        break;
    }
}while(true){};
do {
    console.log(`Digite o nome do personagem Caçador 2: `);
         cacador2 = prompt('').toUpperCase()
    if (cacador2 == '') {
        console.log('Digite um nome válido para o caçador 2: ')
    }else{
        break;
    }
}while (true) {};






//variavel de status

let infoMonstro = { 
    vida: 200,
    nome: monstroNome
 }
let infoCacador1 = {
    vida: 100,
    nome: cacador1
}
let infoCacador2 = { 
    vida: 100,
    nome: cacador2

}
let infoCientista = {   
    vida: 100,
    nome: cientista
}





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
                        console.log('\n\nStatus de vida '+infoCacador1.nome+': '+Math.trunc(infoCacador1.vida))
                        console.log('Status de vida '+infoCacador2.nome+': '+Math.trunc(infoCacador2.vida)+'\n\n')
                        dias++
                
                    if(dias == 1){  
                        console.log('\n\n'+infoCacador2.nome+' Encontra o monstro na cidade, ao se aproximar acaba tomando arranhois pois o monstro deixou muita \ndestruição ao redor, '+infoCacador2.nome+' resolve disparar com sua arma um dardo especial capaz de deixar dormindo o monstro: '+infoMonstro.nome+'\n por alguns minutos, \n '+infoCacador2.nome+' aproveita o momento para extrair o sangue e voltar ao laboratorio.\n\n')
                        infoMonstro.vida = infoMonstro.vida - 50;
                    
                        console.log(infoCacador1.nome+' Encontra a navi do monstro: '+infoMonstro.nome+', A navi emite um forte calor, '+infoCacador1.nome+' ao se aproximar da navi encontra uma porta com senha para ser desbloqueada, \n pois desconfia que os materiais importantes para neutralizar o '+infoMonstro.nome+' esteja lá\n\n\n')
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
                
                            infoCacador1.vida = infoCacador1.vida - 33.1
                            infoCacador2.vida = infoCacador2.vida - 33.1

                                console.log('\nO monstro venceu dessa vez, mas você pode jogar novamente se quiser...\n')
                                let continua = prompt (`\n\nDeseja continuar, e tentar novamente pegar os materiais ?  1)sim ou 2)não`)


                                // jogarMais()

                                if (infoCacador2.vida == 0.7000000000000028 && infoCacador2.vida == 0.7000000000000028 ){    
                                        console.log('Você esta sem vida, Você perdeu o jogo\n\n')
                                
                                jogarnovamente();
                                // intCacador2 = parseInt(infoCacador2Vida);
                                // intCacador1 = parseInt(infoCacador1Vida);
                                }
                                
                                else if ( continua == 1){
                                         tentativasS();
                                 }
                                else if (continua == 2){
                                        console.log('Devido ao caus causado, e a falta de materiais para captura e destruição do monstro, a humanidade é dizimada')
                                        jogarnovamente();
                                
                            }


            }

        // function voltaAoLaboratorioComMaterial(){
        //     console.log('\n\n'+cacador2+' Volta para o laboratório com material fibra espacial que será ultilizada para criar uma arma letal \n e matar o monstro. \n\n\n '+cacador1+' Volta com o Sangue do monstro \nque sera ultilizada para criar um antidoto e salvar a humanidade.')
        //     ganharGame();
        // }


     function jogarnovamente(){
            let jogarD = prompt('Deseja jogar novamente ? digite 1 para Sim, 2 Para não ?')

            console.log('\n\nStatus de vida '+infoCacador1.nome+': '+Math.trunc(infoCacador1.vida))
            console.log('Status de vida '+infoCacador2.nome+': '+Math.trunc(infoCacador2.vida)+'\n\n')

            if ( jogarD == 1){
                
                //Retornando valores das variaves
                 escolha = "";
                 separados = true;
                 chances = 3;
                 count = 0;
                 dias = 0;

                //Retornando valores das variaves
                 infoMonstro.vida = 200;
                 infoCacador1.vida = 100;
                 infoCacador2.vida = 100;
                 infoCientista.vida = 100;
                 
                
                validador();
                tentativasS();
                
            }
            else if (jogarD == 2){
            }

            }

            function voltaAoLaboratorioComMaterial(){

                console.log('\n\n'+infoCacador2.nome+' Volta para o laboratório com material fibra espacial que será ultilizada para criar uma arma letal \n e matar o monstro. \n\n\n '+infoCacador1.nome+' Volta com o Sangue do monstro \nque sera ultilizada para criar um antidoto e salvar a humanidade.')
                ganharGame();
            }

            // break; esta quebrando codigo 
            
            
            // function jogarMais(){
            //                         do {
            //             console.log(`
            //          Deseja jogar de novo?: 
            //          1) Sim            2) Não
            //          `)
            //             let jogaMais = prompt(`R: `).toLowerCase();
            //             if (jogaMais == 1 || jogaMais == `sim`) {
            //                 console.clear();
            //                 validador();
            //             }  if (jogaMais == 2 || jogaMais == 'nao') {
            //                 console.log('FIM!')
            //                 break;
            //             }
            //         }while (true){} 
            // }
            function ganharGame(){
                console.log('Parabéns você ganhou o jogo, O monstro foi Derrotado com uma arma letal e a humanidade foi salva com o antitodo criado pelo cientista  \n ')
            }