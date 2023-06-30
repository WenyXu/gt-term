import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const banner = (args?: string[]): string => {
  return `

          _____                    _____                    _____                _____          
         /\\    \\                  /\\    \\                  /\\    \\              |\\    \\         
        /::\\____\\                /::\\    \\                /::\\____\\             |:\\____\\        
       /:::/    /               /::::\\    \\              /::::|   |             |::|   |        
      /:::/   _/___            /::::::\\    \\            /:::::|   |             |::|   |        
     /:::/   /\\    \\          /:::/\\:::\\    \\          /::::::|   |             |::|   |        
    /:::/   /::\\____\\        /:::/__\\:::\\    \\        /:::/|::|   |             |::|   |        
   /:::/   /:::/    /       /::::\\   \\:::\\    \\      /:::/ |::|   |             |::|   |        
  /:::/   /:::/   _/___    /::::::\\   \\:::\\    \\    /:::/  |::|   | _____       |::|___|______  
 /:::/___/:::/   /\\    \\  /:::/\\:::\\   \\:::\\    \\  /:::/   |::|   |/\\    \\      /::::::::\\    \\ 
|:::|   /:::/   /::\\____\\/:::/__\\:::\\   \\:::\\____\\/:: /    |::|   /::\\____\\    /::::::::::\\____\\
|:::|__/:::/   /:::/    /\\:::\\   \\:::\\   \\::/    /\\::/    /|::|  /:::/    /   /:::/~~~~/~~      
 \\:::\\/:::/   /:::/    /  \\:::\\   \\:::\\   \\/____/  \\/____/ |::| /:::/    /   /:::/    /         
  \\::::::/   /:::/    /    \\:::\\   \\:::\\    \\              |::|/:::/    /   /:::/    /          
   \\::::/___/:::/    /      \\:::\\   \\:::\\____\\             |::::::/    /   /:::/    /           
    \\:::\\__/:::/    /        \\:::\\   \\::/    /             |:::::/    /    \\::/    /            
     \\::::::::/    /          \\:::\\   \\/____/              |::::/    /      \\/____/             
      \\::::::/    /            \\:::\\    \\                  /:::/    /                           
       \\::::/    /              \\:::\\____\\                /:::/    /                            
        \\::/____/                \\::/    /                \\::/    /                             
         ~~                       \\/____/                  \\/____/                              
                                                                                                 v${packageJson.version}

Type 'help' to see list of available commands.

--
The project is open-source 🎉 type 'repo' to check out the repository.

New 🎉: Try out the new 'theme' command. See all available themes <a href="https://github.com/m4tt72/terminal/tree/master/docs/themes">in the docs</a>.
--
`;
};
