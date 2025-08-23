const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, digite um nome válido.');
    return;
  }

  // Verifica se o nome já está na lista
  const nomesExistentes = Array.from(listaAmigos.children).map(li => li.textContent);
  if (nomesExistentes.includes(nome)) {
    alert('Este nome já foi adicionado.');
    input.value = '';
    return;
  }

  // Cria um novo item na lista
  const li = document.createElement('li');
  li.textContent = nome;
  li.classList.add('name-item');  // Para estilizar no CSS

  listaAmigos.appendChild(li);

  input.value = '';
  input.focus();

  // Limpa o resultado anterior ao adicionar novo amigo
  resultado.innerHTML = '';
}

function sortearAmigo() {
  const nomes = Array.from(listaAmigos.children).map(li => li.textContent);

  if (nomes.length < 2) {
    alert('Adicione pelo menos dois amigos para sortear.');
    return;
  }

  // Sorteia um amigo aleatório
  const indiceSorteado = Math.floor(Math.random() * nomes.length);
  const amigoSorteado = nomes[indiceSorteado];

  // Limpa o resultado e cria o texto verde
  resultado.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  li.style.color = 'green';
  li.style.fontWeight = '700';
  li.classList.add('result-item'); // Se quiser estilizar pelo CSS

  resultado.appendChild(li);
}
