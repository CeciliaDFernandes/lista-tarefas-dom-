# lista-tarefas-dom-

# 📝 Lista de Tarefas com DOM

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-blue)

To-do list **vanilla** (HTML + CSS + JS puro) construída como atividade guiada da
disciplina **Desenvolvimento Web 2** do IFCE — Campus Maranguape.

## ✨ Funcionalidades

- ➕ Adicionar tarefas via botão **ou** tecla Enter
- ⚠️ Validação na própria página (sem `alert`)
- ✅ Marcar/desmarcar tarefa como concluída com um clique (riscado)
- ❌ Remover tarefa individual pelo botão `×`
- 🔢 Contador de tarefas pendentes (singular e plural corretos)
- 🧹 Botão para limpar **todas** as concluídas de uma vez
- 💾 Persistência com `localStorage` (sobrevive ao F5)
- 🛡️ Seguro contra XSS (`textContent`, não `innerHTML`)

## 🚀 Demo

Abra o arquivo `index.html` direto no navegador **ou** sirva com Live Server:

```bash
# com VS Code: instale a extensão "Live Server" e clique em "Go Live"
# ou com Python:
python -m http.server 8000
```

Depois acesse [http://localhost:8000](http://localhost:8000).

## 🧠 Conceitos aplicados

| Conceito | Onde aparece |
|---|---|
| `getElementById` | seleção dos 6 elementos no topo |
| `addEventListener` + `submit` | formulário |
| `preventDefault` | evita recarregar a página |
| `.value` + `.trim()` | validação do campo |
| `textContent` | erro, texto da tarefa, contador |
| `createElement` + `appendChild` | criação do `<li>` |
| `classList.add` / `toggle` | classes `item` e `feito` |
| `setAttribute` | `aria-label` do botão × |
| **Delegação** + `closest` | clique na lista |
| `remove()` | remover itens |
| `JSON.stringify` / `parse` + `localStorage` | persistência |

## 📂 Estrutura

```
lista-tarefas-dom/
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

## 🧪 Como testar

1. Adicione três tarefas → contador mostra **"3 tarefas pendentes"**
2. Conclua uma → contador vai para **"2 tarefas pendentes"** e o texto fica riscado
3. Remova outra → contador mostra **"1 tarefa pendente"** (singular!)
4. Recarregue a página (F5) → tudo continua como estava
5. Digite `<b>teste</b>` → o texto aparece **literalmente**, sem virar negrito
6. Abra o DevTools → **Application → Local Storage** → veja a chave `tarefas`

## 👤 Autor

Feito por **Seu Nome** — aluno(a) do Curso Técnico em Informática para Internet  
**IFCE — Campus Maranguape** · Prof. Kaio Jonathas

## 📄 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.
