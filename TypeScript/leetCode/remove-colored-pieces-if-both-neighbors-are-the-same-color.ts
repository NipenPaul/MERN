function winnerOfGame(colors: string): boolean {
    const len = colors.length;
    let a = 0, b = 0;
    for(let i = 1; i < len-1; i++){
        if(colors[i-1] == 'A' && colors[i] == 'A' && colors[i+1] == 'A'){
            a++;
        }
        else if(colors[i-1] == 'B' && colors[i] == 'B' && colors[i+1] == 'B'){
            b++;
        }
    }
    if(a > b) return true;
    return false;
};