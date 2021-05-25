
import wallets from "../public/data/wallets.json";

export function getAll(TOP = 20) {
  const top = {
    
    wallets: Object.keys(wallets).slice(0, TOP - 1),
  };
  const others = {
   
    wallets: Object.keys(wallets).slice(TOP - 1),
  };
  const data = {};
  top.wallets.forEach((key) => (data[key] = wallets[key]));
  
  others.wallets.forEach((key) => (data[key] = wallets[key]));

  return data;
}

export function getWallets() {
  return wallets;
}

