#include <stdio.h>
 
int main() {
    long long n, a, b;
    
    scanf("%lld%lld%lld", &n, &a, &b);
    
    long long total = 0, resposta = 0;
    
    long long ciclosCompletos = n / (a+b);
    resposta = ciclosCompletos * a;
    long long sobra = n % (a+b);
    
    if (sobra <= a) 
        resposta += sobra;
    else
        resposta += a;
    
    printf("%lld\n", resposta);
    
 
    return 0;
}