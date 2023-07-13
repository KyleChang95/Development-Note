Typescript
===

## Base64
```Typescript
const base64Encode = (str: string): string => Buffer.from(str, 'utf8').toString('base64')
const base64Decode = (str: string): string => Buffer.from(str, 'base64').toString('utf8')
```

## Sort by multiple fields
```Typescript
const data = [
  { A: "apple", B: "banana" },
  { A: "banana", B: "apple" },
  { A: "apple", B: "cherry" },
  { A: "cherry", B: "apple" }
]

data.sort((a, b) => {
  if (a.A === b.A) {
    // If A field is the same, sort based on the B field
    return a.B.localeCompare(b.B);
  }

  // Otherwise, sort based on the A field
  return a.A.localeCompare(b.A);
})

// Result
// [
//   { A: 'apple', B: 'apple' },
//   { A: 'apple', B: 'cherry' },
//   { A: 'banana', B: 'apple' },
//   { A: 'cherry', B: 'apple' }
// ]
```