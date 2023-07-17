export const coloredText = (message: string, color: string) => {
  const colors: { [key: string]: string } = {
    green: `\x1b[32m${message}\x1b[0m`,   
    blue: `\x1b[34m${message}\x1b[0m`,    
    yellow: `\x1b[33m${message}\x1b[0m`,  
    red: `\x1b[31m${message}\x1b[0m`,       
  };

  const prettyText = colors[color];
  return prettyText;
}