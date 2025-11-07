type kullanici = {
  id: number;
  name: string;
  email: string;
};

const users: kullanici[] = [
  { id: 1, name: "Ali", email: "ali@mail.com" },
  { id: 2, name: "Ayşe", email: "ayse@mail.com" },
  { id: 3, name: "Ali", email: "ali2@mail.com" },
];

// 🔹 Fonksiyon aşırı yüklemeleri
function search(id: number): kullanici;
function search(name: string): kullanici[];

// 🔹 Tek implementasyon
function search(param: number | string): kullanici | kullanici[] {
  if (typeof param === "number") {
    return users.find(u => u.id === param)!;
  } else {
    return users.filter(u => u.name === param);
  }
}

// 🔹 Ekran çıktısı (hocanın PasteCode bağlantısındakiyle aynı)
console.log(search(1));
console.log(search("Ali"));
