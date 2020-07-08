import React from "react";
import NumberFormat from "react-number-format";

export function TextMaskCustomMoney(props) {
  const { inputRef, onChange, format, value, decimalScale, ...other } = props;
  return (
    <NumberFormat
      {...other}
      format={bigNumberCurrencyFormatterBr}
      value={value}
      getInputRef={inputRef}
      onValueChange={(values) => {
        let val = values.value;
        if (values.floatValue < 10) {
          val = val.padStart(2, "0");
        }
        let ini = val.substring(0, val.length - 2);
        let fim = val.substring(val.length - 2, val.length);
        let formatado = ini + "," + fim;
        onChange({
          target: {
            id: props.id,
            name: props.name,
            value: formatado,
          },
        });
      }}
    />
  );
}

export function bigNumberCurrencyFormatterBr(value) {
  if (!Number(value)) return "";

  const ammount = value.replace(/^([0]{1,2})/g, "").replace(/[\D]+/g, "");

  const comma = ammount.replace(/([0-9]{1,2})$/g, ",$1");

  const moeda = `${comma.startsWith(",") ? "0" : ""}${
    comma.startsWith("0,") ? "0" : ""
  }${comma}`;

  const [number, decimals] = moeda.split(",");

  const a = number
    .split("")
    .sort(() => -1)
    .map((inteiro, index) => ((index + 1) % 3 === 0 ? `.${inteiro}` : inteiro))
    .sort(() => -1)
    .join("");

  const formatedNumber = [".", ","].includes(a[0]) ? a.substring(1) : a;
  const formatedDecimals = decimals.length === 1 ? `${decimals}0` : decimals;
  return `R$ ${[formatedNumber, formatedDecimals].join(",")}`;
}
