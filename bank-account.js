export class BankAccount {
  #isOpen;
  #balance;
  
  constructor() {
    this.#isOpen = false;
  }

  open() {
    if (!this.#isOpen) {
      this.#isOpen = true;
      this.#balance = 0
    } else {
      throw new ValueError
    }
  }

  close() {
    if (this.#isOpen) {
      this.#isOpen = false;
    } else {
      throw new ValueError
    }
  }

  deposit(value) {
    if (
      this.#isOpen &&
      value > 0
    ) {
      this.#balance += value;
    } else {
      throw new ValueError
    }
  }

  withdraw(value) {
    if (
      this.#isOpen &&
      this.#balance >= value &&
      value > 0
    ) {
      this.#balance -= value;
    } else {
      throw new ValueError
    }
  }

  get balance() {
    if (this.#isOpen) {
      return this.#balance;
    }
    throw new ValueError
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}