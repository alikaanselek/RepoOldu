// SADECE BU SATIRI DEĞİŞTİRİN
type LastParameter<T> = T extends (...args: infer P) => any
  ? P extends [...infer _Rest, infer L]
    ? L
    : never
  : never;

// ---- KOD BLOKU (DOKUNMAYIN) ----
function combine(a: number, b: string, c: boolean) {}
function print(message: string) {}

type LastOfCombine = LastParameter<typeof combine>; // boolean
type LastOfPrint = LastParameter<typeof print>;     // string

const val11: LastOfCombine = true;
const val12: LastOfPrint = "Hello TypeScript!";

// @ts-expect-error - 'LastOfCombine' boolean olmalı
const val3: LastOfCombine = "string";

console.log("Soru 18 Basarili!", val11, val12);
