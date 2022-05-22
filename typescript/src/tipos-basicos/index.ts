//String
let nome: string;
nome = "23";

function nomeCompleto(nome: string, sobrenome: string){
    return `${nome} ${sobrenome}`;
}

nomeCompleto("Guilherme", "Rocha");


//Number
let idade: number;
idade = parseInt("25")

console.log(idade)


//Boolean
let isActive: boolean;

isActive = false;


//Array
let lista: string[] = [
    "Item 1"
]

let lista2 = [...lista];
console.log(lista2)


//Tupla
const pets: [string, string, string] = [
    "gato1",
    "gato2",
    "gato3"
]

const petIdade: [any, number] = [
    3, 12
]


//Enum
enum Permissoes {
    admin,
    editor,
    comum
}

enum Cores {
    red = "#ff0000",
    black = "#000"
}

const usuario = {
    //Atribui a nivel o valor 2
    nivel: Permissoes.comum,
    cor: Cores.black
}

console.log(usuario)


//Unknown, null e undefined
let teste: unknown;
let variavelNula: null;
let variavelIndefinida: undefined


//Object
let pesoa: object = {
    name: 'guilherme',
    lastName: 'Rocha'
}

