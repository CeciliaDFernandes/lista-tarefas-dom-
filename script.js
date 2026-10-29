/* =========================================================
   Lista de Tarefas — Atividade Guiada (Desenvolvimento Web 2)
   Conceitos: seleção DOM, eventos, delegação, classList,
   localStorage + JSON.
   ========================================================= */

/* ---------- 1. Seleção dos elementos ---------- */
const form      = document.getElementById("formTarefa");
const campo     = document.getElementById("campoTarefa");
const erro      = document.getElementById("erro");
const lista     = document.getElementById("lista");
const contador  = document.getElementById("contador");
const btnLimpar = document.getElementById("btnLimpar");

/* ---------- 2. Criação de um item ---------- */
function criarItem(texto, feito) {
  const li = document.createElement("li");
  li.classList.add("item");
  if (feito) li.classList.add("feito");

  const span = document.createElement("span");
  span.classList.add("texto");
  span.textContent = texto; // nunca innerHTML com dado do usuário

  const botao = document.createElement("button");
  botao.type = "button";
  botao.classList.add("remover");
  botao.setAttribute("aria-label", "Remover tarefa");
  botao.textContent = "×";

  li.appendChild(span);
  li.appendChild(botao);
  lista.appendChild(li);
}

/* ---------- 3. Contador de pendentes ---------- */
function atualizarContador() {
  const pendentes = document.querySelectorAll(".item:not(.feito)").length;
  contador.textContent =
    pendentes === 1 ? "1 tarefa pendente" : pendentes + " tarefas pendentes";
}

/* ---------- 4. Persistência ---------- */
function salvar() {
  const tarefas = [];
  for (const li of lista.children) {
    tarefas.push({
      texto: li.querySelector(".texto").textContent,
      feito: li.classList.contains("feito"),
    });
  }
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregar() {
  const salvas = JSON.parse(localStorage.getItem("tarefas")) ?? [];
  for (const tarefa of salvas) {
    criarItem(tarefa.texto, tarefa.feito);
  }
  atualizarContador();
}

/* ---------- 5. Submit: adicionar ---------- */
form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = campo.value.trim();

  if (texto === "") {
    erro.textContent = "Digite uma tarefa antes de adicionar.";
    campo.focus();
    return;
  }

  erro.textContent = "";
  criarItem(texto, false);
  campo.value = "";
  campo.focus();
  atualizarContador();
  salvar();
});

/* ---------- 6. Clique na lista: concluir / remover ---------- */
lista.addEventListener("click", function (evento) {
  const item = evento.target.closest("li");
  if (!item) return;

  if (evento.target.closest(".remover")) {
    item.remove();
  } else {
    item.classList.toggle("feito");
  }

  atualizarContador();
  salvar();
});

/* ---------- 7. Limpar concluídas ---------- */
btnLimpar.addEventListener("click", function () {
  document.querySelectorAll(".item.feito").forEach(function (li) {
    li.remove();
  });
  atualizarContador();
  salvar();
});

/* ---------- 8. Carga inicial ---------- */
carregar();
