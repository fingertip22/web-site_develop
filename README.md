# web-site_develop

## 最終更新日…20231101

## 開発環境
| コマンド | バージョン |
| ---- | ---- |
| node -v | 20.9.0 |
| npm -v | 10.1.0 |

## 概要
この開発環境は静的なWebサイト制作に使用するものです。
本ドキュメントはクイックスタートとしてご利用ください。
HTMLは`Pug`、CSSは`Sass（SCSS）`、JavaScriptは`Typescript`を用いてトランスパイルし、各画像（JPG、PNG、GIF、SVG）は圧縮やWebp生成を行います。
それぞれ`npm scripts`を用いて実行・監視しています（JavaScriptはWebpackも用いてバンドルしています）。
詳細は`package.json`や各設定ファイルを参照ください。

## 準備
本ドキュメントに記載のnode.js、npmをインストールし、以下を実行してください。
```zsh
$ npm i
```
or
```zsh
$ npm ci
```

## 主要タスク
### 初回タスク
各メタ言語や圧縮前のファイルからdist配下にトランスパイル・圧縮し出力します。
```zsh
$ npm run build
```
### 開発用タスク
#### ページ量産・更新用
ローカルサーバーを立ち上げ、JavaScript(Typescript)以外のファイルを監視します。
```zsh
$ npm run start
```
#### 機能実装・全体設計用
ローカルサーバーを立ち上げ、JavaScript(Typescript)を含めてすべてのファイルを監視します。
```zsh
$ npm run dev
```

### 納品タスク
各ソースファイルからdist配下にminify化した上でトランスパイルし出力します。
```zsh
$ npm run prod
```

## ディレクトリ構成
.
├── README.md（本ドキュメント）
├── bs-config.js（browsersyncの設定）
├── imagemin.mjs（各画像の圧縮を実行）
├── package-lock.json（パッケージ管理
├── package.json（パッケージ管理）
├── tsconfig.json（Typescriptの設定）
├── webpack.common.js（Webpackの共通設定）
├── webpack.dev.js（Webpackの開発時用設定）
├── webpack.prod.js（Webpackの納品用設定）
└── src（各ソースファイルを格納）
    ├── img（圧縮前の画像を格納）
    │   └── {folder}
    │       └── { filename.(jpg|jpeg|png|svg) }
    ├── pug（htmlの元となるpugファイルを格納）
    │   └── {folder}
    │       └── {filename.pug}
    ├── scss（cssの元となるscssファイルを格納）
    │   └── {folder}
    │       └── {filename.scss}
    └── ts（JavaScriptの元となるTypescriptファイルを格納）
        └── {folder}
            └── {filename.ts}

## 特記事項
特になし