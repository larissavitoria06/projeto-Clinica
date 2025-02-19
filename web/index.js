const uri = 'http://localhost:4000';

//Obtendo o título do servidor
const titulo = document.querySelector('header h1'); 
fetch(uri)
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp.titulo);

//Obtendo as consultas do servidor e exibindo na tabela
const corpo = document.querySelector('table tbody'); 
fetch(uri + '/consultas')
    .then(resp => resp.json())
    .then(resp => {
        resp.forEach(c => {
            const linha = document.createElement('tr')
            linha.innerHTML = `
                <td>${c.consulta_id}</td>
                <td>${c.nome_paciente}</td>
                <td>${c.nome_medico}</td>
                <td>${c.data_hora}</td>
            `;
            corpo.appendChild(linha);
        });
    });

//Enviando uma nova consulta para o servidor
const form = document.querySelector('form'); 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const body = {
        paciente: form.paciente.value,
        medico: form.medico.value,
        data: form.data.value
    };

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/10.3.1' },
        body: JSON.stringify(body)
    };

    fetch(uri + '/consultas', options)
        .then(resp => resp.status)
        .then(resp => resp === 201 ? window.location.reload() : alert(resp))
        .catch(err => console.error(err));
});