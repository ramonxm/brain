#include <stdio.h>

int main() {
    int x,m,j=0;
    scanf("%d %d",&x,&m);
 
    while(x) {
        
        x/=m;
        j++;
        
    }
     printf("%d\n",j);
 
    return 0;
}