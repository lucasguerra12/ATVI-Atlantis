# Atlantis - Sistema de Gestão (ATVI) 🌊

O **ATVI - Atlantis** é o primeiro módulo do sistema de gestão para parques aquáticos, desenvolvido como atividade prática de Engenharia de Software.

O objetivo principal desta etapa foi implementar e validar o padrão de projeto **Prototype** (Protótipo), permitindo que dependentes herdem automaticamente dados (como endereço e telefone) de um titular através da clonagem de objetos.

## 🎯 Objetivo da Atividade

Demonstrar a aplicação prática do padrão **Prototype** para resolver o problema de duplicidade de cadastro de informações partilhadas entre titulares e dependentes.

O sistema executa um script de teste que:
1.  Cria um cliente titular (Ex: *Dom Pedro II*).
2.  Define os seus endereços e telefones.
3.  Cria um dependente (Ex: *Princesa Isabel*).
4.  **Clona** o endereço e os telefones do titular para o dependente.
5.  Prova que os objetos são instâncias independentes (alterar o telefone do pai não afeta o filho após a clonagem).

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Runtime:** [Node.js](https://nodejs.org/)

## 🏗️ Padrões de Projeto (Design Patterns)

* **Prototype:** Implementado através da interface `Prototipo`. Permite que objetos complexos (como `Endereco` e `Telefone`) criem cópias de si mesmos. Isso facilita o cadastro de dependentes que residem na mesma casa que o titular.

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
* Ter o [Node.js](https://nodejs.org/) instalado na máquina.

### Passo a Passo

1.  **Instalar dependências:**
    No terminal, dentro da pasta do projeto, execute:
    ```bash
    npm install
    ```

2.  **Executar o teste:**
    Este comando irá compilar o TypeScript e rodar o script de teste (`teste/index.ts`):
    ```bash
    npm start
    ```

### Resultado Esperado
Ao rodar o projeto, o console exibirá os dados do Titular e do Dependente, confirmando que os dados foram copiados corretamente.

## 📂 Estrutura do Projeto

* `/enumeracoes`: Tipos de documentos disponíveis.
* `/interfaces`: Define a interface `Prototipo` com o método `clonar()`.
* `/modelos`: Classes do domínio (Cliente, Endereco, Telefone) que implementam a clonagem.
* `/teste`: Contém o script `index.ts` que executa a prova de conceito do sistema.

---
*Desenvolvido como atividade prática da disciplina de Engenharia de Software.*
