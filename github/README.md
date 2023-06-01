# Push an existing repository
```bash
git init
git add .
git commit -m "first commit"
git branch -M main # rename default branch
git remote add origin git@github.com:KyleChang95/handlers.git
git push -u origin main
```

# Link Repository
- [github-api-handler](https://github.com/KyleChang95/handlers/tree/main/github-api-handler)

# Refs
- [API Doc](https://docs.github.com/en/rest?apiVersion=2022-11-28)
- [SDK](https://github.com/octokit/octokit.js)