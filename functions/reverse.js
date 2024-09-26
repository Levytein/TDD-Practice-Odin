function reverse (string) 
{
    const charArray = [];
    let start = -1;
    for(let i = string.length ; i >= 0; i--)
    {
        charArray[start] = string.charAt(i);
        start += 1;
    }
     return charArray.join('');
};



export { reverse }