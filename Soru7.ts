type Kullanici = {
  id: number;
  name: string;
  email: string;
};

function updateuser(user: Kullanici, updates: Partial<Kullanici>): Readonly<Kullanici> {
  return { ...user, ...updates };
}

const kullanici: Kullanici = { id: 1, name: "Ali", email: "ali@mail.com" };
const updates = updateuser(kullanici, { name: "Baran", email: "baran.yeni@mail.com" });

console.log(updates);
