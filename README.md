# Pesquisador de CEP

Aplicação web simples para consultar endereços a partir do CEP (Código de Endereçamento Postal) brasileiro. O projeto usa a API pública [ViaCEP](https://viacep.com.br) e não exige instalação de dependências.

## Funcionalidades

- Consulta de endereço por CEP (rua, bairro, cidade e estado)
- Validação básica do CEP (8 dígitos)
- Interface estática com HTML, CSS e JavaScript
- Tela de login simples no código (redireciona para a consulta após autenticação)

## Tecnologias

- HTML5
- CSS3
- JavaScript (Fetch API)

## Estrutura do projeto

```
pesquisador-cep/
├── rastreio.html   # Página de consulta de CEP
├── script.js       # Lógica de login e consulta à API
├── style.css       # Estilos da aplicação
└── README.md
```

## Como executar

1. Clone ou baixe este repositório.
2. Abra o arquivo `rastreio.html` no navegador (duplo clique ou arraste o arquivo para o navegador).

Para desenvolvimento, você pode usar uma extensão de **Live Server** no VS Code/Cursor ou qualquer servidor estático local, por exemplo:

```bash
npx serve .
```

Depois acesse `http://localhost:3000/rastreio.html` (a porta pode variar conforme a ferramenta).

> **Nota:** A consulta à ViaCEP exige conexão com a internet.

## Como usar

1. Na página **Consultar Endereço**, digite um CEP com **8 dígitos** (apenas números, sem hífen).
2. Clique em **Consultar**.
3. O endereço correspondente será exibido abaixo do botão (rua, bairro, cidade e estado).

### Exemplo de CEP para teste

| CEP      | Cidade        |
|----------|---------------|
| 01310100 | São Paulo, SP |

## API utilizada

As requisições são feitas para:

```
https://viacep.com.br/ws/{cep}/json/
```

Documentação oficial: [https://viacep.com.br](https://viacep.com.br)

## Autenticação (opcional)

O arquivo `script.js` inclui uma verificação de login que redireciona para `rastreio.html` quando as credenciais estão corretas:

| Campo  | Valor   |
|--------|---------|
| Login  | `admin` |
| Senha  | `admin` |

Essa lógica espera uma página com os campos `#login`, `#senha` e o botão `#send`. No repositório atual, a página principal de consulta é o `rastreio.html`. Se você for usar o fluxo de login, crie uma página inicial (por exemplo, `index.html`) com esse formulário ou abra diretamente o `rastreio.html` para consultar o CEP.

## Limitações

- O CEP deve ter exatamente 8 caracteres; caso contrário, é exibido um alerta de CEP inválido.
- CEPs inexistentes retornam a mensagem: *"Não foi possivel localizar o cep."*
- A autenticação é apenas demonstrativa (credenciais fixas no front-end), não substitui um sistema de login seguro em produção.

## Licença

Este projeto é de uso livre para estudo e portfólio. Consulte o repositório para informações sobre contribuições.
