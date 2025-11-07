// SADECE BU SATIRI DEĞİŞTİRİN
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// ---- KOD BLOKU (DOKUNMAYIN) ----
type User = {
  id: number;
  profile: {
    name: string;
    address: {
      city: string;
    };
  };
};

const user: DeepReadonly<User> = {
  id: 1,
  profile: {
    name: "Ali",
    address: { city: "İstanbul" },
  },
};

// @ts-expect-error - Bu satırın HATA vermesi beklenir
user.profile.name = "Veli";

console.log("Soru 14 Basarili!", user.profile.address.city);
