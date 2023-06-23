# GitHub

## Create a new repository on the command line
```bash
echo "# README" >> README.md
git init
git add README.md # or `git add .`
git commit -m "first commit"
git branch -M main # -M: --move & --force, forcefully rename the default branch.
git remote add origin git@github.com:KyleChang95/handlers.git
git push -u origin main # -u: add upstream (tracking) reference between local and remote branch.
```

## Push an existing repository from the command line
```bash
git remote add origin git@github.com:KyleChang95/handlers.git
git branch -M main # -M: --move & --force, forcefully rename the default branch.
git push -u origin main # -u: add upstream (tracking) reference between local and remote branch.
```

## Link Repository
- [github-api-handler](https://github.com/KyleChang95/handlers/tree/main/github-api-handler)

## Refs
- [API Doc](https://docs.github.com/en/rest?apiVersion=2022-11-28)
- [SDK](https://github.com/octokit/octokit.js)