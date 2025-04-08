function adicionarComentario() {
  const input = document.getElementById('comentarioInput');
  const texto = input.value.trim();

  if (texto === '') return;

  const divComentario = document.createElement('div');
  divComentario.className = 'comentario';

  const span = document.createElement('span');
  span.textContent = texto;

  const botaoFixar = document.createElement('button');
  botaoFixar.textContent = 'Fixar';
  botaoFixar.onclick = () => {
    // Remove qualquer comentário já fixado
    document.querySelectorAll('.comentario').forEach(el => el.classList.remove('fixado'));
    divComentario.classList.add('fixado');
  };

  divComentario.appendChild(span);
  divComentario.appendChild(botaoFixar);

  document.getElementById('comentarios').appendChild(divComentario);
  input.value = '';
}
