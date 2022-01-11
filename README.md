<h1 align="center">
  iForm
</h1>

## 🎥 Gifs

<div style="display:flex; align-items: center; justify-content: center">
  <img src="./.github/videos/form-step-1.gif" width="260px" style="margin-right:16px" alt="Passo 1">
  <img src="./.github/videos/form-step-2.gif" width="260px" style="margin-right:16px" alt="Passo 2">
  <img src="./.github/videos/form-step-4.gif" width="260px" alt="Passo 4">
</div>

## 📸 Imagens
<h2 align="center">
  Passo 1 - Informações Pessoais
</h2>
<div style="display:flex; align-items: center; justify-content: center">
  <img src="./.github/images/step-1/form-step-1-1.png" width="260px" style="margin-right:16px" alt="Passo 1-1">
  <img src="./.github/images/step-1/form-step-1-2.png" width="260px" style="margin-right:16px" alt="Passo 1-2">
  <img src="./.github/images/step-1/form-step-1-3.png" width="260px" style="margin-right:16px" alt="Passo 1-3">
</div>
<div style="display:flex; align-items: center; justify-content: center; margin-top:16px">
  <img src="./.github/images/step-1/form-step-1-4.png" width="260px" style="margin-right:16px" alt="Passo 1-4">
  <img src="./.github/images/step-1/form-step-1-5.png" width="260px" style="margin-right:16px" alt="Passo 1-5">
  <img src="./.github/images/step-1/form-step-1-6.png" width="260px" alt="Passo 1-6">
</div>
<br/>

<h2 align="center">
  Passo 2 - Endereço
</h2>
<div style="display:flex; align-items: center; justify-content: center;">
  <img src="./.github/images/step-2/form-step-2-1.png" width="260px" style="margin-right:16px" alt="Passo 2-1">
  <img src="./.github/images/step-2/form-step-2-2.png" width="260px" style="margin-right:16px" alt="Passo 2-2">
  <img src="./.github/images/step-2/form-step-2-3.png" width="260px" alt="Passo 2-3">
</div>
<div style="display:flex; align-items: center; justify-content: center; margin-top:16px">
  <img src="./.github/images/step-2/form-step-2-4.png" width="260px" style="margin-right:16px" alt="Passo 2-4">
  <img src="./.github/images/step-2/form-step-2-5.png" width="260px" alt="Passo 2-5">
</div>
<br/>

<h2 align="center">
  Passo 3 - Conta
</h2>
<div style="display:flex; align-items: center; justify-content: center;">
  <img src="./.github/images/step-3/form-step-3-1.png" width="260px" style="margin-right:16px" alt="Passo 3-1">
  <img src="./.github/images/step-3/form-step-3-2.png" width="260px" style="margin-right:16px" alt="Passo 3-2">
  <img src="./.github/images/step-3/form-step-3-3.png" width="260px" alt="Passo 3-3">
</div>
<br/>

<h2 align="center">
  Passo 4 - Confirmação
</h2>
<div style="display:flex; align-items: center; justify-content: center;">
  <img src="./.github/images/step-4/form-step-4-1.png" width="260px" style="margin-right:16px" alt="Passo 4-1">
  <img src="./.github/images/step-4/form-step-4-2.png" width="260px" alt="Passo 4-2">
</div>
<div style="display:flex; align-items: center; justify-content: center; margin-top:16px">
  <img src="./.github/images/step-4/form-step-4-3.png" width="260px" style="margin-right:16px" alt="Passo 4-3">
  <img src="./.github/images/step-4/form-step-4-4.png" width="260px" alt="Passo 4-4">
</div>
</br>

## 💻 Projeto

A interface da aplicação foi baseada em alguns designs encontrados no Dribbble, os commits foram realizados utilizando o padrão de **Conventional Commits**.

## 🎯 Objetivos

O objetivo principal do projeto foi a utilização de alguns pacotes específicos para formulário com o intuito de aprender como utilizá-los e aumentar o leque de conhecimento/possibilidades.

## 🖥️ Telas 

- [x] Registro
  - [x] Informações Pessoais
  - [x] Endereço
  - [x] Conta
  - [x] Confirmação


## ✨ Tecnologias
- React Native
- Typescript
- Expo
- React Navigation Native
- React Navigation Stack
- React Hook Form
- Formik
- Yup
- Expo Image Picker
- React Native Mask Input
- React Native Modal Datetime Picker
- React Native Picker Select
- React Native Keyboard Aware Scroll View
- Axios
- Date Fns
- Styled Components
- React Native Iphone X Helper
- React Native Size Matters
- React Native Vector Icons
- Expo Font
- Expo Google Fonts
- Eslint
- Prettier
- Husky


## 🔖 Layout

O layout seguido foi inspirado na combinação de alguns designs encontrados no dribbble.


## 🤔 Observações

- A ideia principal do projeto era criar componentes para trabalhar com diferentes tipos de inputs e deixá-los desacoplados da lógica de manipulação do formulário;
- Para demonstrar o desaclopamento dos componentes de inputs e também utilizar/aprender um pouco mais de cada pacote, utilizou-se tanto o `react-hook-form` como o `formik` para gerenciar os formulários. O interessante é a maneira que foi construída os componentes, para que independente do pacote ou até mesmo de gerenciar via `useState` os valores dos inputs, os componentes em si não precisam de nenhuma adaptação;
- A validação dos *schemas* foi feita utilizando o `yup`;
- O componente de input comum foi desenvolvido utilizando o componente básico `TextInput` do próprio `react-native`;
- O componente de input de avatar foi desenvolvido utilizando o `expo-image-picker` que possui uma grande flexibilidade, permitindo até a conversão em base64 da imagem escolhida pelo usuário;
- O componente de input de data foi desenvolvido utilizando o `react-native-modal-datetime-picker`;
- O componente de input de máscara foi desenvolvido utilizando o `react-native-mask-input` que já conta com algumas máscaras comuns que podem ser realizadas e que permite também retornar o valor sem máscara;
- O componente de input de select foi desenvolvido utilizando o `react-native-picker-select`;
- A biblioteca `date-fns` foi utilizada para trabalhar de uma maneira mais simples com datas e tempos;
- Para os ícones da aplicação foi utilizada a biblioteca `@expo/vector-icons`;
- Pensando na responsividade, densidade de pixel e diferentes tamanhos de telas de dispositivos distintos, foi utilizada a biblioteca `react-native-size-matters` que permite lidar com essas situações;
- Para lidar com dispositivos com Notch foi utilizado a biblioteca `react-native-iphone-x-helper`;
- A estilização dos componentes foi feita utilizando o `styled-components`, com um arquivo de tema e propriedades padrões que permitem centralizar configurações de estilo gerais da aplicação, dessa forma a manutenção e a troca de estilos se torna muito mais simples;

## ⌨️ Executando o projeto

Utilize um dos seguintes comandos para instalar as dependências do projeto:

```cl
yarn
```
```cl
npm install
```

Em seguida, utilize o seguinte comando para iniciar o projeto:

```cl
expo start
```

Após isso, é possível executar o projeto em um dispositivo físico real (necessário possuir o Expo Go instalado) escaneando o QR Code. Outra opção é executar o projeto em um simulador (Android ou iOS), digitando no *console* ou escolhendo a opção na aba aberta do Expo no browser.