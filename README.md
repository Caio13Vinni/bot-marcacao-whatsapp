# Bot de Marcação no WhatsApp
Bot para marcar todas as pessoas em um grupo do WhatsApp usando a biblioteca Baileys.

## 🔍 Visão Geral
Este projeto consiste em um bot que, acionado por um comando (por exemplo `!marcar`), menciona todos os participantes de um grupo no WhatsApp. Foi desenvolvido com Node.js + Baileys, e pensado para uso por administradores de grupo.

## ✅ Funcionalidades principais
- Responde ao comando `!marcar` (ou outro que você defina) para mencionar todos os membros do grupo.
- Verifica se quem executou o comando é um administrador do grupo antes de fazer a marcação (para garantir controle).
- Fácil de configurar e modificar para outros comandos personalizados.

## 🛠️ Tecnologias usadas
- Node.js
- Biblioteca Baileys para integração com Web WhatsApp
- JavaScript (ES6+)
- Arquivo `bot.js` como ponto de entrada para o bot

## 📁 Estrutura do projeto
```
bot-marcacao-whatsapp/
│
├─ bot.js         # arquivo principal que inicializa o bot
├─ README.md      # este arquivo
└─ package.json   # dependências e scripts
```

## 🔧 Instalação e uso
1. Clone o repositório:
   ```bash
   git clone https://github.com/Caio13Vinni/bot-marcacao-whatsapp.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd bot-marcacao-whatsapp
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Conecte‑se ao WhatsApp via Baileys (geralmente será exibido um QR code para escanear pelo celular).
   > ⚠️ Assegure‑se de usar uma conta apropriada e de seguir as diretrizes de uso do WhatsApp.

5. No grupo em que você deseja usar o bot, certifique‑se de que o bot está com permissões necessárias e adicionado como participante.

6. No chat do grupo, digite o comando (ex: `!marcar`). O bot irá mencionar todos os membros do grupo.

## 🧩 Como personalizar
- Alterar o comando de ativação: modifique no `bot.js` o trigger para outro prefixo ou palavra‑chave.
- Adicionar mais comandos: você pode estender a lógica para novos comandos (ex: `!bemvindo`, `!limpar`, etc.).
- Restrições de uso: atualmente o bot verifica se o usuário que acionou o comando é administrador — você pode modificar essa verificação ou adicionar mais condições.
- Formatação da mensagem de marcação: personalizar a mensagem enviada junto com a menção de todos.

## ⚠️ Avisos e boas práticas
- Usar esse tipo de bot com moderação: marcar todos os participantes repetidamente pode ser considerado spam ou causar incômodo.
- Respeite os termos de serviço do WhatsApp: uso de automações pode implicar suspensão ou bloqueio da conta se for considerado abusivo.
- Teste em grupos pequenos antes de usar em grupos maiores ou críticos.
- Mantenha o bot atualizado e monitore se a biblioteca Baileys ou o WhatsApp mudarem APIs ou políticas.

## 🤝 Contribuindo
Contribuições são bem‑vindas! Se você quiser adicionar novos comandos, melhorar a segurança ou refatorar o código, sinta‑se livre para abrir *issues* e *pull requests*.
Por favor, siga as boas práticas de código, inclua comentários claros e atualize este README se adicionar funcionalidades mais substanciais.

