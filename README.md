# TypeScript Playground

TypeScript の構文理解、型システムの検証、tsconfig の挙動実験のための学習用リポジトリです。

## 目的

- TypeScript の型システムを深く理解する
- 型レベルプログラミングの実験
- 各種 TypeScript 設定の動作確認
- 新機能やベストプラクティスの検証

## セットアップ

```bash
# 依存関係のインストール
npm install

# TypeScriptのコンパイル
npm run build

# 型チェックのみ実行
npm run type-check
```

## 使い方

### 1. ts-node で直接実行

```bash
# 特定のファイルを実行
npx ts-node src/utility-types/type-level-programming.ts

# または
npm run dev src/conditional-types/type-inference.ts
```

### 2. TypeScript コンパイル後実行

```bash
npm run build
node dist/utility-types/type-level-programming.js
```

### 3. 型チェックのみ

```bash
npm run type-check
```

## 初期サンプル

### Utility Types の例

`src/utility-types/type-level-programming.ts` では以下を学習できます：

- Pick, Omit, Partial, Required
- Record, keyof 演算子
- 条件型の基本
- Template Literal Types
- 再帰的な型定義

### 条件型と型推論の例

`src/conditional-types/type-inference.ts` では以下を学習できます：

- infer キーワードの使用
- 関数の戻り値型抽出
- Promise 型の値抽出
- 分配的条件型 vs 非分配的条件型
- Tuple から Union への変換

## tsconfig.json 設定

学習に適した厳格な設定を採用：

- `strict: true` - 全ての厳格チェックを有効
- `noUncheckedIndexedAccess: true` - インデックスアクセスの安全性向上
- `exactOptionalPropertyTypes: true` - オプショナルプロパティの厳密性
- その他多数の厳格オプション

## 実験・学習のヒント

1. **型エラーを意図的に作る** - strict モードでどんなエラーが出るか確認
2. **tsconfig オプションを変更** - 各設定の影響を実際に体験
3. **複雑な型を少しずつ構築** - 型レベルプログラミングの理解を深める
4. **TypeScript Playground と比較** - オンライン版との動作差異を確認

## 参考リンク

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
