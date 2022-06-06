//void
function principal(): void{
    console.log("Retorna void, não undefined")
}

principal();



//never
//never serve para laços de repetição ou funções de disparam erros
function funcaoQueNuncaRetorna(): never{
    while(true){

    }

    throw new Error("Erro capturado")
}


//alias
type User = {
    name: string;
    lastName: string;
    birthDate: string;
    age?: number //Opcional
}

const guilherme: User = {
    name: 'Guilherme',
    lastName: 'Rocha',
    birthDate: '24/2/1998'
}


// Unio types
// | (como se fosse ||)
type LogLevel = 'info' | 'error' | 'debug';

function logMessage (message: string, level: LogLevel){
    console.log(`${level} - ${message}`);
}

logMessage('Uma informação', 'info');
logMessage('Informação', "debug");


//Intersection types (Junta dois ou mais types)
type About = {
    bio: string;
    interests: string[]
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: "Guilherme",
    lastName: "Rocha",
    birthDate: "24/02/1998",
    age: 24,
    bio: "Olá, meu nome é Guilherme",
    interests: ["Jogos", "Programação"]
}