// 1
const metodoHttp = prompt('Digite o Método HTTP:');

switch (metodoHttp) {
    case 'GET':
        console.log('Buscando dados no banco de dados...');
    break;

    case 'POST':
        console.log('Criando um novo registro...');
    break;

    case 'DELETE':
        console.log('Registro removido com sucesso.');
    break;

    default:
        console.log('Erro: Método não permitido para esta rota.');
    break;
}


// 2
const ambiente = prompt('Digite o ambiente:');

switch (ambiente) {
    case 'dev':
        console.log('Conectando ao banco de dados local (SQLite).');
    break;

    case 'test':
        console.log('Conectando ao banco de dados em memória.');
    break;

    case 'prod':
        console.log('Conectando ao banco de dados oficial na nuvem (PostgreSQL).');
    break;

    default:
        console.log('CRÍTICO: Ambiente não reconhecido. Encerrando o servidor.');
    break;
}


// 3
const comando = prompt('Digite o comando:');

switch (comando) {
    case 'start':
    case 'restart':
        console.log('Iniciando o servidor de aplicação...');
    break;

    case 'status':
        console.log('O servidor está rodando na porta 3000.');
    break;
    
    default:
        console.log("Comando não encontrado. Digite 'help' para ver a lista de comandos.");
}


// 4
const extensaoArquivo = prompt('Digite a Extensão do Arquivo:');

switch (extensaoArquivo) {
    case '.jpg':
    case '.png':
    case '.gif':
        console.log('Arquivo de imagem detectado. Salvando na galeria...');
    break;

    case '.pdf':
    case '.docx':
        console.log('Documento detectado. Salvando na pasta de arquivos...');
    break;

    case '.mp4':
    case '.mov':
        console.log('Vídeo detectado. Enviando para processamento de mídia...');
    break;

    case '.exe':
    case '.bat':
        console.log('Bloqueado: Arquivos executáveis não são permitidos por segurança.');
    break;

    default:
        console.log('Formato não suportado pelo sistema.');
    break;
}