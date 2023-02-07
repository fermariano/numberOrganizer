function enviar() {
    var valoru = document.getElementById('numero').value
    var valord = document.getElementById('numerod').value
    var valort = document.getElementById('numerot').value
    var numeros = []
    numeros.push(valoru, valord, valort)
    document.getElementById('local').innerHTML += (` ${numeros} `)
    document.getElementById('numero').value = ""
    numeros.sort()
    document.getElementById('local').innerHTML = `${numeros}`
    
}


