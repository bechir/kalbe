import { Text } from "components";
import React from "react";

type ExchangeRateProps = {
  from: string;
  to: string;
  rate: number;
};

const ExchangeRate = ({ from, to, rate }: ExchangeRateProps) => {
  return (
    <React.Fragment>
      <Text variant="currency" color="muted">
        Taux de conversion
      </Text>
      <Text variant="currency">
        1 {from} = {rate} {to}{" "}
        <Text variant="small" color="success" fontFamily="ZTGathaMedium">
          • Mise à jour hier
        </Text>
      </Text>
    </React.Fragment>
  );
};

export default ExchangeRate;
