# Internacionalização (i18n)

Este diretório contém os arquivos de tradução para o site. A estrutura segue o padrão do Docusaurus para internacionalização.

## Estrutura

```
i18n/
├── en/                           # Traduções para inglês
│   ├── docusaurus-plugin-content-pages/
│   │   └── index.json            # Traduções da página inicial
│   └── docusaurus-theme-classic/
│       ├── footer.json           # Traduções do rodapé
│       └── navbar.json           # Traduções da barra de navegação
└── pt/                           # Traduções para português
    ├── docusaurus-plugin-content-pages/
    │   └── index.json            # Traduções da página inicial
    └── docusaurus-theme-classic/
        ├── footer.json           # Traduções do rodapé
        └── navbar.json           # Traduções da barra de navegação
```

## Como adicionar novas traduções

1. Para adicionar novas strings de tradução, primeiro adicione-as no código usando o componente `<Translate>`
2. Execute o comando `npm run write-translations` para extrair as strings
3. Edite os arquivos JSON gerados em cada pasta de idioma

## Idiomas suportados

- Português (pt) - Idioma padrão
- Inglês (en)

## Adicionando um novo idioma

Para adicionar um novo idioma:

1. Atualize o arquivo `docusaurus.config.ts` adicionando o novo idioma na seção `i18n.locales`
2. Execute `npm run write-translations -- --locale [novo-locale]`
3. Traduza os arquivos JSON gerados na nova pasta de idioma