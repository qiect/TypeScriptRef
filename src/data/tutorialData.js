export const tutorialChapters = [
    {
        slug: "getting-started",
        title: "TypeScript 入门",
        description: "从零开始学习 TypeScript，了解如何安装、配置并编写你的第一个 TypeScript 程序。",
        order: 1,
        icon: "Play",
        sections: [
            {
                id: "installation",
                title: "安装 TypeScript",
                content: "TypeScript 是 JavaScript 的超集，它在 JavaScript 的基础上添加了静态类型系统。你可以通过 npm 全局安装 TypeScript 编译器，也可以在项目中作为开发依赖安装。安装完成后，使用 tsc 命令即可编译 TypeScript 文件。建议在项目中使用本地安装的方式，这样可以确保团队成员使用相同的 TypeScript 版本。",
                codeExample: {
                    code: `// 全局安装 TypeScript
// npm install -g typescript

// 在项目中本地安装
// npm install -D typescript

// 检查安装版本
// tsc --version

// 编译单个文件
// tsc hello.ts

// 初始化项目配置
// tsc --init`,
                    language: "typescript",
                    description: "通过 npm 安装 TypeScript 编译器并验证安装",
                },
            },
            {
                id: "tsconfig",
                title: "配置 tsconfig.json",
                content: "tsconfig.json 是 TypeScript 项目的配置文件，它定义了编译器选项和项目包含的文件。通过 tsc --init 可以生成默认的配置文件。常用的配置选项包括 target（编译目标版本）、module（模块系统）、strict（严格模式）、outDir（输出目录）等。开启 strict 模式可以启用所有严格类型检查选项，推荐在新项目中使用。",
                codeExample: {
                    code: `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "lib": ["ES2020", "DOM"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`,
                    language: "json",
                    description: "一个典型的 tsconfig.json 配置文件",
                },
            },
            {
                id: "first-program",
                title: "第一个 TypeScript 程序",
                content: "让我们编写第一个 TypeScript 程序。TypeScript 文件以 .ts 为扩展名。与 JavaScript 不同，TypeScript 允许你为变量、函数参数和返回值添加类型注解。编译器会在编译时检查类型是否正确，帮助你提前发现潜在的 bug。编译后的 .js 文件可以在任何 JavaScript 环境中运行。",
                codeExample: {
                    code: `function greet(name: string): string {
  return \`你好, \${name}! 欢迎学习 TypeScript!\`;
}

const user: string = "开发者";

console.log(greet(user));

// 类型错误示例（编译时会报错）
// console.log(greet(42)); // 错误: 类型 number 不能赋值给类型 string

interface User {
  name: string;
  age: number;
  email?: string;
}

function createUser(name: string, age: number): User {
  return { name, age };
}

const newUser = createUser("张三", 28);
console.log(\`\${newUser.name}, 年龄 \${newUser.age} 岁\`);`,
                    language: "typescript",
                    description: "编写第一个 TypeScript 程序，体验类型注解和接口",
                },
            },
            {
                id: "compilation",
                title: "编译与运行",
                content: "TypeScript 代码需要编译成 JavaScript 才能在浏览器或 Node.js 中运行。你可以使用 tsc 命令手动编译，也可以使用 ts-node 直接运行 TypeScript 文件进行开发调试。在开发过程中，使用 watch 模式可以让编译器在文件变化时自动重新编译。对于前端项目，Vite、Webpack 等构建工具也提供了 TypeScript 支持。",
                codeExample: {
                    code: `// 手动编译
// tsc index.ts

// 监听模式（文件变化自动编译）
// tsc index.ts --watch

// 使用 ts-node 直接运行
// npx ts-node index.ts

// 在 package.json 中配置脚本
/*
{
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "start": "ts-node src/index.ts"
  }
}
*/

// 编译后的 JavaScript 输出示例
// TypeScript 源码:
function add(a: number, b: number): number {
  return a + b;
}

// 编译后的 JavaScript:
// function add(a, b) {
//   return a + b;
// }`,
                    language: "typescript",
                    description: "TypeScript 的编译与运行方式",
                },
            },
        ],
    },
    {
        slug: "basic-types",
        title: "基础类型",
        description: "掌握 TypeScript 中的基础类型系统，包括原始类型、数组、元组、枚举以及特殊类型。",
        order: 2,
        icon: "Hash",
        sections: [
            {
                id: "primitive-types",
                title: "原始类型：number、string、boolean",
                content: "TypeScript 的原始类型与 JavaScript 一致，包括 number（数字）、string（字符串）和 boolean（布尔值）。TypeScript 还支持字面量类型，可以将变量的值限定为特定的字面量。类型注解使用冒号语法，如 let age: number = 25。如果变量在声明时已经赋值，TypeScript 可以自动推断类型，此时类型注解可以省略。",
                codeExample: {
                    code: `let age: number = 25;
let username: string = "张三";
let isActive: boolean = true;

let hex: number = 0xff;
let binary: number = 0b1010;
let octal: number = 0o744;

let greeting: string = \`你好, 我叫\${username}, 今年\${age}岁\`;

let isAdult: boolean = age >= 18;

type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";

type Direction = "up" | "down" | "left" | "right";
let move: Direction = "up";`,
                    language: "typescript",
                    description: "原始类型和字面量类型的使用",
                },
            },
            {
                id: "array-tuple-enum",
                title: "数组、元组与枚举",
                content: "数组类型有两种写法：使用方括号语法 number[] 或泛型语法 Array<number>。元组（Tuple）是固定长度和类型的数组，每个位置可以有不同类型。枚举（Enum）用于定义一组命名常量，默认从 0 开始编号，也可以手动指定值。反向映射是数字枚举的特性，字符串枚举不支持反向映射。",
                codeExample: {
                    code: `const numbers: number[] = [1, 2, 3, 4, 5];
const names: Array<string> = ["Alice", "Bob", "Charlie"];

const rgb: [number, number, number] = [255, 128, 0];
const userInfo: [string, number, boolean] = ["张三", 28, true];

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}

let favoriteColor: Color = Color.Green;

enum HttpStatus {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500,
}

function handleResponse(status: HttpStatus): string {
  if (status === HttpStatus.OK) return "请求成功";
  if (status === HttpStatus.NotFound) return "资源未找到";
  return "服务器错误";
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let dir: Direction = Direction.Up;`,
                    language: "typescript",
                    description: "数组、元组和枚举的定义与使用",
                },
            },
            {
                id: "special-types",
                title: "特殊类型：void、null、undefined、never、any、unknown",
                content: "void 表示没有返回值，通常用于函数返回类型。null 和 undefined 是所有类型的子类型（strictNullChecks 关闭时）。never 表示永远不会存在的类型，比如总是抛出异常的函数。any 会跳过所有类型检查，应尽量避免使用。unknown 是类型安全的 any，使用前必须进行类型收窄。推荐使用 unknown 替代 any。",
                codeExample: {
                    code: `function logMessage(msg: string): void {
  console.log(msg);
}

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

let uncertain: unknown = 4;
uncertain = "maybe a string";

if (typeof uncertain === "string") {
  console.log(uncertain.toUpperCase());
}

function formatValue(value: unknown): string {
  if (typeof value === "string") {
    return value.trim();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  } else if (Array.isArray(value)) {
    return value.join(", ");
  }
  return String(value);
}

let nullableValue: string | null = null;
nullableValue = "hello";

let undefinedValue: number | undefined = undefined;
undefinedValue = 42;`,
                    language: "typescript",
                    description: "特殊类型的使用场景和区别",
                },
            },
            {
                id: "type-inference",
                title: "类型推断与类型断言",
                content: "TypeScript 拥有强大的类型推断能力，在许多情况下你不需要显式标注类型。当变量声明时赋值、函数返回值等场景，编译器会自动推断类型。类型断言用于告诉编译器你比它更了解某个值的类型，使用 as 语法或尖括号语法。但类型断言不会进行运行时检查，滥用可能导致运行时错误。",
                codeExample: {
                    code: `let count = 10;
let message = "hello";
let items = [1, 2, 3];

function double(n: number) {
  return n * 2;
}

let result = double(5);

interface ApiResponse {
  code: number;
  data: {
    id: string;
    name: string;
  };
  message: string;
}

const response = {} as ApiResponse;
response.code = 200;
response.data = { id: "1", name: "项目" };

const input = document.getElementById("myInput") as HTMLInputElement;
input.value = "类型断言示例";

function processValue(val: string | number): number {
  if (typeof val === "string") {
    return val.length;
  }
  return val;
}`,
                    language: "typescript",
                    description: "类型推断和类型断言的使用方法",
                },
            },
        ],
    },
    {
        slug: "interfaces",
        title: "接口与类型别名",
        description: "学习如何使用接口和类型别名来定义复杂的对象结构和类型组合。",
        order: 3,
        icon: "Layers",
        sections: [
            {
                id: "interface-definition",
                title: "接口定义与使用",
                content: "接口是 TypeScript 中定义对象形状的核心方式。它描述了对象应该有哪些属性以及属性的类型。接口只存在于编译时，编译后会被完全移除，不会产生任何运行时代码。接口可以作为参数类型、返回值类型，也可以用来约束变量的结构。当对象字面量直接赋值给接口类型的变量时，会进行严格的多余属性检查。",
                codeExample: {
                    code: `interface Person {
  name: string;
  age: number;
}

function printPerson(person: Person): void {
  console.log(\`\${person.name}, \${person.age}岁\`);
}

const person: Person = {
  name: "李四",
  age: 30,
};

printPerson(person);

interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 5; // 错误: x 是只读属性

interface Config {
  host: string;
  port: number;
  protocol: "http" | "https";
}

function createServer(config: Config): void {
  console.log(\`服务启动: \${config.protocol}://\${config.host}:\${config.port}\`);
}

createServer({ host: "localhost", port: 3000, protocol: "http" });`,
                    language: "typescript",
                    description: "接口的基本定义和使用方法",
                },
            },
            {
                id: "optional-readonly",
                title: "可选属性与只读属性",
                content: "可选属性使用问号标记，表示该属性可以不存在。这在描述可能缺失的字段时非常有用，比如 API 返回的数据中某些字段可能为空。只读属性使用 readonly 修饰，表示属性只能在对象创建时赋值，之后不能修改。TypeScript 还提供了 Readonly 工具类型，可以将所有属性变为只读。ReadonlyArray 可以创建不可变数组。",
                codeExample: {
                    code: `interface UserProfile {
  name: string;
  age: number;
  email?: string;
  phone?: string;
  readonly id: string;
  readonly createdAt: Date;
}

function createUser(name: string, age: number): UserProfile {
  return {
    name,
    age,
    id: Math.random().toString(36).substring(2),
    createdAt: new Date(),
  };
}

const user = createUser("王五", 25);
user.email = "wangwu@example.com";
// user.id = "new-id"; // 错误: id 是只读属性
// user.createdAt = new Date(); // 错误: createdAt 是只读属性

type ReadonlyProfile = Readonly<UserProfile>;

const readonlyUser: ReadonlyProfile = {
  name: "赵六",
  age: 30,
  id: "abc123",
  createdAt: new Date(),
};
// readonlyUser.name = "新名字"; // 错误: 属性是只读的

const mutableArr: number[] = [1, 2, 3];
const readonlyArr: ReadonlyArray<number> = [1, 2, 3];
// readonlyArr.push(4); // 错误: 不允许修改`,
                    language: "typescript",
                    description: "可选属性和只读属性的使用",
                },
            },
            {
                id: "interface-inheritance",
                title: "接口继承与合并",
                content: "接口支持继承，使用 extends 关键字可以从一个或多个接口派生出新接口。子接口会继承父接口的所有属性，还可以添加新的属性或覆盖同名属性（类型需要兼容）。接口还支持声明合并——同名接口的成员会自动合并。这在扩展第三方库的类型定义时非常有用。",
                codeExample: {
                    code: `interface Animal {
  name: string;
  age: number;
}

interface Pet extends Animal {
  owner: string;
}

interface Dog extends Pet {
  breed: string;
  bark(): void;
}

const myDog: Dog = {
  name: "旺财",
  age: 3,
  owner: "张三",
  breed: "金毛",
  bark() {
    console.log("汪汪!");
  },
};

interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

interface Duck extends Animal, Flyable, Swimmable {
  quack(): void;
}

const donald: Duck = {
  name: "唐老鸭",
  age: 5,
  fly() {
    console.log("正在飞行");
  },
  swim() {
    console.log("正在游泳");
  },
  quack() {
    console.log("嘎嘎!");
  },
};

interface Window {
  title: string;
}

interface Window {
  customProp: string;
}

const win: Window = {
  title: "主窗口",
  customProp: "扩展属性",
};`,
                    language: "typescript",
                    description: "接口继承、多继承和声明合并",
                },
            },
            {
                id: "type-aliases",
                title: "类型别名 type",
                content: "类型别名使用 type 关键字定义，可以为任何类型创建一个新名称。与接口不同，类型别名可以表示原始类型、联合类型、交叉类型、元组等任何类型。类型别名不支持继承和声明合并，但可以使用交叉类型来实现类似效果。在实际开发中，接口和类型别名经常配合使用，接口用于定义对象结构，类型别名用于组合和转换类型。",
                codeExample: {
                    code: `type ID = string | number;
type Timestamp = number;
type Nullable<T> = T | null;

type Point = {
  x: number;
  y: number;
};

type Vector = Point & {
  z: number;
};

const vec: Vector = { x: 1, y: 2, z: 3 };

type Callback = (data: unknown) => void;

type EventHandler = {
  on(event: string, callback: Callback): void;
  off(event: string, callback: Callback): void;
  emit(event: string, data?: unknown): void;
};

type Coordinate = [number, number, number];
const gps: Coordinate = [39.9042, 116.4074, 50];

type Status = "idle" | "loading" | "success" | "error";

interface RequestState<T> {
  status: Status;
  data: Nullable<T>;
  error: string | null;
}

const userState: RequestState<{ name: string; age: number }> = {
  status: "loading",
  data: null,
  error: null,
};`,
                    language: "typescript",
                    description: "类型别名的各种用法和与接口的区别",
                },
            },
        ],
    },
    {
        slug: "functions",
        title: "函数",
        description: "深入理解 TypeScript 中函数的类型定义，包括参数类型、返回值、重载和箭头函数。",
        order: 4,
        icon: "Braces",
        sections: [
            {
                id: "function-types",
                title: "参数类型与返回值类型",
                content: "在 TypeScript 中，函数的每个参数都需要指定类型，返回值类型也可以显式声明。虽然 TypeScript 能够根据 return 语句推断返回值类型，但显式声明返回值类型可以让代码意图更清晰，也能防止意外返回错误类型。对于回调函数，参数类型同样需要声明。",
                codeExample: {
                    code: `function add(a: number, b: number): number {
  return a + b;
}

function buildGreeting(name: string, time: "morning" | "afternoon" | "evening"): string {
  const greetings = {
    morning: "早上好",
    afternoon: "下午好",
    evening: "晚上好",
  };
  return \`\${greetings[time]}, \${name}!\`;
}

function findMax(numbers: number[]): number {
  return Math.max(...numbers);
}

function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return \`\${y}-\${m}-\${d}\`;
}

type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a, b) => a * b;
const divide: MathOperation = (a, b) => (b !== 0 ? a / b : 0);

function executeOperation(op: MathOperation, x: number, y: number): number {
  return op(x, y);
}

console.log(executeOperation(multiply, 6, 7));`,
                    language: "typescript",
                    description: "函数参数类型和返回值类型的声明",
                },
            },
            {
                id: "optional-default-rest",
                title: "可选参数、默认参数与剩余参数",
                content: "可选参数使用问号标记，必须放在必需参数之后。默认参数在参数名后赋予默认值，调用时可以省略。剩余参数使用省略号语法，将多个参数收集为一个数组。注意可选参数和默认参数虽然都可以省略，但语义不同：可选参数的值可能是 undefined，而默认参数在省略时会有确定的默认值。",
                codeExample: {
                    code: `function createUser(
  name: string,
  age: number,
  role?: string
): string {
  return \`\${name}, \${age}岁\${role ? \`, 角色: \${role}\` : ""}\`;
}

console.log(createUser("张三", 28));
console.log(createUser("李四", 30, "管理员"));

function buildQuery(
  baseUrl: string,
  page: number = 1,
  pageSize: number = 10,
  sort: string = "createdAt"
): string {
  return \`\${baseUrl}?page=\${page}&pageSize=\${pageSize}&sort=\${sort}\`;
}

console.log(buildQuery("/api/users"));
console.log(buildQuery("/api/users", 2, 20));

function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40, 50));

function logWithTimestamp(format: string, ...values: unknown[]): void {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] \${format}\`, ...values);
}

logWithTimestamp("用户登录", { userId: "u001" });`,
                    language: "typescript",
                    description: "可选参数、默认参数和剩余参数的使用",
                },
            },
            {
                id: "function-overloads",
                title: "函数重载",
                content: "函数重载允许同一个函数根据不同的参数类型或数量返回不同类型的值。你需要先声明所有重载签名，然后在最后提供一个统一的实现签名。TypeScript 在调用时会根据传入的参数匹配最合适的重载签名。函数重载在处理多种输入格式时非常有用，比如一个函数既接受字符串也接受对象作为参数。",
                codeExample: {
                    code: `function formatInput(input: string): string;
function formatInput(input: number): string;
function formatInput(input: Date): string;
function formatInput(input: string | number | Date): string {
  if (typeof input === "string") {
    return input.trim();
  } else if (typeof input === "number") {
    return input.toFixed(2);
  } else if (input instanceof Date) {
    return input.toLocaleDateString("zh-CN");
  }
  return String(input);
}

console.log(formatInput("  hello  "));
console.log(formatInput(3.14159));
console.log(formatInput(new Date()));

function getLength(value: string): number;
function getLength(value: unknown[]): number;
function getLength(value: string | unknown[]): number {
  return value.length;
}

console.log(getLength("TypeScript"));
console.log(getLength([1, 2, 3, 4]));

interface ApiResponse<T> {
  code: number;
  data: T;
}

function request(url: string): Promise<ApiResponse<unknown>>;
function request<T>(url: string, options: { responseType: T }): Promise<ApiResponse<T>>;
function request<T>(url: string, options?: { responseType: T }): Promise<ApiResponse<T | unknown>> {
  return fetch(url).then((res) => res.json());
}`,
                    language: "typescript",
                    description: "函数重载的定义和使用",
                },
            },
            {
                id: "arrow-function-types",
                title: "箭头函数与函数类型表达式",
                content: "箭头函数在 TypeScript 中同样可以使用类型注解。函数类型表达式使用箭头语法定义函数的类型签名。在回调函数和事件处理中，箭头函数类型非常常见。当将箭头函数赋值给已有类型的变量时，TypeScript 可以自动推断参数类型，无需重复声明。",
                codeExample: {
                    code: `const add = (a: number, b: number): number => a + b;

const greet = (name: string): string => \`你好, \${name}\`;

type Predicate<T> = (item: T) => boolean;

function filter<T>(items: T[], predicate: Predicate<T>): T[] {
  return items.filter(predicate);
}

const evenNumbers = filter([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0);
console.log(evenNumbers);

type Comparator<T> = (a: T, b: T) => number;

const sortNumbers: Comparator<number> = (a, b) => a - b;

const numbers = [3, 1, 4, 1, 5, 9];
numbers.sort(sortNumbers);

interface EventEmitter {
  on(event: string, handler: (...args: unknown[]) => void): void;
}

const emitter: EventEmitter = {
  on(event, handler) {
    console.log(\`注册事件: \${event}\`);
  },
};

emitter.on("click", (data) => {
  console.log("点击事件触发", data);
});

const debounce = <T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};`,
                    language: "typescript",
                    description: "箭头函数类型和函数类型表达式的使用",
                },
            },
        ],
    },
    {
        slug: "classes",
        title: "类",
        description: "学习 TypeScript 中类的定义、访问修饰符、抽象类和泛型类的使用。",
        order: 5,
        icon: "Building",
        sections: [
            {
                id: "class-definition",
                title: "类定义与构造函数",
                content: "TypeScript 在 ES6 类的基础上增加了类型注解和访问修饰符。类的属性需要先声明再使用，可以在声明时初始化，也可以在构造函数中赋值。构造函数使用 constructor 关键字定义，参数可以添加类型注解。TypeScript 还支持参数属性，在构造函数参数前添加修饰符可以自动声明并初始化属性。",
                codeExample: {
                    code: `class Person {
  name: string;
  age: number;
  private id: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.id = Math.random().toString(36).substring(2, 10);
  }

  greet(): string {
    return \`你好, 我是\${this.name}, 今年\${this.age}岁\`;
  }
}

const person = new Person("张三", 28);
console.log(person.greet());

class Rectangle {
  constructor(
    public width: number,
    public height: number,
    public color: string = "白色"
  ) {}

  getArea(): number {
    return this.width * this.height;
  }

  describe(): string {
    return \`一个\${this.color}的矩形, 宽\${this.width}高\${this.height}, 面积\${this.getArea()}\`;
  }
}

const rect = new Rectangle(10, 5, "红色");
console.log(rect.describe());

class Counter {
  private count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  getCount(): number {
    return this.count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());`,
                    language: "typescript",
                    description: "类的定义、构造函数和参数属性",
                },
            },
            {
                id: "access-modifiers",
                title: "访问修饰符与存取器",
                content: "TypeScript 提供了三种访问修饰符：public（公开，默认值）、private（私有，仅类内部可访问）和 protected（受保护，类内部和子类可访问）。存取器（getter/setter）可以控制属性的读写行为，在 getter 中计算值，在 setter 中验证值。使用 private 修饰符配合存取器是封装数据的常用模式。",
                codeExample: {
                    code: `class BankAccount {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount < 0) {
      throw new Error("余额不能为负数");
    }
    this._balance = amount;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("存款金额必须大于零");
    }
    this._balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount > this._balance) {
      return false;
    }
    this._balance -= amount;
    return true;
  }
}

const account = new BankAccount();
account.deposit(1000);
account.withdraw(300);
console.log(account.balance);

class Employee {
  constructor(
    public name: string,
    protected salary: number,
    private employeeId: string
  ) {}

  getDetails(): string {
    return \`\${this.name} (ID: \${this.employeeId})\`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, salary: number, employeeId: string, department: string) {
    super(name, salary, employeeId);
    this.department = department;
  }

  getAnnualSalary(): number {
    return this.salary * 12;
  }
}

const manager = new Manager("李经理", 20000, "E001", "技术部");
console.log(manager.getDetails());
console.log(manager.getAnnualSalary());`,
                    language: "typescript",
                    description: "访问修饰符和存取器的使用",
                },
            },
            {
                id: "abstract-classes",
                title: "抽象类与实现接口",
                content: "抽象类使用 abstract 关键字定义，不能直接实例化。抽象方法只有声明没有实现，子类必须实现所有抽象方法。抽象类适合定义一组相关类的公共行为。类可以使用 implements 关键字实现接口，确保类满足接口定义的契约。一个类可以实现多个接口，同时也可以继承另一个类。",
                codeExample: {
                    code: `interface Serializable {
  serialize(): string;
}

interface Comparable<T> {
  compareTo(other: T): number;
}

abstract class Shape implements Serializable {
  constructor(public color: string) {}

  abstract getArea(): number;
  abstract getPerimeter(): number;

  serialize(): string {
    return JSON.stringify({
      color: this.color,
      area: this.getArea(),
      perimeter: this.getPerimeter(),
    });
  }

  describe(): string {
    return \`一个\${this.color}的形状, 面积\${this.getArea().toFixed(2)}, 周长\${this.getPerimeter().toFixed(2)}\`;
  }
}

class Circle extends Shape implements Comparable<Circle> {
  constructor(color: string, public radius: number) {
    super(color);
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  compareTo(other: Circle): number {
    return this.getArea() - other.getArea();
  }
}

class Rectangle extends Shape {
  constructor(color: string, public width: number, public height: number) {
    super(color);
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle("红色", 5);
const rect = new Rectangle("蓝色", 4, 6);
console.log(circle.describe());
console.log(rect.describe());
console.log(circle.serialize());`,
                    language: "typescript",
                    description: "抽象类和接口实现",
                },
            },
            {
                id: "generic-classes",
                title: "泛型类",
                content: "泛型类使用类型参数来创建可复用的类定义。类型参数在类名后的尖括号中声明，可以在类的属性、方法和构造函数中使用。泛型类在实现数据结构（如栈、队列、链表）时特别有用。可以给类型参数设置默认类型和约束条件，使泛型类更加灵活和安全。",
                codeExample: {
                    code: `class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop());
console.log(numberStack.peek());

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}

  toString(): string {
    return \`\${String(this.key)}: \${String(this.value)}\`;
  }
}

const pair = new KeyValuePair("username", "admin");
console.log(pair.toString());

class DataStore<T extends { id: string }> {
  private items: Map<string, T> = new Map();

  add(item: T): void {
    this.items.set(item.id, item);
  }

  get(id: string): T | undefined {
    return this.items.get(id);
  }

  remove(id: string): boolean {
    return this.items.delete(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }
}

interface UserItem {
  id: string;
  name: string;
  email: string;
}

const store = new DataStore<UserItem>();
store.add({ id: "u1", name: "张三", email: "zhang@example.com" });
store.add({ id: "u2", name: "李四", email: "li@example.com" });
console.log(store.get("u1"));`,
                    language: "typescript",
                    description: "泛型类的定义和使用",
                },
            },
        ],
    },
    {
        slug: "generics",
        title: "泛型",
        description: "掌握泛型的核心概念，学习泛型函数、泛型接口、泛型约束以及内置工具类型。",
        order: 6,
        icon: "GitBranch",
        sections: [
            {
                id: "generic-functions",
                title: "泛型函数与泛型接口",
                content: "泛型允许你编写灵活且可复用的代码，同时保持类型安全。泛型函数在函数名后使用尖括号声明类型参数，调用时可以显式指定类型参数，也可以让 TypeScript 自动推断。泛型接口在接口名后声明类型参数，使得接口可以适配不同的数据类型。泛型在处理集合、API 响应、事件系统等场景中非常常见。",
                codeExample: {
                    code: `function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
const str = identity("hello");

function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(first([1, 2, 3]));
console.log(first(["a", "b", "c"]));

function map<T, U>(arr: T[], transform: (item: T) => U): U[] {
  return arr.map(transform);
}

const lengths = map(["TypeScript", "JavaScript", "Python"], (s) => s.length);
console.log(lengths);

interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  timestamp: number;
}

interface User {
  id: string;
  name: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
}

const userResponse: ApiResponse<User> = {
  code: 200,
  message: "成功",
  data: { id: "1", name: "张三" },
  timestamp: Date.now(),
};

const postResponse: ApiResponse<Post[]> = {
  code: 200,
  message: "成功",
  data: [
    { id: "p1", title: "泛型入门", content: "..." },
    { id: "p2", title: "高级类型", content: "..." },
  ],
  timestamp: Date.now(),
};

interface Repository<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(item: Omit<T, "id">): Promise<T>;
  update(id: string, item: Partial<T>): Promise<T>;
  delete(id: string): Promise<boolean>;
}`,
                    language: "typescript",
                    description: "泛型函数和泛型接口的定义",
                },
            },
            {
                id: "generic-constraints",
                title: "泛型约束与 keyof",
                content: "泛型约束使用 extends 关键字限制类型参数的范围，确保类型参数满足特定条件。常见的约束包括要求类型参数具有某些属性、是某个类型的子类型等。keyof 操作符用于获取类型的所有属性名的联合类型，常与泛型约束配合使用，实现类型安全的属性访问。这在编写通用工具函数时非常有用。",
                codeExample: {
                    code: `interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(value: T): number {
  return value.length;
}

console.log(getLength("hello"));
console.log(getLength([1, 2, 3]));
// console.log(getLength(123)); // 错误: number 没有 length 属性

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "张三", age: 28, city: "北京" };
const nameValue = getProperty(person, "name");
const ageValue = getProperty(person, "age");
// getProperty(person, "email"); // 错误: "email" 不是 person 的属性

function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const users = [
  { name: "张三", age: 28 },
  { name: "李四", age: 32 },
  { name: "王五", age: 25 },
];

console.log(pluck(users, "name"));
console.log(pluck(users, "age"));

function assign<T extends object, U extends object>(target: T, source: U): T & U {
  return Object.assign(target, source);
}

const merged = assign({ name: "张三" }, { age: 28 });

class EventEmitter<T extends Record<string, unknown>> {
  private listeners: { [K in keyof T]?: Array<(data: T[K]) => void> } = {};

  on<K extends keyof T>(event: K, callback: (data: T[K]) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(callback);
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    this.listeners[event]?.forEach((cb) => cb(data));
  }
}`,
                    language: "typescript",
                    description: "泛型约束和 keyof 操作符的使用",
                },
            },
            {
                id: "utility-types",
                title: "内置工具类型",
                content: "TypeScript 内置了许多实用的工具类型，它们基于泛型实现，可以快速转换和组合类型。Partial 将所有属性变为可选，Required 将所有属性变为必需，Pick 从类型中选取部分属性，Omit 从类型中排除部分属性。此外还有 Record、Exclude、Extract、ReturnType 等常用工具类型。掌握这些工具类型可以大幅减少重复的类型定义。",
                codeExample: {
                    code: `interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  role: "admin" | "user" | "guest";
}

type PartialUser = Partial<User>;
type RequiredUser = Required<PartialUser>;
type UserBasicInfo = Pick<User, "id" | "name">;
type UserWithoutAge = Omit<User, "age">;

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const originalUser: User = {
  id: "u1",
  name: "张三",
  email: "zhang@example.com",
  age: 28,
  role: "user",
};

const updatedUser = updateUser(originalUser, { age: 29, role: "admin" });

type UserRole = Record<string, { label: string; level: number }>;

const roles: UserRole = {
  admin: { label: "管理员", level: 3 },
  user: { label: "普通用户", level: 1 },
  guest: { label: "访客", level: 0 },
};

type StringOrNumber = string | number;
type OnlyString = Exclude<StringOrNumber, number>;
type OnlyNumber = Extract<StringOrNumber, number>;

function getUserInfo(): Promise<User> {
  return Promise.resolve(originalUser);
}

type UserInfo = ReturnType<typeof getUserInfo>;
type ResolvedUser = Awaited<ReturnType<typeof getUserInfo>>;

type UserKeys = keyof User;
type UserRoleValues = User["role"];

type ReadonlyUser = Readonly<User>;
const frozenUser: ReadonlyUser = { ...originalUser };
// frozenUser.name = "新名字"; // 错误: 只读属性`,
                    language: "typescript",
                    description: "Partial、Required、Pick、Omit 等内置工具类型",
                },
            },
            {
                id: "custom-utility-types",
                title: "自定义工具类型",
                content: "除了内置工具类型，你还可以根据项目需求自定义工具类型。通过组合条件类型、映射类型和模板字面量类型，可以实现强大的类型转换。常见的自定义工具类型包括 DeepPartial（深层可选）、DeepReadonly（深层只读）、ValueOf（获取值类型）等。理解这些类型的实现原理有助于你编写更灵活的类型定义。",
                codeExample: {
                    code: `type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface Config {
  database: {
    host: string;
    port: number;
    credentials: {
      username: string;
      password: string;
    };
  };
  cache: {
    enabled: boolean;
    ttl: number;
  };
}

type PartialConfig = DeepPartial<Config>;

const config: PartialConfig = {
  database: {
    credentials: {
      username: "admin",
    },
  },
};

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type ValueOf<T> = T[keyof T];

interface StatusMap {
  active: "激活";
  inactive: "未激活";
  pending: "待审核";
}

type StatusLabel = ValueOf<StatusMap>;

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type OptionalToRequired<T> = {
  [P in keyof T]-?: T[P];
};

type NullableToOptional<T> = {
  [P in keyof T as undefined extends T[P] ? P : never]?: Exclude<T[P], undefined>;
} & {
  [P in keyof T as undefined extends T[P] ? never : P]: T[P];
};

interface SearchParams {
  query: string;
  page?: number;
  filters?: string[];
  sort?: string;
}

type CleanSearchParams = NullableToOptional<SearchParams>;`,
                    language: "typescript",
                    description: "自定义工具类型的实现",
                },
            },
        ],
    },
    {
        slug: "advanced-types",
        title: "高级类型",
        description: "探索 TypeScript 的高级类型系统，包括联合类型、交叉类型、条件类型、映射类型和 infer 关键字。",
        order: 7,
        icon: "Sparkles",
        sections: [
            {
                id: "union-intersection",
                title: "联合类型与交叉类型",
                content: "联合类型使用竖线连接多个类型，表示值可以是其中任意一种。交叉类型使用 & 连接多个类型，表示值同时满足所有类型。联合类型常用于处理多种可能的输入，交叉类型常用于组合多个类型的属性。类型收窄是联合类型的关键技巧，通过类型守卫将联合类型缩小到具体类型。",
                codeExample: {
                    code: `type SuccessResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  error: { code: number; message: string };
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse): string {
  if (response.status === "success") {
    return \`数据: \${response.data}\`;
  } else {
    return \`错误 \${response.error.code}: \${response.error.message}\`;
  }
}

type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type SoftDeletable = {
  deletedAt: Date | null;
  isDeleted: boolean;
};

type Auditable = {
  createdBy: string;
  updatedBy: string;
};

type FullEntity = Timestamped & SoftDeletable & Auditable;

interface ArticleBase {
  id: string;
  title: string;
  content: string;
}

type Article = ArticleBase & FullEntity;

const article: Article = {
  id: "a1",
  title: "TypeScript 高级类型",
  content: "联合类型与交叉类型...",
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
  isDeleted: false,
  createdBy: "admin",
  updatedBy: "admin",
};

type NetworkState =
  | { state: "disconnected" }
  | { state: "connecting"; retryCount: number }
  | { state: "connected"; address: string; port: number };

function logNetworkState(network: NetworkState): string {
  switch (network.state) {
    case "disconnected":
      return "网络已断开";
    case "connecting":
      return \`正在连接, 重试\${network.retryCount}次\`;
    case "connected":
      return \`已连接到 \${network.address}:\${network.port}\`;
  }
}`,
                    language: "typescript",
                    description: "联合类型和交叉类型的实际应用",
                },
            },
            {
                id: "conditional-types",
                title: "条件类型",
                content: "条件类型类似于三元表达式，根据类型条件选择不同的类型结果。语法为 T extends U ? X : Y。当 T 是 U 的子类型时结果为 X，否则为 Y。分布式条件类型在联合类型上会自动分发，即 A | B extends U ? X : Y 会被拆分为 (A extends U ? X : Y) | (B extends U ? X : Y)。条件类型在创建灵活的工具类型时非常强大。",
                codeExample: {
                    code: `type IsString<T> = T extends string ? true : false;

type A = IsString<string>;
type B = IsString<number>;

type NonNullable<T> = T extends null | undefined ? never : T;

type Flatten<T> = T extends Array<infer U> ? U : T;

type FlatString = Flatten<string[]>;
type FlatNumber = Flatten<number>;

type FunctionReturnType<T> = T extends (...args: unknown[]) => infer R ? R : never;

function getString(): string {
  return "hello";
}

function getNumber(): number {
  return 42;
}

type StringReturn = FunctionReturnType<typeof getString>;
type NumberReturn = FunctionReturnType<typeof getNumber>;

type ToArray<T> = T extends unknown[] ? T : T[];

type ArrayOrString = ToArray<string[]>;
type ArrayOrNumber = ToArray<number>;

type ExtractString<T> = T extends string ? T : never;

type StringsOnly = ExtractString<string | number | boolean>;

type UnwrapPromise<T> = T extends Promise<infer U> ? UnwrapPromise<U> : T;

type NestedPromise = UnwrapPromise<Promise<Promise<string>>>;

interface ApiResult<T> {
  status: number;
  data: T extends Error ? never : T;
  error: T extends Error ? T : never;
}

type SuccessResult = ApiResult<{ id: string; name: string }>;
type ErrorResult = ApiResult<Error>;`,
                    language: "typescript",
                    description: "条件类型的定义和分布式条件类型",
                },
            },
            {
                id: "mapped-types",
                title: "映射类型与模板字面量类型",
                content: "映射类型基于旧类型创建新类型，通过遍历属性名集合来生成新的属性定义。语法为 { [P in K]: T }，其中 K 通常是 keyof 某个类型。可以通过 +、- 修饰符添加或移除 readonly 和可选标记。模板字面量类型使用反引号语法，可以在类型层面进行字符串拼接，结合映射类型可以创建非常灵活的类型定义。",
                codeExample: {
                    code: `type Stringify<T> = {
  [P in keyof T]: string;
};

interface Point {
  x: number;
  y: number;
}

type StringPoint = Stringify<Point>;

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type RequiredFields<T> = {
  [P in keyof T]-?: T[P];
};

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonGetters = Getters<Person>;

const personGetters: PersonGetters = {
  getName: () => "张三",
  getAge: () => 28,
  getEmail: () => "zhang@example.com",
};

type EventName<T extends string> = \`on\${Capitalize<T>}\`;

type ClickEvent = EventName<"click">;
type FocusEvent = EventName<"focus">;

type RemovePrefix<T, P extends string> = T extends \`\${P}\${infer Rest}\` ? Rest : T;

type WithoutOn = RemovePrefix<"onClick", "on">;

type CSSProperty = "margin" | "padding";
type CSSDirection = "top" | "right" | "bottom" | "left";
type CSSRule = \`\${CSSProperty}-\${CSSDirection}\`;

const rule: CSSRule = "margin-top";

type ValidationRule<T> = {
  [P in keyof T]: {
    required: boolean;
    validator?: (value: T[P]) => boolean;
    message?: string;
  };
};

type UserValidation = ValidationRule<Person>;`,
                    language: "typescript",
                    description: "映射类型和模板字面量类型",
                },
            },
            {
                id: "infer-keyword",
                title: "infer 关键字与类型推导",
                content: "infer 关键字用于在条件类型中声明一个待推断的类型变量。它只能出现在 extends 子句中。TypeScript 会根据实际类型自动推断 infer 声明的变量。常见的应用包括提取函数的返回值类型、参数类型、Promise 的值类型等。infer 在实现递归类型和复杂类型转换时是不可或缺的工具。",
                codeExample: {
                    code: `type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function fetchUser(id: string): Promise<{ id: string; name: string }> {
  return Promise.resolve({ id, name: "张三" });
}

type FetchUserReturn = ReturnTypeOf<typeof fetchUser>;

type ParametersOf<T> = T extends (...args: infer P) => any ? P : never;

function createPost(title: string, content: string, tags: string[]): void {}

type CreatePostParams = ParametersOf<typeof createPost>;

type UnwrapArray<T> = T extends (infer U)[] ? U : T;

type Item = UnwrapArray<string[]>;
type NotArray = UnwrapArray<number>;

type Head<T extends unknown[]> = T extends [infer H, ...unknown[]] ? H : never;

type Tail<T extends unknown[]> = T extends [unknown, ...infer Rest] ? Rest : never;

type First = Head<[string, number, boolean]>;
type Rest = Tail<[string, number, boolean]>;

type ExtractPromiseValue<T> = T extends Promise<infer V> ? V : T;

type PromiseValue = ExtractPromiseValue<Promise<string[]>>;

type ParseRoute<S extends string> =
  S extends \`\${infer Start}/\${infer Rest}\`
    ? Start | ParseRoute<Rest>
    : S;

type RouteParts = ParseRoute<"users/profile/settings">;

type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

type ElementOf<T> = T extends ReadonlyArray<infer E> ? E : never;

type StringElement = ElementOf<readonly string[]>;

type ConstructorParams<T extends new (...args: any[]) => any> =
  T extends new (...args: infer P) => any ? P : never;

class DatabaseConnection {
  constructor(host: string, port: number, options: { ssl: boolean }) {}
}

type DbParams = ConstructorParams<typeof DatabaseConnection>;`,
                    language: "typescript",
                    description: "infer 关键字的各种应用场景",
                },
            },
        ],
    },
    {
        slug: "modules",
        title: "模块与命名空间",
        description: "了解 TypeScript 的模块系统、命名空间和声明文件的使用方法。",
        order: 8,
        icon: "Package",
        sections: [
            {
                id: "import-export",
                title: "import 与 export",
                content: "TypeScript 使用 ES 模块系统，通过 export 导出和 import 导入来组织代码。可以导出变量、函数、类、接口和类型别名。默认导出使用 export default，每个模块只能有一个默认导出。命名导出可以有多个，使用花括号导入。TypeScript 还支持类型专用导入导出，使用 type 修饰符明确表示只导入类型信息。",
                codeExample: {
                    code: `// logger.ts
export enum LogLevel {
  Debug = 0,
  Info = 1,
  Warn = 2,
  Error = 3,
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
}

export function createLogger(minLevel: LogLevel = LogLevel.Info) {
  const entries: LogEntry[] = [];

  return {
    log(level: LogLevel, message: string): void {
      if (level >= minLevel) {
        entries.push({ level, message, timestamp: new Date() });
      }
    },
    getEntries(): readonly LogEntry[] {
      return Object.freeze([...entries]);
    },
  };
}

export default createLogger;

// app.ts
// import createLogger, { LogLevel, type LogEntry } from "./logger";

// const logger = createLogger(LogLevel.Debug);
// logger.log(LogLevel.Info, "应用启动");

// 重新导出
// export { LogLevel, LogEntry } from "./logger";
// export * from "./logger";

// 类型专用导入
// import type { LogEntry } from "./logger";`,
                    language: "typescript",
                    description: "ES 模块的导出和导入方式",
                },
            },
            {
                id: "namespaces",
                title: "命名空间",
                content: "命名空间使用 namespace 关键字定义，用于组织代码和避免命名冲突。在 ES 模块出现之前，命名空间是 TypeScript 中主要的代码组织方式。现在推荐使用 ES 模块，但命名空间在迁移旧代码和定义全局类型时仍有用武之地。命名空间支持嵌套，可以使用三斜线指令引用其他文件中的命名空间。",
                codeExample: {
                    code: `namespace Validation {
  export interface Validator<T> {
    validate(value: T): boolean;
    message: string;
  }

  export class StringValidator implements Validator<string> {
    message: string;

    constructor(message: string = "无效的字符串") {
      this.message = message;
    }

    validate(value: string): boolean {
      return value.trim().length > 0;
    }
  }

  export class NumberValidator implements Validator<number> {
    message: string;
    private min: number;
    private max: number;

    constructor(
      min: number = Number.MIN_SAFE_INTEGER,
      max: number = Number.MAX_SAFE_INTEGER,
      message: string = "无效的数字"
    ) {
      this.min = min;
      this.max = max;
      this.message = message;
    }

    validate(value: number): boolean {
      return value >= this.min && value <= this.max;
    }
  }

  export class EmailValidator implements Validator<string> {
    message: string = "无效的邮箱地址";
    private pattern: RegExp = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    validate(value: string): boolean {
      return this.pattern.test(value);
    }
  }

  export function validateAll<T>(value: T, validators: Validator<T>[]): string[] {
    return validators.filter((v) => !v.validate(value)).map((v) => v.message);
  }
}

const emailErrors = Validation.validateAll("test@example.com", [
  new Validation.StringValidator("邮箱不能为空"),
  new Validation.EmailValidator(),
]);

const ageErrors = Validation.validateAll(25, [
  new Validation.NumberValidator(0, 150, "年龄必须在0到150之间"),
]);`,
                    language: "typescript",
                    description: "命名空间的定义和使用",
                },
            },
            {
                id: "declaration-files",
                title: "声明文件",
                content: "声明文件以 .d.ts 为扩展名，用于描述 JavaScript 代码的类型信息，而不包含实际的实现代码。当你使用没有类型定义的第三方 JavaScript 库时，需要声明文件来获得类型提示。可以通过 DefinitelyTyped 仓库安装社区维护的声明文件（@types/包名），也可以自己编写声明文件。declare 关键字用于声明全局变量、函数、类和模块。",
                codeExample: {
                    code: `// 为没有类型的 JavaScript 库编写声明文件
// myLibrary.d.ts

declare namespace MyLib {
  interface Options {
    theme: "light" | "dark";
    locale: string;
    debug?: boolean;
  }

  interface Instance {
    render(container: HTMLElement): void;
    destroy(): void;
    on(event: string, callback: (...args: unknown[]) => void): void;
    off(event: string, callback: (...args: unknown[]) => void): void;
  }
}

declare function MyLib(options: MyLib.Options): MyLib.Instance;

declare module "untyped-library" {
  export function init(config: Record<string, unknown>): void;
  export const version: string;
  export default class Client {
    constructor(baseUrl: string);
    request(path: string, options?: RequestInit): Promise<unknown>;
  }
}

// 全局变量声明
declare const __APP_VERSION__: string;
declare const __DEV__: boolean;

// 扩展全局接口
declare global {
  interface Window {
    myApp: {
      version: string;
      init(): void;
    };
  }
}

// 在代码中使用
// const app = MyLib({ theme: "dark", locale: "zh-CN" });
// app.render(document.getElementById("root")!);

// 安装社区类型定义
// npm install -D @types/lodash
// npm install -D @types/node`,
                    language: "typescript",
                    description: "声明文件的编写和使用",
                },
            },
            {
                id: "module-configuration",
                title: "模块解析与配置",
                content: "TypeScript 支持多种模块解析策略，包括 Node.js 经典解析、Node 解析和 Bundler 解析。moduleResolution 配置决定了 TypeScript 如何查找模块。paths 配置可以设置路径别名，baseUrl 设置模块解析的基础路径。了解模块解析机制有助于解决导入路径问题和配置项目结构。",
                codeExample: {
                    code: `{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"],
      "@types/*": ["src/types/*"]
    },
    "rootDirs": ["src", "generated"],
    "typeRoots": ["./node_modules/@types", "./src/types"],
    "types": ["node", "vitest/globals"],
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}

// 使用路径别名导入
// import { Button } from "@components/Button";
// import { formatDate } from "@utils/date";
// import { User } from "@types/user";

// 模块导出模式
// constants.ts
export const APP_NAME = "TypeScript 教程";
export const MAX_RETRIES = 3;

// index.ts - 桶文件（barrel file）
// export * from "./constants";
// export * from "./types";
// export * from "./utils";

// 动态导入
// const module = await import("./heavy-module");

// 类型只导入
// import type { Config } from "./config";

// 命名空间合并模块
// export namespace Database {
//   export interface Config {
//     host: string;
//     port: number;
//   }
// }
// export class Database {
//   constructor(private config: Database.Config) {}
// }`,
                    language: "typescript",
                    description: "模块解析策略和路径别名配置",
                },
            },
        ],
    },
];
