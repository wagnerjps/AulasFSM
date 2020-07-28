// Global Escope
const var0 = 30

function teste() {                         //Abre um escope
    //Local Scope #1
                                            //Todas funções enchergam o Global Scope

    const var1 = 20
    function outroTeste(params) {           //Abre um escope
        // Local Scope #2
        const var2 = 10
        console.log(var0, var1, var2)
    }                                       //Fecha um escope
    /*
    if(var0===30){     
        // Local Scope #3                   //Abre um escope
        const var4 = 5
    }                                       //Fecha um escope
    console.log(var4)                       //Não encherga pois esta tentando acessar fora do escopo
    */

    for(let i=0; i<10; i++){                //Abre um escope
        // Local Scope #4
        console.log(i)
    }                                       //Fecha um escope
    
    outroTeste()
}                                           //Fecha um escope
teste()


