// particles.js config
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#ff4444" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    move: { enable: true, speed: 1.5 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" }
    }
  }
});

const comprovantesValidos = [];

function abrirDetalhes(nome, imagem, preco) {
  document.getElementById("modal-titulo").textContent = "Finalizar Compra";
  document.getElementById("modal-produto").textContent = nome;
  document.getElementById("modal-preco").textContent = preco.toFixed(2);
  document.getElementById("modal-imagem").src = imagem || "";
  document.getElementById("codigo-comprovante").textContent = "";
  document.getElementById("modal-compra").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal-compra").style.display = "none";
}

function copiarPix() {
  const pix = document.getElementById("modal-pix").textContent;
  navigator.clipboard.writeText(pix).then(() => {
    alert("Pix copiado com sucesso!");
  });
}

function gerarComprovante() {
  const cod = "MIX-" + Math.random().toString(36).substr(2, 6).toUpperCase();
  document.getElementById("codigo-comprovante").textContent = "Código do comprovante: " + cod;
  comprovantesValidos.push(cod);
}

function verificarComprovante() {
  const input = document.getElementById("codigo").value.trim().toUpperCase();
  const resultado = document.getElementById("resultado");

  if (comprovantesValidos.includes(input)) {
    resultado.textContent = "✅ Comprovante VÁLIDO!";
    resultado.style.color = "lime";
  } else {
    resultado.textContent = "❌ Comprovante INVÁLIDO!";
    resultado.style.color = "red";
  }
}

// Texto animado estilo máquina de escrever
const mensagens = [
  "🔥 Promoções imperdíveis hoje!",
  "🛒 Pagamento rápido via Pix!",
  "🎁 Receba seu produto instantaneamente!",
  "❓ Algum erro? visite nosso Discord e fale com Alvez"
];

let i = 0, char = 0;

function digitar() {
  if (char < mensagens[i].length) {
    document.getElementById("mensagem").textContent += mensagens[i].charAt(char);
    char++;
    setTimeout(digitar, 100);
  } else {
    setTimeout(() => {
      document.getElementById("mensagem").textContent = "";
      char = 0;
      i = (i + 1) % mensagens.length;
      setTimeout(digitar, 500);
    }, 2000);
  }
}

window.onload = digitar;
// Seleciona elementos do menu e popups
const menuBtn = document.getElementById('menu-btn');
const menuLateral = document.getElementById('menu-lateral');
const menuTema = document.getElementById('menu-tema');
const menuReclamacoes = document.getElementById('menu-reclamacoes');

// Alterna menu lateral e botão X
function toggleMenu() {
  menuBtn.classList.toggle('ativo');
  if (menuLateral.style.display === 'block') {
    // fecha menu
    menuLateral.style.animation = 'fadeSlideOut 0.3s forwards';
    setTimeout(() => {
      menuLateral.style.display = 'none';
    }, 300);
  } else {
    // abre menu
    menuLateral.style.display = 'block';
    menuLateral.style.animation = 'fadeSlideIn 0.4s forwards';
  }

  // Fecha popups se abrir menu lateral
  fecharPopups();
}

// Animação para saída suave do menu lateral
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`@keyframes fadeSlideOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-20px);
  }
}`, styleSheet.cssRules.length);

// Função para abrir menu tema
function abrirTema() {
  esconderMenuEPopups();
  menuTema.classList.remove('oculto');
}

// Função para abrir reclamações
function abrirReclamacoes() {
  esconderMenuEPopups();
  menuReclamacoes.classList.remove('oculto');
}

// Esconder menu lateral e todos os popups
function esconderMenuEPopups() {
  menuLateral.style.display = 'none';
  menuBtn.classList.remove('ativo');
  fecharPopups();
}

// Fecha popups de tema e reclamações
function fecharPopups() {
  menuTema.classList.add('oculto');
  menuReclamacoes.classList.add('oculto');
}

// Define tema claro ou escuro
function setTema(tema) {
  if (tema === 'claro') {
    document.body.classList.add('tema-claro');
  } else if (tema === 'escuro') {
    document.body.classList.remove('tema-claro');
  }
  fecharPopups();
}

// Funções de exemplo para login e enviar reclamações
function fazerLogin() {
  alert('Função de login ainda não implementada.');
  esconderMenuEPopups();
}

function enviarReclamacao() {
  const textarea = menuReclamacoes.querySelector('textarea');
  const texto = textarea.value.trim();
  if(texto) {
    alert('Reclamação enviada! Obrigado pelo feedback.');
    textarea.value = '';
    esconderMenuEPopups();
  } else {
    alert('Por favor, escreva algo antes de enviar.');
  }
}


// Modal de compra - abre e fecha
const modalCompra = document.getElementById('modal-compra');
const modalTitulo = document.getElementById('modal-titulo');
const modalImagem = document.getElementById('modal-imagem');
const modalProduto = document.getElementById('modal-produto');
const modalPreco = document.getElementById('modal-preco');
const codigoComprovante = document.getElementById('codigo-comprovante');

function abrirDetalhes(nome, img, preco) {
  modalTitulo.textContent = "Finalizar Compra";
  modalProduto.textContent = nome;
  modalPreco.textContent = preco.toFixed(2);
  if(img) {
    modalImagem.src = img;
    modalImagem.style.display = 'block';
  } else {
    modalImagem.style.display = 'none';
  }
  codigoComprovante.textContent = "";
  modalCompra.style.display = 'block';
}

function fecharModal() {
  modalCompra.style.display = 'none';
}

// Copiar Pix para área de transferência
function copiarPix() {
  const pix = document.getElementById('modal-pix').textContent;
  navigator.clipboard.writeText(pix).then(() => {
    alert('Número Pix copiado!');
  });
}

// Gerar código de comprovante aleatório
function gerarComprovante() {
  const codigo = 'MTD-' + Math.random().toString(36).substr(2, 8).toUpperCase();
  codigoComprovante.textContent = 'Código: ' + codigo;
}

// Verificar comprovante (exemplo simples)
function verificarComprovante() {
  const codigo = document.getElementById('codigo').value.trim();
  const resultado = document.getElementById('resultado');
  if(codigo.startsWith('MTD-')) {
    resultado.style.color = '#00ff00';
    resultado.textContent = 'Comprovante válido!';
  } else {
    resultado.style.color = '#ff4444';
    resultado.textContent = 'Comprovante inválido ou não encontrado.';
  }
}

// Fechar modal ao clicar fora do conteúdo
window.onclick = function(event) {
  if (event.target === modalCompra) {
    fecharModal();
  }
}