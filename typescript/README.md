# 設置開發環境

## 透過 [NVM](https://github.com/nvm-sh/nvm) 管理 Node.js 版本

1. 安裝或更新 NVM
    ```shell
    # 執行安裝腳本，會自動在 ~/.zshrc 或 ~/.bashrc 中添加 NVM 的環境變數
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

    # 重新載入 shell 配置
    source ~/.zshrc

    # 確認 NVM 是否安裝成功
    nvm --version
    ```

2. 安裝 Node.js
    ```shell
    # 鎖定 Node.js 版本
    echo "20" > .nvmrc

    # 安裝 Node.js
    nvm install 20

    # 使用指定版本的 Node.js
    nvm use 20

    # 確認 Node.js 版本
    node --version
    ```

## 初始化專案

1. 初始化 `package.json`  
    ```shell
    npm init -y
    ```

    接著在 `package.json` 中添加以下內容：
    ```json
    {
      "type": "module",
      "scripts": {
        "dev": "tsx watch src/index.ts",   // 開發模式：存檔自動重啟 (Hot Reload)
        "build": "tsc",                    // 建置模式：編譯成 JS
        "start": "node dist/index.js",     // 生產模式：執行編譯後的 JS
        "test": "echo \"Error: no test specified\" && exit 1" // 測試腳本
      }
    }
    ```

2. 安裝開發依賴套件 
    | 套件名稱     | 用途                            |
    | ----------- | ------------------------------ |
    | typescript  | TypeScript 編譯器               |
    | @types/node | Node.js 的 TypeScript 類型定義   |
    | tsx         | 用於執行 TypeScript 代碼的工具    |

    ```shell
    npm install --save-dev typescript @types/node tsx
    ```

3. 初始化 `tsconfig.json` 文件

    可參考 [basic_tsconfig.json](./basic_tsconfig.json) 進行配置

    ```shell
    npx tsc --init
    ```

## 設定專案架構  

```plaintext
Project/
├── .env                # 環境變數
├── .gitignore          # 排除 node_modules, .env, dist 等不必要的文件
├── package.json
├── package-lock.json
├── tsconfig.json
└── src/
    ├── index.ts        # 程式進入點
    ├── config.ts       # 環境變數管理
    ├── services/       # 業務邏輯
    └── utils/          # 共用工具
```

`.gitignore` 應包含以下內容
```plaintext
node_modules
dist
.env
.DS_Store
credentials.json
token.json
```
