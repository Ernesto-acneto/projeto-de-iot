const mqtt = require('mqtt') // Importa a biblioteca MQTT

const cliente = mqtt.connect('mqtt://localhost:1884') // Conecta ao broker MQTT na porta 1884

cliente.on('connect', () => { // Executa quando a conexão for estabelecida
    console.log('Publicador Conectado!')
    let contador = 0
    
    const intervalo = setInterval(() => {     // Executa a cada 5 segundos
        contador++
        const leitura = {    // Dados que serão enviados
            dispositivo: 'sensor-luz-01',
            luz: Math.floor(Math.random() * (10 + 1)),
            timestamp: new Date().toISOString() // Data e hora atual em formato ISO
        }

        const payload = JSON.stringify(leitura) // Converte o objeto em texto JSON
        
        cliente.publish( // Publica a mensagem no tópico informado
            'iot/sensor-01/luz-01',
            payload,
            { qos: 1 }, // QoS 1: garante que a mensagem chegue pelo menos uma vez
            (erro) => { // Callback executado após a tentativa de envio
                if (erro) {
                    console.error('Erro ao publicar', erro)
                } else {
                    console.log('Mensagem Enviada', payload)
                }
                
                if (contador >= 6) {
                    clearInterval(intervalo)
                    console.log('Finalizado')
                    cliente.end() // Encerra a conexão com o broker
                }
            }
        )
    }, 2000)
})


cliente.on('connect', () => { // Executa quando a conexão for estabelecida
    let contador = 0
    
    const intervalo = setInterval(() => {     // Executa a cada 5 segundos
        contador++
        const leitura = {    // Dados que serão enviados
            dispositivo: 'sensor-luz-02',
            luz: Math.floor(Math.random() * (10 + 1)),
            timestamp: new Date().toISOString() // Data e hora atual em formato ISO
        }

        const payload = JSON.stringify(leitura) // Converte o objeto em texto JSON
        
        cliente.publish( // Publica a mensagem no tópico informado
            'iot/sensor-02/luz-02',
            payload,
            { qos: 1 }, // QoS 1: garante que a mensagem chegue pelo menos uma vez
            (erro) => { // Callback executado após a tentativa de envio
                if (erro) {
                    console.error('Erro ao publicar', erro)
                } else {
                    console.log('Mensagem Enviada', payload)
                }
                
                if (contador >= 6) {
                    clearInterval(intervalo)
                    console.log('Finalizado')
                    cliente.end() // Encerra a conexão com o broker
                }
            }
        )
    }, 2000)
})

cliente.on('connect', () => { // Executa quando a conexão for estabelecida
    let contador = 0
    
    const intervalo = setInterval(() => {     // Executa a cada 5 segundos
        contador++
        const leitura = {    // Dados que serão enviados
            dispositivo: 'sensor-luz-03',
            luz: Math.floor(Math.random() * (10 + 1)),
            timestamp: new Date().toISOString() // Data e hora atual em formato ISO
        }

        const payload = JSON.stringify(leitura) // Converte o objeto em texto JSON
        
        cliente.publish( // Publica a mensagem no tópico informado
            'iot/sensor-03/luz-03',
            payload,
            { qos: 1 }, // QoS 1: garante que a mensagem chegue pelo menos uma vez
            (erro) => { // Callback executado após a tentativa de envio
                if (erro) {
                    console.error('Erro ao publicar', erro)
                } else {
                    console.log('Mensagem Enviada', payload)
                }
                
                if (contador >= 6) {
                    clearInterval(intervalo)
                    console.log('Finalizado')
                    cliente.end() // Encerra a conexão com o broker
                }
            }
        )
    }, 2000)
})

// Trata erros do cliente MQTT
cliente.on('error', (erro) => {
    console.error('Erro MQTT', erro.message)
})