//mettete questa funzione prima del try
async function catchError (err, message) {
    let botDeveloper = client.users.cache.get('id del developer a cui verranno mandati gli errori')
    botDeveloper.send(`Si è verificato un errore!\nDi seguito tutte le informazioni:\nServer: ${message.guild}\nCanale: ${message.channel}\nComando eseguito: ${message}\nComando eseguito da: ${message.author}`)
    botDeveloper.send('--------------------------------\nErrore:\n' + '```javascript\n' + err + '```');
    botDeveloper.send('Altre informazioni: ' + await message.channel.createInvite({maxAge: 0, maxUses: 0}));
}

try {
/*
codice bot, non includere le constanti discord e client, e non dopo il token
il codice può essere usato in ogni file del bot
*/
} catch (err) {
    catchError(err, message)
}

