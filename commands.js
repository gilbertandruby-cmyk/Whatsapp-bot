// Extended command handlers
// You can import and use these in index.js or add new commands here

export const basicCommands = {
  ping: () => 'Pong! 🏓',
  hello: () => 'Hello! 👋 How can I help you?',
  help: () => `
*Available Commands:*
- !ping - Check if bot is alive
- !hello - Get a greeting
- !help - Show this help message
- !echo [text] - Echo back your text
- !time - Get current time
- !status - Get bot status
  `,
  echo: (args) => args.length > 0 ? args.join(' ') : 'Please provide text to echo',
  time: () => {
    const now = new Date();
    return `🕐 Current Time: ${now.toLocaleString()}`;
  },
  status: () => '✅ Bot is online and working!',
};

// Math commands
export const mathCommands = {
  add: (args) => {
    if (args.length < 2) return 'Usage: !add [num1] [num2]';
    const sum = parseFloat(args[0]) + parseFloat(args[1]);
    return `➕ ${args[0]} + ${args[1]} = ${sum}`;
  },
  subtract: (args) => {
    if (args.length < 2) return 'Usage: !subtract [num1] [num2]';
    const diff = parseFloat(args[0]) - parseFloat(args[1]);
    return `➖ ${args[0]} - ${args[1]} = ${diff}`;
  },
  multiply: (args) => {
    if (args.length < 2) return 'Usage: !multiply [num1] [num2]';
    const product = parseFloat(args[0]) * parseFloat(args[1]);
    return `✖️ ${args[0]} × ${args[1]} = ${product}`;
  },
  divide: (args) => {
    if (args.length < 2) return 'Usage: !divide [num1] [num2]';
    if (parseFloat(args[1]) === 0) return '❌ Cannot divide by zero!';
    const quotient = parseFloat(args[0]) / parseFloat(args[1]);
    return `➗ ${args[0]} ÷ ${args[1]} = ${quotient}`;
  },
};

// Utility commands
export const utilityCommands = {
  uppercase: (args) => {
    if (args.length === 0) return 'Please provide text to convert';
    return `🔤 ${args.join(' ').toUpperCase()}`;
  },
  lowercase: (args) => {
    if (args.length === 0) return 'Please provide text to convert';
    return `🔡 ${args.join(' ').toLowerCase()}`;
  },
  reverse: (args) => {
    if (args.length === 0) return 'Please provide text to reverse';
    const text = args.join(' ');
    return `🔁 ${text.split('').reverse().join('')}`;
  },
  info: () => `
*Bot Information:*
📱 Platform: WhatsApp Web (Baileys)
⚙️ Version: 1.0.0
👨‍💻 Language: JavaScript (Node.js)
📦 Library: Baileys
🎯 Status: Active
  `,
};

// Combine all commands
export const allCommands = {
  ...basicCommands,
  ...mathCommands,
  ...utilityCommands,
};
