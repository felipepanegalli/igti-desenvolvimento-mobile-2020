'use strict'; //O javascript acusa mais errros

let url = 'http://localhost:3090/api/accounts/';

window.addEventListener('load', () => {
  getAllAccounts();
  // question01();
  // question02();
  // question03();
  // question04();
  // question05();
  // question10();
  question11();
});

const getAllAccounts = async () => {
  let res = await fetch(url);
  let data = await res.json();
  return data;
};

const question01 = async () => {
  let accounts = await getAllAccounts();
  const accountSum = accounts.reduce((accumulator, current) => {
    return accumulator + current.balance;
  }, 0);
  console.log(accountSum);
  return accountSum;
};

const question02 = async () => {
  let accounts = await getAllAccounts();
  let count = 0;
  const accountSum = accounts.map((acc) => {
    if (acc.balance > 100) {
      count++;
    }
    return count;
  });
  console.log(count);
  return accountSum;
};

const question03 = async () => {
  let accounts = await getAllAccounts();
  const accountSum = accounts.map((acc) => {
    if (acc.balance > 100 && acc.agencia === 33) {
      count++;
    }
    return count;
  });
  console.log(count);
  return accountSum;
};

const question04 = async () => {
  let accounts = await getAllAccounts();
  const sort = accounts.sort((a, b) => {
    return b.balance - a.balance;
  });
  console.log(sort);
  return sort;
};

const question05 = async () => {
  let accounts = await getAllAccounts();
  const sort = accounts.sort((a, b) => {
    return a.balance - b.balance;
  });
  console.log(sort);
  return sort;
};

const question10 = async () => {
  let accounts = await getAllAccounts();
  const data = accounts.filter((account) => {
    return account.agencia == 47;
  });
  console.log(data);
  return data;
};

const question11 = async () => {
  let accounts = await getAllAccounts();
  const data = accounts
    .filter((account) => {
      return account.agencia == 47;
    })
    .filter((account) => {
      return account.name.includes('Maria');
    });

  console.log(data);
  return data;
};
