---
sidebar_position: 2
---

# Single Number

## Problema

Dado um array não vazio de números inteiros `nums`, cada elemento aparece duas vezes, exceto por um. Encontre esse único elemento.

Você deve implementar uma solução com complexidade de tempo linear O(n) e usar apenas espaço extra constante O(1).

## Solução

```typescript
function singleNumber(nums: number[]): number {
    let result = 0;
    
    for (const num of nums) {
        result ^= num;
    }
    
    return result;
}
```

## Explicação

A solução utiliza a propriedade do operador XOR (^):

1. XOR de um número com ele mesmo é 0
2. XOR de um número com 0 é o próprio número
3. XOR é comutativo e associativo

Portanto, ao fazer XOR de todos os números:
- Números que aparecem duas vezes se anulam (resultado 0)
- O número que aparece uma vez permanece

## Complexidade

- Tempo: O(n)
- Espaço: O(1)

## Exemplo

```typescript
const nums = [4, 1, 2, 1, 2];
const result = singleNumber(nums);
console.log(result); // 4
```

## Casos de Teste

```typescript
// Teste 1: Caso básico
console.log(singleNumber([2, 2, 1])); // 1

// Teste 2: Número único no meio
console.log(singleNumber([4, 1, 2, 1, 2])); // 4

// Teste 3: Array com um elemento
console.log(singleNumber([1])); // 1

// Teste 4: Números negativos
console.log(singleNumber([-1, -1, -2])); // -2
```

## Observações

- Esta solução é muito eficiente em termos de espaço e tempo
- Funciona porque cada número aparece exatamente duas vezes (exceto um)
- É uma aplicação interessante de operações bit a bit
- Não requer estruturas de dados adicionais