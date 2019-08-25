'use strict';

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзаsкция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    const transaction = {};

    transaction.amount = amount;
    transaction.type = Transaction.DEPOSIT;
    transaction.id = this.transactions.length;
    account.addTransaction(transaction);
    this.balance += amount;
    return this.balance;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance > amount) {
      const transaction = {};

      transaction.amount = amount;
      transaction.type = Transaction.WITHDRAW;
      transaction.id = this.transactions.length;
      account.addTransaction(transaction);
      this.balance -= amount;
      return this.balance;
      s;
    } else {
      console.log('Знаяти таку суму неможливо! Недостатньо коштів!');
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return 'Залишок: ' + this.balance + 'грн';
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const object of this.transactions) {
      if (id === object.id) {
        return object;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

account.deposit(200);
account.withdraw(100);
account.deposit(50);
console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal('deposit'));
