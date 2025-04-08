function trocarFotoPerfil(event) {
    const imagem = event.target.files[0];
    if (imagem) {
      const url = URL.createObjectURL(imagem);
      document.getElementById('fotoPerfil').src = url;
    }
  }
  
  function postarImagem(event) {
    const imagem = event.target.files[0];
    if (imagem) {
      const url = URL.createObjectURL(imagem);
      const area = document.getElementById('areaPostagem');
      area.innerHTML = `<img src="${url}" alt="Postagem">`;
    }
  }
  
  function adicionarComentario() {
    const input = document.getElementById('comentarioInput');
    const texto = input.value.trim();
    if (texto === '') return;
  
    const div = document.createElement('div');
    div.className = 'comentario';
  
    const span = document.createElement('span');
    span.textContent = texto;
  
    const btnFixar = document.createElement('button');
    btnFixar.textContent = 'Fixar';
    btnFixar.onclick = () => {
      document.querySelectorAll('.comentario').forEach(c => c.classList.remove('fixado'));
      div.classList.add('fixado');
    };
  
    div.appendChild(span);
    div.appendChild(btnFixar);
  
    document.getElementById('listaComentarios').appendChild(div);
    input.value = '';
  }
  