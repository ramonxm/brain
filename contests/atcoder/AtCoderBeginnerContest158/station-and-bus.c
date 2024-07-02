#include <stdio.h>

int main() {
    char palavra[3];
    scanf("%s", palavra);

    if(palavra[0] == 'A' && palavra[1] == 'B' || palavra[1] == 'B' && palavra[2] == 'A' || palavra[0] == 'B' && palavra[2] == 'A' || palavra[0] == 'B'&& palavra[1] == 'A' || palavra[1] == 'A' && palavra[2] == 'B') {
        printf("Yes\n");   
    }
    
    else {
        printf("No\n");
    }

    return 0;
}
