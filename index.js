const terminalCommands = require('./terminal-commands');

console.log("running ls command");
terminalCommands.ls();

console.log("running touch command");
terminalCommands.touch('hello mom.txt', 'Hi mom!');

console.log("running mkdir command");
terminalCommands.mkdir('./tmp/test');
