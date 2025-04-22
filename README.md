# Brain - Algoritmos e Estruturas de Dados
## 📚 Sobre o Projeto
Este é um site de documentação dedicado ao estudo de algoritmos e estruturas de dados. O projeto oferece recursos educacionais em português e inglês, cobrindo conceitos fundamentais, implementações práticas e explicações detalhadas.

### ✨ Características
- 🌐 Suporte multilíngue (Português e Inglês)
- 📖 Documentação abrangente de algoritmos
- 🔍 Explicações detalhadas de estruturas de dados
- 💻 Exemplos práticos de implementação
- 🎯 Conceitos fundamentais da computação
## 🛠 Tecnologias
Este site é construído usando Docusaurus , um moderno gerador de sites estáticos otimizado para documentação técnica. O projeto utiliza:

- TypeScript
- React
- Docusaurus 3
- Markdown
## 📁 Estrutura do Projeto
```plaintext
.
├── docs/              # Documentação no idioma padrão (Inglês)
│   ├── algorithms/    # Documentação sobre algoritmos
│   ├── concepts/      # Conceitos fundamentais de computação
│   └── data-structures/ # Implementações de estruturas de dados
├── src/               # Código fonte do site
│   ├── components/    # Componentes React
│   ├── css/           # Estilos customizados
│   └── pages/         # Páginas principais
├── static/            # Arquivos estáticos (imagens, etc.)
├── i18n/              # Arquivos de internacionalização
│   └── pt/            # Traduções para Português
│       ├── code.json  # Traduções da UI (interface do usuário)
│       └── docusaurus-plugin-content-docs/
│           └── current/ # Documentação traduzida para Português
├── docusaurus.config.ts # Configuração principal do Docusaurus
├── sidebars.ts        # Configuração da barra lateral da documentação
└── package.json       # Dependências e scripts do projeto
 ```
```

## 🚀 Começando
### Pré-requisitos
- Node.js (versão 18 ou superior)
- Yarn ou npm
### Instalação
```bash
$ yarn
 ```

### Desenvolvimento Local
```bash
$ yarn start
 ```

Este comando inicia um servidor de desenvolvimento local e abre uma janela do navegador. A maioria das alterações são refletidas instantaneamente sem necessidade de reiniciar o servidor.

### Build
```bash
$ yarn build
 ```

Este comando gera o conteúdo estático no diretório build que pode ser servido por qualquer serviço de hospedagem de conteúdo estático.

### Deployment
Usando SSH:

```bash
$ USE_SSH=true yarn deploy
 ```

Sem usar SSH:

```bash
$ GIT_USER=<Seu usuário GitHub> yarn deploy
 ```

Se você estiver usando o GitHub Pages para hospedagem, este comando é uma maneira conveniente de construir o site e enviar para a branch gh-pages .

## 📋 Conteúdo
O projeto inclui documentação sobre:

- Algoritmos de Ordenação : Bubble Sort, Merge Sort, Quick Sort e mais
- Algoritmos de Busca : Binary Search e outros
- Estruturas de Dados : Stack (Pilha), Queue (Fila), Binary Tree (Árvore Binária), Linked List (Lista Encadeada)
- Conceitos Fundamentais : Arrays, Big O Notation, FIFO, LIFO, Threads e mais
- Algoritmos de Competição : Soluções para desafios do AtCoder e outros
## 🤝 Contribuindo
Contribuições são sempre bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter uma pull request.

## 📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.