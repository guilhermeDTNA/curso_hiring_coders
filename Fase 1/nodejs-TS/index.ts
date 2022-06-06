import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile } from 'fs';

const port = 5000

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    const urlparse = url.parse(request.url ? request.url : '', true);

    var resposta;

    const params = parse(urlparse.search ? urlparse.search : '');

    //URL de criação: http://localhost:5000/criar-atualizar-usuario?id=123&nome=Guilherme
    if(urlparse.pathname == '/criar-atualizar-usuario'){
        writeFile('users/' + params.id + '.txt', JSON.stringify(params), function(err: any){
            if(err) throw err;
            console.log("Saved!!");

            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            resposta = "Usuário criado/alterado com sucesso!";
            
            response.end(resposta);
        })
    } else{
        response.end("404");
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});