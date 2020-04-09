// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

const CID_UNITS_VALUE = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

const INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS";
const CLOSED = "CLOSED";
const OPEN = "OPEN";

const checkCashRegister = (price, cash, cid) => {
  const cidChange = [];
  const cidSum = cid
    .map((unit) => +(CID_UNITS_VALUE[unit[0]] * unit[1]).toFixed(2))
    .reduce((acc, curr) => acc + curr);
  let change = cash - price;

  if (cidSum > change) {
    let i = cid.length - 1;
    while (i >= 0) {
      const cidUnitName = cid[i][0];
      const cidUnitValue = CID_UNITS_VALUE[cidUnitName];
      const maxAmount = change / cidUnitValue;
      if (maxAmount > 1) {
        const cidAmount = parseInt(maxAmount) * cidUnitValue - cid[i][1];
        if (cidAmount > 0) {
          const cidUnit = parseInt(maxAmount) * cidUnitValue - cidAmount;
          cidChange.push([cidUnitName, cidUnit]);
          change = (change - cidUnit).toFixed(2);
        } else {
          cidChange.push([cidUnitName, parseInt(maxAmount) * cidUnitValue]);
          change = (change - parseInt(maxAmount) * cidUnitValue).toFixed(2);
        }
      }
      i--;
    }

    const cidChangeSum = cidChange
      .map((unit) => unit[1])
      .reduce((acc, curr) => acc + curr)
      .toFixed(2);
    if (cidChangeSum < change) {
      return { status: INSUFFICIENT_FUNDS, change: [] };
    }
  } else if (cid.map((unit) => unit[1]).includes(change)) {
    return { status: CLOSED, change: cid };
  } else {
    return { status: INSUFFICIENT_FUNDS, change: [] };
  }

  return { status: OPEN, change: cidChange };
};

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
