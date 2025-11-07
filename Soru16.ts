// SADECE BU SATIRLARI DEĞİŞTİRİN
type Brand<K, T> = K & { __brand: T };
type UserID = Brand<string, "UserID">;
type PostID = Brand<string, "PostID">;

// ---- KOD BLOKU (DOKUNMAYIN) ----
function logID(id: string) { console.log(id); }

let userID = "user-123" as UserID;
let postID = "post-456" as PostID;

logID(userID); // String olarak kabul etmeli
logID(postID); // String olarak kabul etmeli

// @ts-expect-error - Bu atamanın HATA vermesi beklenir
userID = postID;

console.log("Soru 16 Başarılı!");
