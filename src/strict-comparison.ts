// TypeScript strictモードの比較例
// tsconfig.jsonの"strict": true/falseを切り替えて違いを確認

// 1. 暗黙的anyパラメータ
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Null/undefinedチェック
let value: string | null = null;
let length = value.length;

// 3. 未初期化クラスプロパティ
class User {
    name: string;
    age: number;
    
    constructor() {
        // プロパティが初期化されていない
    }
}

// 4. 関数型の厳密性
type Handler = (event: Event) => void;
let handler: Handler = (e: MouseEvent) => {
    console.log(e.clientX);
};

// 5. bind/call/applyの厳密性
function logThis(this: { name: string }) {
    console.log(this.name);
}
logThis.call({ age: 25 });

// 6. 配列アクセスでundefinedの可能性
const items = ['a', 'b', 'c'];
const item = items[10];
console.log(item.toUpperCase());

// 7. オプショナルプロパティの型
interface Config {
    name?: string;
}
const config: Config = { name: undefined };
const nameLength = config.name?.length;

// 8. 到達不可能なコード
function processValue(val: string | number): string {
    if (typeof val === 'string') {
        return val.toUpperCase();
    } else if (typeof val === 'number') {
        return val.toString();
    }
    // ここは到達不可能だがstrictモードで検出される
}

// 9. Switchのfallthrough
function getDay(day: number): string {
    switch (day) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
        case 4:
            return 'Wednesday/Thursday';
        default:
            return 'Unknown';
    }
}

// 10. インデックスシグネチャアクセス
interface StringDict {
    [key: string]: string;
}
const dict: StringDict = { hello: 'world' };
const value2 = dict['missing'];
console.log(value2.toUpperCase());

export { greet, User, handler, logThis, items, config, processValue, getDay, dict };