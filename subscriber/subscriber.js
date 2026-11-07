// Importa a biblioteca MQTT para permitir a comunicação com o broker
const mqtt = require('mqtt')


// Cria um cliente MQTT e conecta ao broker que está rodando localmente
// na porta 1884
const cliente = mqtt.connect('mqtt://localhost:1884', {
    reconnectPeriod: 2000,
    connectTimeout: 10000,
    clean: true
})


// Evento disparado quando a conexão com o broker é estabelecida
cliente.on('connect', ()=>{
    
    // Exibe mensagem informando que a conexão foi realizada
    console.log('conectado ao MQTT')


    // Faz a inscrição (subscribe) no tópico informado
    // QoS 0 significa entrega sem garantia de confirmação
    cliente.subscribe(
        'iot/sensor-01/luz-01',
        {qos: 0}, //quality of service: 0 entrega garantida de um pacote. 1 garantia parcial. 2 fluxo exato
        (erro, concedidos)=>{
            
            // Verifica se ocorreu algum erro ao realizar a assinatura
            if(erro){
                console.log('Erro ao assinar o tópico', erro)
                return
            }

            // Exibe mensagem caso a assinatura seja concluída com sucesso
            console.log('Luz-01 Conectada')
        }
    )
})


// Evento disparado quando a conexão com o broker é estabelecida
cliente.on('connect', ()=>{


    // Faz a inscrição (subscribe) no tópico informado
    // QoS 0 significa entrega sem garantia de confirmação
    cliente.subscribe(
        'iot/sensor-02/luz-02',
        {qos: 0}, //quality of service: 0 entrega garantida de um pacote. 1 garantia parcial. 2 fluxo exato
        (erro, concedidos)=>{
            
            // Verifica se ocorreu algum erro ao realizar a assinatura
            if(erro){
                console.log('Erro ao assinar o tópico', erro)
                return
            }

            // Exibe mensagem caso a assinatura seja concluída com sucesso
            console.log('Luz-02 Conectada')
        }
    )
})



// Evento disparado quando a conexão com o broker é estabelecida
cliente.on('connect', ()=>{


    // Faz a inscrição (subscribe) no tópico informado
    // QoS 0 significa entrega sem garantia de confirmação
    cliente.subscribe(
        'iot/sensor-03/luz-03',
        {qos: 0}, //quality of service: 0 entrega garantida de um pacote. 1 garantia parcial. 2 fluxo exato
        (erro, concedidos)=>{
            
            // Verifica se ocorreu algum erro ao realizar a assinatura
            if(erro){
                console.log('Erro ao assinar o tópico', erro)
                return
            }

            // Exibe mensagem caso a assinatura seja concluída com sucesso
            console.log('Luz-03 Conectada')
        }
    )
})


// Evento executado sempre que uma mensagem é recebida
// em algum tópico assinado
cliente.on('message', (topico, mensagem)=>{

    // Mostra o nome do tópico que enviou a mensagem
    console.log('Tópico', topico)

    // Converte o Buffer recebido para texto e exibe o conteúdo
    console.log('mensagem', mensagem.toString())
}) 


// Evento disparado quando ocorre algum erro relacionado ao MQTT
cliente.on('error', (erro)=>{

    // Exibe a mensagem de erro
    console.log('Erro MQTT', erro.message)
})


// Evento acionado quando a conexão cai e o cliente tenta
// se reconectar automaticamente ao broker
cliente.on('reconnect',()=>{

   // Informa que uma nova tentativa de conexão está sendo feita
    console.log('Tentando reconectar...')
})