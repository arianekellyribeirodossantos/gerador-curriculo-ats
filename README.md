# 📄 Gerador de Currículo Otimizado para ATS (Sistemas de Triagem)

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

<br />

O **Gerador de Currículo ATS** é uma aplicação web interativa desenvolvida para resolver uma das maiores dores de profissionais no mercado de trabalho atual: a triagem automatizada de currículos. Projetado com foco na legibilidade por robôs e inteligências artificiais (ATS - *Applicant Tracking Systems*), o sistema gera um documento limpo, profissional e padronizado em formato PDF pronto para impressão ou envio.

---

## 🎯 Por que este projeto é relevante?

Sistemas de triagem automatizada (como Gupy, Greenhouse, Sólides e Taleo) costumam descartar currículos com tabelas complexas, colunas múltiplas, gráficos, imagens ou barras de progresso de habilidades, pois os leitores de texto dessas plataformas não conseguem processá-los corretamente.

Este gerador foi estruturado a partir da perspectiva técnica de **Tech Recruitment** e **Engenharia de Software** para garantir:
- **Leitura 100% Limpa por ATS:** Sem elementos visuais obstrutivos.
- **Hierarquia de Informações:** Ordem lógica otimizada para recrutadores (Dados Pessoais, Resumo, Formação, Experiência, Certificações, Competências e Idiomas).
- **Campos Estratégicos Opcionais:** Inclusão nativa de links essenciais para tecnologia (GitHub, LinkedIn e Currículo Lattes).

---

## ✨ Funcionalidades Principais

- **Formulário Dinâmico:** Atualização em tempo real (*Live Preview*) de todas as alterações feitas na folha do currículo.
- **Estrutura Modular:** Botões para adicionar ou remover experiências, formações e certificações dinamicamente com manipulação de estados do React.
- **Seções Especializadas:** Divisão clara entre Formação Acadêmica e Cursos Livres/Certificações.
- **Impressão Otimizada:** Folha de visualização baseada nas dimensões exatas de uma folha A4 física ($21cm \times 29.7cm$).
- **Estilização de Impressão (Print Media Query):** Uso de regras CSS utilitárias do Tailwind (`print:hidden`, `print:p-0`) que escondem formulários, botões e barras de rolagem no PDF final, deixando apenas o documento limpo.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as melhores práticas do ecossistema moderno do React:

- **[React](https://react.dev/):** Biblioteca para componentização e gerenciamento de estados (`useState`).
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para garantir a segurança, consistência dos dados do candidato e evitar bugs em tempo de execução.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework utilitário para design responsivo e customização milimétrica do layout A4.
- **[Vite](https://vitejs.dev/):** Ferramenta de build extremamente rápida para o ambiente de desenvolvimento.

---

## 🚀 Como Executar o Projeto Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

```bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/gerador-curriculo-ats.git](https://github.com/seu-usuario/gerador-curriculo-ats.git)

# 2. Acesse a pasta do projeto
cd gerador-curriculo-ats

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev


✒️ Autora
Desenvolvido com 💻 por Ariane Kelly Ribeiro dos Santos — Tech Recruiter & Desenvolvedora de Software

LinkedIn: in/arianekellyribeirodossantos

GitHub: @arianekellyribeirodossantos


## 🔒 Privacidade e Segurança de Dados (LGPD)

O **Gerador de Currículo ATS** foi arquitetado sob o princípio de *Privacy by Design*:

- **Armazenamento Zero:** A aplicação é totalmente executada no lado do cliente (*client-side*). Não existem servidores intermediários, APIs de telemetria ou bancos de dados integrados.
- **Processamento Local:** Todos os dados pessoais, acadêmicos e profissionais digitados nos formulários permanecem exclusivamente na memória volátil do navegador do usuário e são destruídos ao fechar ou atualizar a aba.
- **Conformidade Nativa:** Por não coletar, reter ou compartilhar informações de identificação pessoal (PII), o sistema opera em conformidade com as diretrizes da LGPD (Lei Geral de Proteção de Dados).