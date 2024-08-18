// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `hi, i am ${config.name}. 
welcome to my website!
more about me:
'sumfetch' - short summary, including a list of my projects.
'resume' - my latest resume!`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};


// Banner
export const banner = (args?: string[]): string => {
  return `
                  ███           █████               ████  ████                                
                 ░░░           ░░███               ░░███ ░░███                                
 █████████████   ████   ██████  ░███████    ██████  ░███  ░███   ██████     █████████████     
░░███░░███░░███ ░░███  ███░░███ ░███░░███  ███░░███ ░███  ░███  ███░░███   ░░███░░███░░███    
 ░███ ░███ ░███  ░███ ░███ ░░░  ░███ ░███ ░███████  ░███  ░███ ░███████     ░███ ░███ ░███    
 ░███ ░███ ░███  ░███ ░███  ███ ░███ ░███ ░███░░░   ░███  ░███ ░███░░░      ░███ ░███ ░███    
 █████░███ █████ █████░░██████  ████ █████░░██████  █████ █████░░██████     █████░███ █████ ██
░░░░░ ░░░ ░░░░░ ░░░░░  ░░░░░░  ░░░░ ░░░░░  ░░░░░░  ░░░░░ ░░░░░  ░░░░░░     ░░░░░ ░░░ ░░░░░ ░░ 
                                                                                                                                                                                                                                                                                                                                    
type 'help' to see the list of available commands.
type 'sumfetch' to display summary.`
};
