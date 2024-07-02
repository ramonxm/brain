#include <stdio.h>
 
int main() {
    int n;
    scanf("%d", &n);
    int x[n];
    
    for(int i = 0; i < n; ++i)
        scanf("%d", &x[i]);
    
    int mini = x[0], maxi = x[0];
    
    for(int i = 1; i < n; ++i) {
        if (x[i] > maxi) 
            maxi = x[i];
            
        if (x[i] < mini) 
            mini = x[i];
    }
    
    int melhorTotal;
    
    for(int p = mini; p <= maxi; ++p) {
        int total = 0;
        for(int i = 0; i < n; ++i)
            total += (x[i] - p)*(x[i] - p);
        if (p == mini || total < melhorTotal)
            melhorTotal = total;
    }
    
    printf("%d\n", melhorTotal);
    
    
 
    return 0;
}