var bancoDeQuestoes = [
    {
        id: 1,
        pergunta: "Qual série ficou conhecida por retratar a vida, os relacionamentos e o estilo de mulheres vivendo em Nova York?",
        opcoes: ["Friends", "Sex and the City", "Gossip Girl", "How I Met Your Mother"],
        correta: "Sex and the City"
    },
    {
        id: 2,
        pergunta: "Séries como Ginny & Georgia abordam principalmente quais temas atuais entre jovens?",
        opcoes: [
            "Relações familiares e amadurecimento",
            "Aventuras de fantasia",
            "Crimes internacionais",
            "Histórias históricas"
        ],
        correta: "Relações familiares e amadurecimento"
    },
    {
        id: 3,
        pergunta: "O que faz séries como Gilmore Girls se tornarem confortáveis e populares entre o público jovem?",
        opcoes: [
            "Ritmo acelerado e ação",
            "Diálogos rápidos, relações próximas e cotidiano leve",
            "Suspense intenso",
            "Competição profissional"
        ],
        correta: "Diálogos rápidos, relações próximas e cotidiano leve"
    },
    {
        id: 4,
        pergunta: "Qual elemento é mais marcante em séries como Gossip Girl?",
        opcoes: [
            "Moda de luxo e estética chamativa",
            "Cenários rurais",
            "Conteúdo educativo",
            "Tecnologia futurista"
        ],
        correta: "Moda de luxo e estética chamativa"
    },
    {
        id: 5,
        pergunta: "Séries como Sex and the City influenciaram o público principalmente em qual aspecto?",
        opcoes: [
            "Política e economia",
            "Moda, comportamento e estilo de vida",
            "Esportes",
            "Ciência"
        ],
        correta: "Moda, comportamento e estilo de vida"
    },
    {
        id: 6,
        pergunta: "Por que séries com forte identidade visual fazem sucesso nas redes sociais?",
        opcoes: [
            "Porque são educativas",
            "Porque geram identificação e conteúdo instagramável",
            "Porque são longas",
            "Porque tratam de história antiga"
        ],
        correta: "Porque geram identificação e conteúdo instagramável"
    },
    {
        id: 7,
        pergunta: "Qual característica é comum entre Ginny & Georgia e Gilmore Girls?",
        opcoes: [
            "Foco em fantasia",
            "Relação complexa entre mães e filhas",
            "Histórias policiais",
            "Competição profissional"
        ],
        correta: "Relação complexa entre mães e filhas"
    },
    {
        id: 8,
        pergunta: "Séries ambientadas em grandes cidades costumam valorizar qual aspecto?",
        opcoes: [
            "Vida urbana e comportamento social",
            "Vida no campo",
            "Histórias medievais",
            "Ciência experimental"
        ],
        correta: "Vida urbana e comportamento social"
    },
    {
        id: 9,
        pergunta: "O sucesso de séries como Gossip Girl está ligado principalmente a:",
        opcoes: [
            "Narrativas simples e educativas",
            "Moda, drama e vida social intensa",
            "Documentários históricos",
            "Temas científicos"
        ],
        correta: "Moda, drama e vida social intensa"
    },
    {
        id: 10,
        pergunta: "O que essas séries têm em comum em relação ao público jovem?",
        opcoes: [
            "Não influenciam o comportamento",
            "Influenciam estilo, consumo e referências culturais",
            "São voltadas apenas para crianças",
            "Tratam apenas de temas técnicos"
        ],
        correta: "Influenciam estilo, consumo e referências culturais"
    },
    {
     id: 11,
    pergunta: "Por que personagens de séries como Sex and the City se tornaram referências de estilo ao longo dos anos?",
    opcoes: [
        "Por usarem uniformes iguais",
        "Por apresentarem looks ousados e personalidade forte",
        "Por seguirem tendências antigas",
        "Por evitarem moda"
    ],
    correta: "Por apresentarem looks ousados e personalidade forte"
},
{
    id: 12,
    pergunta: "Séries com foco em amizades femininas costumam transmitir qual mensagem principal?",
    opcoes: [
        "Competição constante",
        "A importância do apoio e da parceria",
        "Isolamento social",
        "Falta de comunicação"
    ],
    correta: "A importância do apoio e da parceria"
},
{
    id: 13,
    pergunta: "O que torna séries como Gossip Girl tão atraentes para o público jovem?",
    opcoes: [
        "Rotina simples e sem conflitos",
        "Moda, drama e vida social intensa",
        "Conteúdo acadêmico",
        "Temas científicos"
    ],
    correta: "Moda, drama e vida social intensa"
},
{
    id: 14,
    pergunta: "Séries ambientadas em cidades famosas costumam despertar qual interesse no público?",
    opcoes: [
        "Curiosidade por estilos de vida e tendências urbanas",
        "Desinteresse cultural",
        "Foco apenas em esportes",
        "Atenção exclusiva à história antiga"
    ],
    correta: "Curiosidade por estilos de vida e tendências urbanas"
},
{
    id: 15,
    pergunta: "Por que séries de lifestyle fazem tanto sucesso nas redes sociais?",
    opcoes: [
        "Porque não se conectam com a realidade",
        "Porque geram identificação, inspiração e conteúdo visual",
        "Porque são difíceis de entender",
        "Porque evitam temas atuais"
    ],
    correta: "Porque geram identificação, inspiração e conteúdo visual"
};

var indiceAtual = 0;
var pontuacao = 0;

function renderizarPergunta() {
    var container = document.getElementById("quiz-container");
    container.innerHTML = "";

    var q = bancoDeQuestoes[indiceAtual];

    var box = document.createElement("div");
    box.className = "questao-box";

    var titulo = document.createElement("span");
    titulo.className = "questao-titulo";
    titulo.innerText = (indiceAtual + 1) + ". " + q.pergunta;
    box.appendChild(titulo);

    for (var i = 0; i < q.opcoes.length; i++) {
        var label = document.createElement("label");

        var input = document.createElement("input");
        input.type = "radio";
        input.name = "resposta";
        input.value = q.opcoes[i];

        label.appendChild(input);
        label.appendChild(document.createTextNode(q.opcoes[i]));

        box.appendChild(label);
    }

    container.appendChild(box);
}

document.getElementById("quiz-form").onsubmit = function (event) {
    event.preventDefault();

    var selecionado = document.querySelector("input[name='resposta']:checked");

    if (!selecionado) {
        alert("Selecione uma alternativa!");
        return;
    }

    var box = document.querySelector(".questao-box");
    var correta = bancoDeQuestoes[indiceAtual].correta;

    if (selecionado.value === correta) {
        pontuacao++;
        box.classList.add("correto");
    } else {
        box.classList.add("incorreto");
    }

    indiceAtual++;

    setTimeout(function () {
        if (indiceAtual < bancoDeQuestoes.length) {
            renderizarPergunta();
        } else {
            mostrarResultado();
        }
    }, 1000);
}
]; 

function mostrarResultado() {
    document.getElementById("quiz-container").innerHTML = "";

    var resultado = document.getElementById("resultado");
    resultado.innerText =
        "Você acertou " + pontuacao + " de " + bancoDeQuestoes.length + " questões!";
    resultado.classList.remove("hidden");
}

function limparEstilos() {
    indiceAtual = 0;
    pontuacao = 0;
    document.getElementById("resultado").classList.add("hidden");
    renderizarPergunta();
}

window.onload = renderizarPergunta;





