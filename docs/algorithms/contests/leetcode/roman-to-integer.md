---
sidebar_position: 4
---

# Roman to Integer

## Problema

Converta um número romano em um número inteiro.

Os números romanos são representados por sete símbolos diferentes: I, V, X, L, C, D e M.

```
Símbolo    Valor
I          1
V          5
X          10
L          50
C          100
D          500
M          1000
```

## Solução

```typescript
function romanToInt(s: string): number {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const current = values[s[i]];
        const next = i + 1 < s.length ? values[s[i + 1]] : 0;
        
        if (current < next) {
            result += next - current;
            i++; // Pula o próximo caractere
        } else {
            result += current;
        }
    }
    
    return result;
}
```

## Explicação

A solução funciona da seguinte forma:

1. Criamos um mapa com os valores de cada símbolo romano
2. Percorremos a string caractere por caractere
3. Para cada caractere:
   - Comparamos seu valor com o próximo caractere
   - Se o valor atual for menor que o próximo, subtraímos (caso especial como IV = 4)
   - Caso contrário, apenas somamos o valor atual

## Complexidade

- Tempo: O(n)
- Espaço: O(1)

## Exemplo

```typescript
console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
```

## Casos de Teste

```typescript
// Teste 1: Números simples
console.log(romanToInt('III')); // 3
console.log(romanToInt('VII')); // 7

// Teste 2: Subtrações
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('XL')); // 40
console.log(romanToInt('XC')); // 90
console.log(romanToInt('CD')); // 400
console.log(romanToInt('CM')); // 900

// Teste 3: Números complexos
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
```

## Regras dos Números Romanos

1. Os símbolos I, X, C, e M podem ser repetidos até três vezes consecutivas
2. Os símbolos V, L, e D não podem ser repetidos
3. Os símbolos podem ser subtraídos apenas nas seguintes situações:
   - I pode ser colocado antes de V (5) e X (10) para formar 4 e 9
   - X pode ser colocado antes de L (50) e C (100) para formar 40 e 90
   - C pode ser colocado antes de D (500) e M (1000) para formar 400 e 900

## Observações

- A solução é eficiente e direta
- Lida corretamente com todos os casos especiais de subtração
- Não requer estruturas de dados complexas
- É fácil de entender e manter