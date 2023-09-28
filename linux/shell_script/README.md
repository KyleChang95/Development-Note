# Shell Script

## Shebang
Also known as hashbang, is a special identifier used to indicate how an interpreter processes script files.

- bash : `#!/bin/bash`
- zsh : `#!/bin/zsh`

## Define Associative Arrays
```bash
declare -A array=(
  [A]="aaa"
  [B]="bbb"
  [C]="ccc"
  [D]="ddd"
)

# Append item
array[E]="eee"

# Get item
echo ${array[A]}

# Iterating
for key in "${!array[@]}"; do
  echo "Key: $key, Value: ${array[$key]}"
done

# Delete item
unset array[A]

```
