// Soru 1: Jenerik Dizi Birleştirme (mergeArrays)
// Açıklama: İki farklı tipte diziyi alıp tek bir dizide birleştirecek şekilde implemente edin.

function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

// Test kodu (PDF’teki örnek çıktıya denk gelir)
const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];

console.log(mergeArrays(numbers, letters));
// Beklenen çıktı: [1, 2, 3, 'a', 'b', 'c']
