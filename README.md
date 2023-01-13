# TailwindCSS_1st
### 概要
TailwindCSSを使ったwebページ作成を行う。<br>
他にフレームワーク等は使わないで行う。<br>

### 環境構築
1. package.jsonを初期化する。<br>
`npm init -y`<br>

2. TailwindCSSをインストールする。<br>
`npm i -D tailwindcss`<br>

3. tailwind.config.jsを作成する。(カスタムデザインに使用する。)<br>
`npx tailwindcss init`<br>

4. テンプレートパスを設定する。<br>
tailwind.config.jsに下記のパスへ設定する。<br>
`content: ["./src/**/*.{html,js}"],`<br>

5. src/input.cssの作成をする。<br>
`mkdir src`<br>
`cd src`<br>
`touch input.css`<br>

6. input.cssにTailwindディレクティブを追加する。<br>
`@tailwind base;`<br>
`@tailwind components;`<br>
`@tailwind utilities;`<br>

7. package.jsonのデバッグscripts内に下記を追記する。<br>
`"build":"npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"`<br>

8. Tailwind CLIビルドプロセスを開始する<br>
`cd ../`<br>
`npm run build`<br>
dist/output.cssが作成される。(input.cssをコンパイルしたもの。)<br>
