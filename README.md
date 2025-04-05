# Algoritmos e Estruturas de Dados

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/ramonxm/algorithm-and-data-structures)

## 📚 Sobre o Projeto

Este é um site de documentação dedicado ao estudo de algoritmos e estruturas de dados. O projeto oferece recursos educacionais em português e inglês, cobrindo conceitos fundamentais, implementações práticas e explicações detalhadas.

### ✨ Características

- 🌐 Suporte multilíngue (Português e Inglês)
- 📖 Documentação abrangente de algoritmos
- 🔍 Explicações detalhadas de estruturas de dados
- 💻 Exemplos práticos de implementação
- 🎯 Conceitos fundamentais da computação

## 🛠 Tecnologias

Este site é construído usando [Docusaurus](https://docusaurus.io/), um moderno gerador de sites estáticos otimizado para documentação técnica. O projeto utiliza:

- TypeScript
- React
- Docusaurus 2
- Markdown

## 📁 Estrutura do Projeto

```
├── docs/              # Documentação em diferentes idiomas
│   ├── en/           # Documentação em inglês
│   └── pt/           # Documentação em português
├── src/              # Código fonte do site
├── static/           # Arquivos estáticos
└── i18n/             # Arquivos de internacionalização
```

## 🚀 Começando

### Pré-requisitos

- Node.js (versão 16 ou superior)
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

Este comando gera o conteúdo estático no diretório `build` que pode ser servido por qualquer serviço de hospedagem de conteúdo estático.

### Deployment

Usando SSH:

```bash
$ USE_SSH=true yarn deploy
```

Sem usar SSH:

```bash
$ GIT_USER=<Seu usuário GitHub> yarn deploy
```

Se você estiver usando o GitHub Pages para hospedagem, este comando é uma maneira conveniente de construir o site e enviar para a branch `gh-pages`.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter uma pull request.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
