#include <stdio.h>

int main() {
    int resposta = 0;
    char p[3];
    scanf("%s", p);
    
    if(p[0]=='S' && p[1]=='S' && p[2]=='R')
        resposta += 1;
    else if(p[0]=='S' && p[1]=='R' && p[2]=='S')
        resposta +=1;
    else if(p[0]=='R' && p[1]=='S' && p[2]=='S')
        resposta +=1;
    else if(p[0]=='S' && p[1]=='R' && p[2]=='R')
        resposta +=2;
    else if(p[0]=='R' && p[1]=='R' && p[2]=='S')
        resposta +=2;
    else if(p[0]=='R' && p[1]=='S' && p[2]=='R')
        resposta +=1;
    else if(p[0]=='R' && p[1]=='S' && p[2]=='S')
        resposta +=1;
    else if(p[0]=='S' && p[1]=='S' && p[2]=='R')
        resposta +=1;
    else if(p[0]=='S' && p[1]=='S' && p[2]=='S')
        resposta = 0;
    else if(p[0]=='R' && p[1]=='R' && p[2]=='R')
        resposta +=3;
        
    printf("%d", resposta);
    
    
    
    return 0;
}