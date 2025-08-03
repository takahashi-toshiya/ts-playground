// strictモードの違いを実証するテストスクリプト
// 実行: npx tsc src/test-strict.ts --noEmit

import { greet, User, processValue } from "./strict-comparison";

// 暗黙的anyのテスト
console.log(greet("TypeScript"));

// 未初期化プロパティのテスト
const user = new User();
console.log(user.name);

// 到達不可能コードパスのテスト
console.log(processValue("hello"));
console.log(processValue(42));

// その他のstrictモードテスト
function testNullChecks() {
  let maybeString: string | null = Math.random() > 0.5 ? "hello" : null;

  // strictモードでエラーになる
  return maybeString.toUpperCase();
}

function testArrayAccess() {
  const numbers = [1, 2, 3];
  const fourth = numbers[3];

  // noUncheckedIndexedAccessでstrictモードでエラーになる
  return fourth.toString();
}

// 関数パラメータの厳密性テスト
function callback(fn: (x: number) => string) {
  return fn(42);
}

// strictモードでエラーになるはず
callback((x, y) => `${x} and ${y}`);

export { testNullChecks, testArrayAccess };
