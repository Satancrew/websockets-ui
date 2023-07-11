export const coloredText = (message: string, color: string = "classic") => {
  const colors: { [key: string]: string } = {
    green: "\x1b[32m%s\x1b[0m",   
    blue: "\x1b[34m%s\x1b[0m",    
    yellow: "\x1b[33m%s\x1b[0m",  
    classic: "%s"                  
  };

  const colorCode = colors[color] || colors["classic"];
  console.log(colorCode, message);
}