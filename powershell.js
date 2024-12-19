let currentDirectory = ['~'];
const promptMessage = 'singuluriakash@Singuluris-MacBook';
const fileLocations = ['/git', '/calculator', '/arrays'];

// const git = function () {
//   return 'this is git file';
// };

// const calculator = function () {
//   return 'this is caluculator';
// };

// const arrays = function () {
//   return 'this is array';
// };


const git = ['/sprint', '/javascript', '/terminal'];
const calculator = ['/addition', '/subtraction', '/division', '/multiplication'];
const arrays = ['/splice', '/slice', '/indexOf', '/lastIndexOf'];
const filesData = [git, calculator, arrays];

const changeDirectory = function (location) {
  if (location === '..') {
    currentDirectory.pop();
    return '';
  }
  const file = location;

  if (fileLocations.includes(file)) {
    currentDirectory = currentDirectory.concat(location);
    return '';
  }

  return 'Error : ' + location + ' There is no such directory';
};

const getMessage = function (args) {
  return args.join(' ');
};

const getCurrentDirectory = function () {
  return currentDirectory;
};

const printFiles = function () {
  return fileLocations.join('\n');
};

const deleteFile = function (fileName) {
  if (!fileLocations.includes(fileName)) {
    return 'Error : ' + fileName + ' There is no such directory';
  }

  const location = fileLocations.indexOf(fileName);
  fileLocations.splice(location, 1);
  return '';
};

const printData = function (fileName) {
  if (!fileLocations.includes(fileName)) {
    return 'Error : ' + fileName + ' There is no such directory';
  }

  const location = fileLocations.indexOf(fileName);
  return filesData[location]();
};

const process = function (commandToRun) {
  const [command, ...args] = commandToRun.split(' ');
  switch (command) {
    case 'cd':
      return changeDirectory(...args);
    case 'echo':
      return getMessage(args);
    case 'pwd':
      return getCurrentDirectory();
    case 'ls':
      return printFiles();
    case 'rm':
      return deleteFile(...args);
    case 'cat':
      return printData(...args);
    default:
      return command + ' command not found';
  }
};

while (true) {
  const commandToRun = prompt(promptMessage + currentDirectory.join('') + ' % ');
  const result = process(commandToRun);
  if (result !== '') {
    console.log(result);
  }
}