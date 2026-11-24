# 🌦️ Clima Inteligente

> Aplicação web que consulta informações climáticas em tempo real por meio de uma API meteorológica e recomenda atividades adequadas às condições do tempo.

**MVP – Mínimo Produto Viável | ADS – 2º período | 2026.2**

## Participantes

      - *Integrante 1*:José Adriel Pereira da Silva - 16039859
      - *Integrante 2*: Matheus levi santos andrade - 16039555
      - *Integrante 3*: Bruno dos santos teles - 16039329
      - *Integrante 4*: Gabriel Ribeiro de Almeida - 16039730
      - *Integrante 5.* Guilherme Oliveira De Miranda - 16039757

---

## 📌 Sobre o Projeto

Este repositório armazena o desenvolvimento de um projeto acadêmico de MVP, realizado durante o 2º período do curso de Análise e Desenvolvimento de Sistemas (ADS), envolvendo as disciplinas de **Codificação** e **Desenvolvimento de Aplicações para Internet**.

O objetivo acadêmico é desenvolver uma solução tecnológica a partir de uma ideia, aplicando na prática os conhecimentos adquiridos, desde o planejamento até a implementação de um produto mínimo viável.

---

## 1. Visão Geral

### 1.1 Descrição do Projeto

O **Clima Inteligente** é uma aplicação web que permite ao usuário pesquisar uma cidade, visualizar as condições climáticas atuais (temperatura, sensação térmica, umidade, vento e chance de chuva) e receber sugestões de atividades compatíveis com o tempo. Destina-se a pessoas que desejam planejar o dia de forma prática, sem precisar interpretar os dados meteorológicos por conta própria.

### 1.2 Objetivo

Oferecer, em uma única tela, informações climáticas claras e recomendações de atividades coerentes com o tempo, ajudando o usuário a decidir o que fazer ao longo do dia.

### 1.3 Proposta de Valor

- Une **previsão do tempo** e **sugestão de atividades** em um só lugar.
- Transforma dados técnicos em recomendações simples e diretas.
- Interface leve, responsiva e sem necessidade de cadastro.

---

## 2. Problema

### 2.1 Contexto

O clima influencia diretamente a rotina: passeios, exercícios ao ar livre, eventos e deslocamentos dependem das condições do tempo. Apesar de haver muita informação meteorológica disponível, ela costuma ser apresentada apenas como números e ícones.

### 2.2 Problema Identificado

Muitas pessoas consultam a previsão, mas têm dificuldade em decidir **que atividade é adequada** para aquelas condições, o que leva a planos cancelados, desconfortos ou à perda de tempo pesquisando alternativas.

### 2.3 Soluções Existentes

Aplicativos e sites de previsão do tempo (como os nativos dos celulares e portais de meteorologia) entregam bem os dados climáticos, porém, em geral, **não traduzem essas informações em recomendações práticas de atividades**, deixando a interpretação a cargo do usuário.

### 2.4 Hipótese do MVP

Ao combinar os dados de uma API meteorológica com regras simples de recomendação, o usuário conseguirá decidir mais rápido e com mais segurança o que fazer em cada condição climática.

---

## 3. Público-Alvo

### 3.1 Perfil dos Usuários

Pessoas que planejam atividades diárias: estudantes, trabalhadores, praticantes de exercícios ao ar livre, famílias e turistas.

### 3.2 Necessidades

- Saber rapidamente como está e como ficará o tempo.
- Receber ideias de atividades adequadas ao clima.
- Acessar a informação de forma simples, no celular ou no computador.

### 3.3 Cenário de Utilização

O usuário acessa a aplicação pelo navegador, digita o nome da cidade e, em segundos, visualiza o clima atual e uma lista de atividades sugeridas (por exemplo, atividades ao ar livre em dias de sol e opções em ambientes fechados em dias de chuva).

---

## 4. Escopo do MVP

### 4.1 Funcionalidades Principais

- [ ] **Funcionalidade 01 – Busca por cidade:** permite ao usuário pesquisar o clima de uma cidade.
- [ ] **Funcionalidade 02 – Exibição do clima atual:** apresenta temperatura, sensação térmica, umidade, vento e condição do tempo, consumindo a API meteorológica.
- [ ] **Funcionalidade 03 – Recomendação de atividades:** sugere atividades de acordo com a condição climática (sol, chuva, nublado, frio, calor).
- [ ] **Funcionalidade 04 – Interface responsiva e tratamento de erros:** layout adaptável a celular e computador, com mensagens claras para cidade não encontrada ou falha na API.

---

## 5. Arquitetura da Solução

### 5.1 Visão Arquitetural

A aplicação é um **front-end web** (HTML, CSS e JavaScript) executado no navegador. O JavaScript consome diretamente uma **API meteorológica externa** via requisições HTTP e aplica as regras de recomendação localmente antes de exibir o resultado na interface.

**Componentes principais:**

- **Interface (HTML/CSS):** campo de busca, cartão de clima e lista de recomendações.
- **Lógica (JavaScript):** consumo da API, tratamento dos dados e regras de recomendação.
- **API meteorológica:** fonte dos dados de clima.

### 5.2 Fluxo Principal

1. O usuário informa o nome da cidade e envia a busca.
2. O JavaScript faz a requisição à API meteorológica.
3. A resposta é tratada e os dados relevantes são exibidos na tela.
4. As regras de recomendação selecionam as atividades adequadas às condições e as apresentam ao usuário.

---

## 6. Tecnologias Utilizadas

| Categoria | Tecnologia | Finalidade |
|-----------|------------|------------|
| Linguagem de Programação | JavaScript | Lógica da aplicação, consumo da API e regras de recomendação |
| Front-end | HTML e CSS | Estrutura, estilo e responsividade da interface |
| Back-end | Não utilizado | A API externa é consumida diretamente pelo front-end |
| Banco de Dados | Não utilizado | O MVP não persiste dados |
| Ferramentas | Visual Studio Code, Git e GitHub | Desenvolvimento, versionamento e colaboração em equipe |

---

## 7. Requisitos do Sistema

As necessidades do projeto foram organizadas entre as funcionalidades principais da aplicação e os critérios de qualidade técnica:

### 7.1 Requisitos Funcionais

| Código | Requisito | Descrição |
| :--- | :--- | :--- |
| **RF01** | **Busca por Localidade** | O usuário pode pesquisar e consultar a previsão informando o nome da cidade desejada. |
| **RF02** | **Exibição do Clima** | O sistema consome a API meteorológica e apresenta na tela as condições atuais do tempo. |
| **RF03** | **Sugestão de Atividades** | Com base na condição climática identificada, a aplicação recomenda atividades adequadas ao momento. |

### 7.2 Requisitos Não Funcionais

| Código | Pilar | Descrição |
| :--- | :--- | :--- |
| **RNF01** | **Desempenho** | As respostas das consultas devem ser processadas e exibidas em poucos segundos sob condições normais de rede. |
| **RNF02** | **Segurança** | Caso utilize chaves de acesso (API Keys), elas devem ser protegidas e nunca expostas diretamente no repositório público. |
| **RNF03** | **Usabilidade** | A interface precisa ser limpa, intuitiva e totalmente
---

## 📅 Informações Acadêmicas

- **Curso:** Análise e Desenvolvimento de Sistemas (ADS)
- **Período:** 2º período (2026.2)
- **Disciplinas:** Codificação e Desenvolvimento de Aplicações para Internet
- **Projeto:** MVP – Mínimo Produto Viável
