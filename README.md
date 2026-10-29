### Web Development 
### ESPR Noite
### Professor: Lucas Silva Borges de Sousa
 
# Sistema de Cadastro de Usuários, Compra e Avaliações de Vinho — Parte 2
 
O objetivo do projeto é criar e aprimorar a presença digital da Vinheria Agnello, apresentando a história da vinheria, o catálogo de vinhos disponíveis, a tabela de preços, as informações da equipe, uma página de contato e interações visuais avançadas.
 
---
 
# Páginas
 
- *Home* (`index.html`): Página principal com apresentação da vinheria e destaques.
- *Produtos* (`src/pages/produtos.html`): Galeria de vinhos, carrossel de produtos e tabela de preços.
- *Sobre* (`src/pages/sobre.html`): História, tradição e galeria da marca.
- *Equipe* (`src/pages/equipe.html`): Integrantes do grupo e da vinheria, com efeito hover nos colaboradores.
- *Contatos* (`src/pages/contatos.html`): Formulário de contato com campos interativos e preferências.
---
 
# Efeitos Visuais e Animações
 
Nesta fase do projeto, a estilização foi aprimorada com a inclusão de um arquivo CSS dedicado exclusivo para efeitos e animações (`efeitos.css`), promovendo maior dinamismo e interatividade:
 
- *Animação Deslizante:* Criação da animação `@keyframes deslizar` para a barra de avisos informativos em movimento contínuo.
- *Efeito de Brilho:* Aplicação da animação `@keyframes glow` com oscilação de opacidade no elemento `summary` dos menus expansíveis.
- *Carrossel de Produtos:* Estilização e animação do carrossel exibido na página de produtos.
- *Microinterações e Transições (Hover):*
  - Efeito de escala (`scale`) e elevação com sombra (`box-shadow`) nos botões de navegação e envio.
  - Zoom suave ao passar o cursor sobre as garrafas de vinho e imagens da galeria.
  - Destaque nos links de navegação do menu e cabeçalhos.
  - Efeito hover nos colaboradores da vinheria.
- *Foco em Formulários:* Efeito de ampliação e destaque de borda ao focar nos campos do formulário (`input` e `textarea`).
- *Personalização de Seleção:* Estilização customizada para o destaque de texto selecionado pelo usuário (`::selection`).
---
 
# Tecnologias Utilizadas
 
- *HTML5*: Estrutura semântica das páginas.
- *CSS3*: Estilização, layouts responsivos, animações (`@keyframes`), transições e separação de efeitos (`efeitos.css`).
- *JavaScript*: Funcionalidades dinâmicas, cadastro sequencial de vinhos, classificação, verificação de estoque e registro em log.
- *Git/GitHub*: Controle de versão e trabalho em grupo.
---
 
# Implementações do Check-point 2
 
Funcionalidades adicionadas entre os dias 27 e 28 de outubro de 2026, organizadas por área.
 
### Carrossel de Produtos
 
- *Estrutura do carrossel:* Criação do HTML do carrossel na página de produtos.
- *Estilização e animação:* Estilização e animação do carrossel.
### Cadastro e Gestão de Vinhos
 
- *Cadastro sequencial de vinhos:* Sistema de cadastro sequencial de vinhos.
- *Verificação de estoque baixo:* Função reutilizável para verificar se o estoque de um vinho está baixo.
- *Classificação de vinhos:* Função que classifica os vinhos como jovem, amadurecido ou antigo.
- *Registro em log e aviso ao usuário:* Função que registra os vinhos adicionados no log e exibe um `alert()` informando que eles podem ser visualizados via log.
### Equipe
 
- *Fotos e hover dos colaboradores:* Atualização das fotos e criação do efeito hover nos colaboradores da vinheria.
- *Foto do desenvolvedor:* Atualização da foto do desenvolvedor.
### Integração
 
- *Merge de mudanças:* Merge para integrar as alterações feitas pelos integrantes do grupo.
---
 
### Integrantes
 
- Daniel Teixeira da Silva
- Kayque Mateus Marques de Paiva Barreto
- Luiz Henrique Selim Mendes
- Otavio Campos Signorini
---
 
## Link para o Site (GitHub Pages)
 
* *Link do Projeto: https://selimnds.github.io/vinharia-agnellocp2/* 