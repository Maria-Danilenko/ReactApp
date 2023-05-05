import React, { useState } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 25%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

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
      <InputWrapper>
        <Label htmlFor="price-in-uah">Ціна в гривнях</Label>
        <Input type="number" id="price-in-uah" value={localPriceInUAH} onChange={handleUAHChange} />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="price-in-usd">Ціна в доларах</Label>
        <Input type="number" id="price-in-usd" value={localPriceInUSD} onChange={handleUSDChange} />
      </InputWrapper>
    </div>
  );
}

export default PriceSync;