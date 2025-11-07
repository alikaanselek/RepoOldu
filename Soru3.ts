class Logger {
  private logHistory: string[] = [];

  log(message: string): void {
    this.logHistory.push(message);
    console.log(`Log: ${message}`);
  }

  showHistory(): void {
    console.log(this.logHistory.join(", "));
  }
}

const logger = new Logger();
logger.log("Başlatılıyor...");
logger.log("Sistem çalışıyor.");
logger.showHistory();
