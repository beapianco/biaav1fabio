// ======== DADOS DAS MÚSICAS ========

const artistas = {
  "Bruno Mars": [
    {
      titulo: "The Lazy Song",
      descricao: "Um hino sobre aproveitar o dia sem preocupações.",
      capa: "https://i.scdn.co/image/ab67616d0000b2737d0ac7a198a6b5c91a02f458",
      embed: "https://open.spotify.com/embed/track/2ZjAV0khL2Cch9Lx5Epd9O"
    },
    {
      titulo: "24K Magic",
      descricao: "Funk moderno com muito estilo e atitude.",
      capa: "https://i.scdn.co/image/ab67616d0000b273b8a7f3f7a8f7d92edfcae607",
      embed: "https://open.spotify.com/embed/track/6B8Be6ljOzmkOmFslEb23P"
    },
    {
      titulo: "Just the Way You Are",
      descricao: "Uma das baladas românticas mais conhecidas de Bruno Mars.",
      capa: "https://i.scdn.co/image/ab67616d0000b273dd349f9d44b65fc52bba1ac6",
      embed: "https://open.spotify.com/embed/track/7BqBn9nzAq8spo5e7cZ0dJ"
    },
    {
      titulo: "Leave The Door Open",
      descricao: "Som soul e romântico com Anderson .Paak no projeto Silk Sonic.",
      capa: "https://i.scdn.co/image/ab67616d0000b273a6e9632b8eafcf057c8e97cf",
      embed: "https://open.spotify.com/embed/track/7MAibcTli4IisCtbHKrGMh"
    }
  ],
  "Justin Bieber": [
    {
      titulo: "Peaches",
      descricao: "Uma vibe relaxante e contagiante.",
      capa: "https://i.scdn.co/image/ab67616d0000b273191bfc2eb3f881b02e78e57b",
      embed: "https://open.spotify.com/embed/track/4iJyoBOLtHqaGxP12qzhQI"
    },
    {
      titulo: "Ghost",
      descricao: "Uma balada sobre saudade e superação.",
      capa: "https://i.scdn.co/image/ab67616d0000b273b5155c28bb4dfdd5432a2cc4",
      embed: "https://open.spotify.com/embed/track/6I3mqTwhRpn34SLVafSH7G"
    },
    {
      titulo: "Sorry",
      descricao: "Um sucesso pop dançante e cheio de energia.",
      capa: "https://i.scdn.co/image/ab67616d0000b27345f6e77bb89c5b9b8f6d4eaa",
      embed: "https://open.spotify.com/embed/track/09CtPGIpYB4BrO8qb1RGsF"
    },
    {
      titulo: "Love Yourself",
      descricao: "Mensagem poderosa sobre amor próprio e desapego.",
      capa: "https://i.scdn.co/image/ab67616d0000b27345f6e77bb89c5b9b8f6d4eaa",
      embed: "https://open.spotify.com/embed/track/50kpGaPAhYJ3sGmk6vplg0"
    }
  ],
  "Coldplay": [
    {
      titulo: "Yellow",
      descricao: "Um clássico emocionante e cheio de significado.",
      capa: "https://i.scdn.co/image/ab67616d0000b27353f4c8a1f7bfb207b1a4a3f2",
      embed: "https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg"
    },
    {
      titulo: "Viva La Vida",
      descricao: "Uma música épica sobre poder e redenção.",
      capa: "https://i.scdn.co/image/ab67616d0000b273f93e83c2e9e5e10b32d2f2b5",
      embed: "https://open.spotify.com/embed/track/1mea3bSkSGXuIRvnydlB5b"
    },
    {
      titulo: "Adventure of a Lifetime",
      descricao: "Uma viagem sonora vibrante e otimista.",
      capa: "https://i.scdn.co/image/ab67616d0000b273204e39f8cdb86e2b6a7d2f4b",
      embed: "https://open.spotify.com/embed/track/69uxyAqqPIsUyTO8txoP2M"
    },
    {
      titulo: "Fix You",
      descricao: "Uma das músicas mais emocionantes da banda.",
      capa: "https://i.scdn.co/image/ab67616d0000b27339d3baf8b0b5a4ce1f8f8f61",
      embed: "https://open.spotify.com/embed/track/7LVHVU3tWfcxj5aiPFEW4Q"
    }
  ],
  "Travis Scott": [
    {
      titulo: "SICKO MODE",
      descricao: "Um clássico moderno do rap com batidas intensas.",
      capa: "https://i.scdn.co/image/ab67616d0000b2736ff3c79b4efb46d6ed62d61a",
      embed: "https://open.spotify.com/embed/track/2xLMifQCjDGFmkHkpNLD9h"
    },
    {
      titulo: "HIGHEST IN THE ROOM",
      descricao: "Atmosférica e introspectiva, mostra o estilo único de Travis.",
      capa: "https://i.scdn.co/image/ab67616d0000b2733cc16b1e93d5b3c0a48a2c03",
      embed: "https://open.spotify.com/embed/track/3eekarcy7kvN4yt5ZFzltW"
    },
    {
      titulo: "goosebumps",
      descricao: "Colaboração icônica com Kendrick Lamar.",
      capa: "https://i.scdn.co/image/ab67616d0000b2736ff3c79b4efb46d6ed62d61a",
      embed: "https://open.spotify.com/embed/track/6gBFPUFcJLzWGx4lenP6h2"
    },
    {
      titulo: "MY EYES",
      descricao: "Reflexiva e com batidas experimentais.",
      capa: "https://i.scdn.co/image/ab67616d0000b27304b3a9af65766821800d916f",
      embed: "https://open.spotify.com/embed/track/3jx0v8r3PamR1qU5Q1M5Xx"
    }
  ]
};

// ======== FUNÇÃO PARA RENDERIZAR ========

// Copilot explicou: 'for...in' percorre todas as chaves de um objeto, neste caso os nomes dos artistas.
// Copilot explicou: 'createElement' cria um novo elemento HTML pelo JavaScript.
// Copilot explicou: 'innerHTML' permite inserir código HTML dentro de um elemento.

function renderizarMusicas() {
  const container = document.getElementById("container-musicas");

  for (let artista in artistas) {
    const grupo = document.createElement("section");
    grupo.classList.add("grupo-artista");

    const titulo = document.createElement("h3");
    titulo.textContent = artista;
    grupo.appendChild(titulo);

    const lista = document.createElement("div");
    lista.classList.add("lista-musicas");

    artistas[artista].forEach(m => {
      const card = document.createElement("div");
      card.classList.add("musica-card");
      card.innerHTML = `
        <img src="${m.capa}" alt="${m.titulo}">
        <h4>${m.titulo}</h4>
        <p>${m.descricao}</p>
        <iframe src="${m.embed}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      `;
      lista.appendChild(card);
    });

    grupo.appendChild(lista);
    container.appendChild(grupo);
  }
}

// ======== BOTÃO DA TELA INICIAL ========

// Copilot explicou: 'addEventListener' adiciona uma ação quando o botão é clicado.
// Copilot explicou: 'style.display' altera a visibilidade dos elementos na tela.

document.querySelector(".btn-continuar").addEventListener("click", () => {
  document.querySelector(".tela-inicial").style.display = "none";
  const main = document.querySelector("main");
  main.style.display = "block";
  renderizarMusicas();
});
