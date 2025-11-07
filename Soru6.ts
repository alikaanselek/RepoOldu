class MemoryCache<T> {
  private cache: Map<string, T> = new Map();

  set(key: string, value: T): void {
    this.cache.set(key, value);
  }

  get(key: string): T | undefined {
    return this.cache.get(key);
  }

  clear(): void {
    this.cache.clear();
  }
}

const cache = new MemoryCache<number>();
cache.set("a", 100);
console.log(cache.get("a")); // 100
cache.clear();
console.log(cache.get("a")); // undefined
