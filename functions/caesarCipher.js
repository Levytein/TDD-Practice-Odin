function cipher(string,shift)
{
    var output ='';

    for(let i =0; i <string.length; i++)
    {
        let code = string.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            code += shift;
            if ((code > 90 && string[i] <= 'Z') || code > 122) {
                code -= 26;
            }
          }
           
          output += String.fromCharCode(code);
        }     

        return output;
}
 


export {cipher}