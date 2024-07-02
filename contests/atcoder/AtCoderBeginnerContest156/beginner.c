#include <stdio.h>

int main() {
    int n,r, a=0;
    scanf("%d%d\n", &n, &r);
    if (n >= 10){
        printf("%d\n", r);
    } else {
        a = 100 * ( 10 - n);
        printf("%d\n", a + r);
        
    }
    return 0;
}
