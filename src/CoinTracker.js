import React from "react";
import { useState, useEffect } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [price, setPrice] = useState(0);
  const [myDollar, setMyDollar] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") // api 돈 내고 쓰란다...
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        console.log(coins);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [coins]);

  const onChangeMyDollar = (event) => {
    setMyDollar(event.target.value);
  };

  const onChangeCoin = (event) => {
    const selectedCoinSymbol = event.target.value;
    setSelectedCoin(selectedCoinSymbol);
    const selectedCoinPrice = coins.find(
      (coin) => coin.symbol === selectedCoinSymbol
    ).quotes.USD.price;
    setPrice(selectedCoinPrice);
  };

  useEffect(() => {
    setResult(myDollar / price);
  }, [myDollar, price]);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <input
            value={myDollar}
            type="number"
            placeholder="how much do you have?"
            onChange={onChangeMyDollar}
          ></input>
          <hr />
          <select value={selectedCoin} onChange={onChangeCoin}>
            {coins.map((coin) => {
              return (
                <option key={coin.rank} value={coin.symbol}>
                  {coin.name} ({coin.symbol}: {coin.quotes.USD.price})
                </option>
              );
            })}
          </select>
          <div>
            You can have {result} {selectedCoin} coins.
          </div>
        </>
      )}
    </div>
  );
}

export default CoinTracker;
