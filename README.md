# no-node-frontend
node/npmを一切使わずにフロントエンドの開発環境作れるんじゃないか？と思いつき、試してみた結果のお砂場です。

試行錯誤のログはこちら: https://zenn.dev/cumet04/scraps/1c5fb90449af00

## うごかす
動作には[deno](https://deno.land/)が必要です。`deno`コマンドが動けばokです。なおdeno 1.10.1 で動作を確認しています。

リポジトリをcloneし`./bin/dev.sh`を動かすと、`src/main.tsx`がビルドされ8000番ポートでserveされます。
