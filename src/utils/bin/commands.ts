// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  return `There is no right or wrong, just fun and boring.
`;
};

// Redirection
//export const repo = async (args: string[]): Promise<string> => {
//  window.open(`${config.repo}`);
//  return 'Opening Github repository...';
//};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
//export const email = async (args: string[]): Promise<string> => {
//  window.open(`mailto:${config.email}`);
//  return `Opening mailto:${config.email}...`;
//};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  var param = args.join();
  if (!param) {
    return `
documents	medical 	private 	taxes
malware		photos		projects	flag.txt`;
  }
  else if (param == '-l'){
    return `
drwxr-----  8 bob bob 4096 Jan   3 20:31 documents
drwxr-----  8 bob bob 4096 Jan  13 07:11 malware
drwxr-----  8 bob bob 4096 Feb  38 09:22 medical
drwxr-----  8 bob bob 4096 Feb   1 01:44 photos
drwxr-----  8 bob bob 4096 May  30 12:14 private
drwxr-----  8 bob bob 4096 Jun  22 16:22 projects
drwxr-----  8 bob bob 4096 Jan  12 21:46 private
drwxr-----  8 bob bob 4096 Apr  12 12:52 taxes
-rw-r--r--  1 bob bob  546 Jan  28 20:22 flag.txt`;
  }
  else if (param == '-la' || param == '-al' ){
    return `
drwxr-xr-x 19 root root  4096 Sep  15 19:38 .
drwxr-xr-x 19 root root  4096 Sep  15 19:38 ..
drwxr-----  8 bob bob 4096 Jan   3 20:31 documents
drwxr-----  8 bob bob 4096 Sep  15 20:31 .garbage
drwxr-----  8 bob bob 4096 Jan  13 07:11 malware
drwxr-----  8 bob bob 4096 Feb  38 09:22 medical
drwxr-----  8 bob bob 4096 Feb   1 01:44 photos
drwxr-----  8 bob bob 4096 May  30 12:14 private
drwxr-----  8 bob bob 4096 Jun  22 16:22 projects
drwxr-----  8 bob bob 4096 Jan  12 21:46 private
drwxr-----  8 bob bob 4096 Apr  12 12:52 taxes
-rw-r--r--  1 bob bob  546 Jan  28 20:22 flag.txt`;
  }
  else if (param == '-a'){
    return `
.			.garbage	photos		taxes
..			malware		private		flag.txt
documents	medical		projects`;
  }
  else
    return `
documents	medical 	private 	taxes
malware		photos		projects	flag.txt`;
};

export const cat = async (args: string[]): Promise<string> => {
  var file = args.join();
  if (!file) {
    return 'Meow';
  }
  else if (file == 'flag.txt'){
    return 'Flag{You got the flag}';
  }
    else if (file == '.garbage'){
    return `
///////(#@@@@@@@@@@@@%%%#####(((/(((((/////(((((((((#((##%%@@@@@@@@@@#//////////
((/////(&@@@@@@@@@&&&&%%#######((/////////////((((((#((####%@@@@@@@@@(//////////
(//////(#@@@@@@@@@&%#%@@&&&%%&&&&&%#((/////(#%%%&%&%%%&&####@@%@@@@@@///////////
////////(@@@@@&@@@%%#&&%########%%%%##(((((###(((((####%%#(#&&@@@@@@%///////////
////////%@@@@(@@@&%##%%%%%%%&@%&%##%%%#//(##%%%%%&%%%%##(#(##&&@@@@@&/*/////////
///////(@@@@@%%&@&%####%&&&%(%#/(((((##(((##((/##/(%%%#(((###%&@@@@@#/*/**//////
///////#@@@@@@(&@@&%#((##((#((((/((####(((((((((((((((((((##%#&@@@@@(****///////
////////(@@@@@@@@@&%%##(((/(/(//(((####(//(((((///////(((###%#&@@@@@@*****//////
//////////@@@@@@@@&%%%###(((((((#%####(////((##((///((((####%%%@@@@@@**/*///////
///////////%%@@@%@&%%%%###(((((##%&@@&#((((%&%####(((((####%%%%@@@@@@****///////
/////////////&@@@@@%%%%%%#######%%%&%@@@@&%%###############%%&@&@@@@&/**////////
///////////(//@@@@@&&%%%&#%##%%#&&&%%%#/(#%#%%&%%%%#######%%&@@@@@&&@/*****/////
/////////(///%@@@@@@&&%%%%###&@&@@&&&%((#((%&&&&&&@%######%&@@@@@@(%&**/*///////
//////////(%@@@@@@@@@@&%%%%##&%#%@&&&@@&@@&&%%#%##&######%%@@@@@@@@(/**/////////
/////#&%#@@@@@@@@@@@@@@&%&&%%%(((/%((((///((/(#%#(&%(###%%@@@@@@@&@@#///////////
//////#@@@@@@@@@@@@@@@@@@&@&%#(####///((////(/(##(#&%%%&&@@@@@@@@@@@@@@(////////
///////(@@@@@@@@@@@@@@@@@@@@#(#(##%%#(((///((#%%#((%&@@@@@@@@@@@@@@@@@@@#(//////
///////(@@@@@@@@@@@@@@@@@@@@@#(#######%%%##%%%##((#&@@@@@@@@@@@@@@%&@@@%&(//////
/////////#&@@@@@@@@@@@@@@@@@@@&%((#####&#%###(#((#%@@@@@@@@@@@@@@@(%/@@@////////
I had to move fast. The hacker copied my garbage file.`;
  }
  else
    return `
cat: ${file} : No such file or directory`;
};

export const more = async (args: string[]): Promise<string> => {
  var file = args.join();
  if (!file) {
    return 'Please sir, can I have some';
  }
  else if (file == 'flag.txt'){
    return 'Flag{You got the flag}';
  }
  else
    return `
more: stat of ${file} failed: No such file or directory`;
};


export const cd = async (args: string[]): Promise<string> => {
  return `cd: permission denied: ${args[0]}`; 
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `${config.ps1_username} is not in the sudoers file.  This incident will be reported.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 .d8888b.  8888888 888888b.    .d8888b.   .d88888b.  888b    888      888     888 88888888888     d888   .d8888b.   .d8888b.   .d8888b.  
d88P  Y88b   888   888  "88b  d88P  Y88b d88P" "Y88b 8888b   888      888     888     888        d8888  d88P  Y88b d88P  Y88b d88P  Y88b 
888    888   888   888  .88P  Y88b.      888     888 88888b  888      888     888     888          888  888    888 888    888 888    888 
888          888   8888888K.   "Y888b.   888     888 888Y88b 888      Y88b   d88P     888          888  888    888 888    888 888    888 
888  88888   888   888  "Y88b     "Y88b. 888     888 888 Y88b888       Y88b d88P      888          888  888    888 888    888 888    888 
888    888   888   888    888       "888 888     888 888  Y88888        Y88o88P       888   888888 888  888    888 888    888 888    888 
Y88b  d88P   888   888   d88P Y88b  d88P Y88b. .d88P 888   Y8888         Y888P        888          888  Y88b  d88P Y88b  d88P Y88b  d88P 
 "Y8888P88 8888888 8888888P"   "Y8888P"   "Y88888P"  888    Y888          Y8P         888        8888888 "Y8888P"   "Y8888P"   "Y8888P"  
                                                                                                                                         
                                                        AUTHORIZED PERSONNEL ONLY

`;
};
