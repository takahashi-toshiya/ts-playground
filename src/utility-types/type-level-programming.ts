// Type-level programming examples with utility types

// 1. Object key manipulation
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// Pick specific keys
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

// Omit sensitive data
type SafeUser = Omit<User, 'password'>;

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<PartialUser>;

// 2. Advanced key manipulation
type UserKeys = keyof User; // "id" | "name" | "email" | "password"

// Create a type that maps all values to boolean
type UserPermissions = Record<keyof User, boolean>;

// 3. Conditional types example
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// 4. Template literal types
type EventName<T extends string> = `on${Capitalize<T>}`;

type ClickEvent = EventName<'click'>; // "onClick"
type HoverEvent = EventName<'hover'>; // "onHover"

// 5. Recursive type example - Deep readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type ReadonlyUser = DeepReadonly<{
  profile: {
    name: string;
    settings: {
      theme: string;
    };
  };
}>;

// Usage examples
const publicUser: PublicUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

const permissions: UserPermissions = {
  id: true,
  name: true,
  email: false,
  password: false
};

console.log("Type-level programming examples loaded!");
console.log("Public user:", publicUser);
console.log("Permissions:", permissions);