---
sidebar_position: 1
---

# Two Sum

## Problema

Dado um array de números inteiros `nums` e um alvo `target`, retorne os índices dos dois números em `nums` que somam ao `target`.

Você pode assumir que cada entrada terá exatamente uma solução, e você não pode usar o mesmo elemento duas vezes.

## Solução

```typescript
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}
```

## Explicação

A solução utiliza um HashMap para armazenar os números já visitados e seus índices. Para cada número no array:

1. Calculamos o complemento necessário para atingir o alvo (target - número atual)
2. Verificamos se o complemento já existe no HashMap
3. Se existir, encontramos nossa solução
4. Se não, adicionamos o número atual e seu índice ao HashMap

## Complexidade

- Tempo: O(n)
- Espaço: O(n)

## Exemplo

```typescript
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result); // [0, 1]
```

## Casos de Teste

```typescript
// Teste 1: Caso básico
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// Teste 2: Números negativos
console.log(twoSum([-1, -2, -3, -4, -5], -8)); // [2, 4]

// Teste 3: Números repetidos
console.log(twoSum([3, 3], 6)); // [0, 1]
```