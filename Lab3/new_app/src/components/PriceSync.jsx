import React, { useState } from 'react';

function PriceSync(props) {
    const { priceInUAH, priceInUSD } = props;
    
  const [localPriceInUAH, setLocalPriceInUAH] = useState(priceInUAH);
  const [localPriceInUSD, setLocalPriceInUSD] = useState(priceInUSD);

  const exchangeRate = 36.57;
  const convertToUSD = (value) => (value / exchangeRate).toFixed(2);

  function handleUAHChange(event) {
    const value = parseFloat(event.target.value);
    setLocalPriceInUAH(value);
    setLocalPriceInUSD(convertToUSD(value));
  }

  function handleUSDChange(event) {
    const value = parseFloat(event.target.value);
    setLocalPriceInUSD(value);
    setLocalPriceInUAH((value * exchangeRate).toFixed(2));
  }

  return (
    <div>
      <p><input type="number" id="price-in-uah" value={localPriceInUAH} onChange={handleUAHChange} className="w-25" /> ₴</p>
      <p><input type="number" id="price-in-usd" value={localPriceInUSD} onChange={handleUSDChange} className="w-25"  /> $</p>
    </div>
  );
}
export default PriceSync;