class Usuario{
    private name;
    private age;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Player extends Usuario{
    protected game;

    constructor(name: string, age: number, game: string){
        super(name, age);

        this.game = game;
    }

    public returnCurrentGame(){
        return `Jogo atual: ${this.game}`;
    }
}

const jogador = new Player("Anna", 21, "Killer Instinct");
console.log(jogador.returnCurrentGame());

/*Um atributo protected pode ser acessado por uma classe heredeira, 
diferentemente de um atributo private, que só pode ser acessado de dentro da classe.*/


//Type assertions
type JogoAssertion = {
    nome: string;
    descricao: string;
}

let jogo = {} as JogoAssertion;
//let jogo = <JogoAssertion>{}
jogo.nome = "TESTE";

console.log(jogo)