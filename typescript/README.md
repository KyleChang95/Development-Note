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

## Sort CIDR blocks
```Typescript
// Sort by CIDR in ascending order
export const compareCidrAsc = (a: Subnet, b: Subnet) => {
  const [ip1, mask1] = a.cidr.split('/');
  const [ip2, mask2] = b.cidr.split('/');

  // Convert IP to decimal
  const ip1IntoDecimal = ip1.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);
  const ip2IntoDecimal = ip2.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);

  // Sort by IP address first, and then by subnet mask
  if (ip1IntoDecimal !== ip2IntoDecimal) {
    return ip1IntoDecimal - ip2IntoDecimal;
  } else {
    return Number(mask1) - Number(mask2);
  }
};

// Sort by CIDR in descending order
export const compareCidrDesc = (a: Subnet, b: Subnet) => {
  const [ip1, mask1] = a.cidr.split('/');
  const [ip2, mask2] = b.cidr.split('/');

  // Convert IP to decimal
  const ip1IntoDecimal = ip1.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);
  const ip2IntoDecimal = ip2.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);

  // Sort by IP address first, and then by subnet mask in descending order
  if (ip1IntoDecimal !== ip2IntoDecimal) {
    return ip2IntoDecimal - ip1IntoDecimal;
  } else {
    return Number(mask2) - Number(mask1);
  }
};
```

## Soert by IP address
```Typescript
// Sort by IP address in ascending order
export const compareIPAsc = (a: IP, b: IP) => {
  // Convert IP to decimal
  const ip1IntoDecimal = a.ip.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);
  const ip2IntoDecimal = b.ip.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);

  return ip1IntoDecimal - ip2IntoDecimal;
}

// Sort by IP address in descending order
export const compareIPDesc = (a: IP, b: IP) => {
  // Convert IP to decimal
  const ip1IntoDecimal = a.ip.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);
  const ip2IntoDecimal = b.ip.split('.').reduce((acc, octet, index) => acc + parseInt(octet, 10) * Math.pow(256, 3 - index), 0);

  return ip2IntoDecimal - ip1IntoDecimal;
}
```