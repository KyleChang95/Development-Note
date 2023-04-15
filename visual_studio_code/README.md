Visual Studio Code
===

## Extensions
- [Remote SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
- [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools)
   - [MySQL/MariaDB Driver](https://marketplace.visualstudio.com/items?itemName=mtxr.zqltools-driver-mysql)
   - [PostgreSQL/Cockroach Driver](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-pg)
- [Markdown Plantuml Preview](https://marketplace.visualstudio.com/items?itemName=myml.vscode-markdown-plantuml-preview)
- [XML Tools](https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml)

## Setting
```JSON
{
    "[javascript, javascriptreact, typescript, typescriptreact]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[markdown]": {
        "editor.defaultFormatter": "yzhang.markdown-all-in-one"
    },
    "[python]": {
        "editor.formatOnType": true
    },
    "coverage-gutters.coverageBaseDir": "**/coverage",
    "coverage-gutters.coverageFileNames": [
        "lcov.info",
        "cov.xml",
        "coverage.xml",
        "jacoco.xml",
        "coverage.cobertura.xml"
    ],
    "coverage-gutters.showLineCoverage": true,
    "debug.allowBreakpointsEverywhere": true,
    "debug.toolBarLocation": "docked",
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.acceptSuggestionOnEnter": "on",
    "editor.foldingMaximumRegions": 10000,
    "editor.inlineSuggest.enabled": true,
    "editor.maxTokenizationLineLength": 2000000,
    "editor.renderLineHighlightOnlyWhenFocus": true,
    "editor.snippetSuggestions": "top",
    "editor.suggest.preview": true,
    "editor.suggest.showMethods": true,
    "eslint.format.enable": true,
    "explorer.confirmDelete": false,
    "git.autofetch": true,
    "gitlens.hovers.currentLine.over": "line",
    "json.maxItemsComputed": 10000000,
    "projectManager.groupList": true,
    "remote.SSH.remotePlatform": {
        "Gitlab": "linux",
        "long-task-handler": "linux",
        "vagrant": "linux",
        "vagrant-100GB": "linux"
    },
    "security.workspace.trust.untrustedFiles": "open",
    "sqltools.autoOpenSessionFiles": true,
    "sqltools.results.location": "current",
    "sqltools.results.reuseTabs": "connection",
    "terminal.integrated.defaultProfile.linux": "JavaScript Debug Terminal",
    "terminal.integrated.defaultProfile.osx": "zsh",
    "terminal.integrated.defaultProfile.windows": "PowerShell",
    "terminal.integrated.enableMultiLinePasteWarning": false,
    "terminal.integrated.profiles.linux": {
        "bash": {
        "icon": "terminal-bash",
        "path": "bash"
        }
    },
    "terminal.integrated.profiles.windows": {
        "PowerShell": {
        "icon": "terminal-powershell",
        "source": "PowerShell"
        }
    },
    "update.mode": "manual",
    "workbench.editorAssociations": {
        "git-rebase-todo": "gitlens.rebase"
    },
    "workbench.startupEditor": "none"
}
```

## Task