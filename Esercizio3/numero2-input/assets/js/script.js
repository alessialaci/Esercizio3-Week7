var saluto = document.getElementById('saluto');

document.getElementById('log').addEventListener('click', () => {
    let nome = document.getElementById('nome').value;
    saluto.innerHTML = `Ciao, ${nome}`;
    localStorage.setItem('nome', nome);
})

document.getElementById('delete').addEventListener('click', () => {
    document.getElementById('nome').value = '';
    saluto.innerHTML = 'No data';
    localStorage.removeItem('nome');
})