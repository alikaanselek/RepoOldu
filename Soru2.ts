// Soru 2: Tip Koruyucuları (Type Guards)
// Görev: Car ve Truck sınıflarını tanımlayıp Vehicle tipi altında topla.
// useVehicle fonksiyonu if içinde "in" operatörüyle hangi tip olduğunu ayırır.

class Car {
  constructor(public brand: string, public doors: number) {}
  drive() {
    console.log(`${this.brand} is driving with ${this.doors} doors.`);
  }
}

class Truck {
  constructor(public brand: string, public capacity: number) {}
  loadCargo(amount: number) {
    console.log(`${this.brand} is loading ${amount} tons of cargo.`);
  }
}

// Hem Car hem Truck tiplerini temsil eden birleşik tip
type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  // in operatörünü kullanarak tip koruyucu
  if ('loadCargo' in vehicle) {
    // Vehicle bir Truck’tır
    vehicle.loadCargo(10);
  } else {
    // Vehicle bir Car’dır
    vehicle.drive();
  }
}

// Testler
const car = new Car('Toyota', 4);
const truck = new Truck('Volvo', 12);

useVehicle(car);   // Beklenen çıktı: "Toyota is driving with 4 doors."
useVehicle(truck); // Beklenen çıktı: "Volvo is loading 10 tons of cargo."
