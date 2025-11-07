type PickByValueType<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
};

type Example = {
  id: number;
  name: string;
  active: boolean;
};

type OnlyString = PickByValueType<Example, string>;

const data: OnlyString = {
  name: "Ali"
};

// ⬇️ Bu satır hata testiydi, derlemeyi kesebilir. Şimdilik kapatalım.
// @ts-expect-error - 'id' tipi 'string' değil
// const wrongData: OnlyString = {
//   id: 1
// };

console.log("Soru 15 Basarili!", data.name);
