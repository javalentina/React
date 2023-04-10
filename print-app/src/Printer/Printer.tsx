import React from "react";
import './Printer.css';

type Props = { value: string };

const Printer = ({ value }: Props) => {
  return <div id="printer">{value}</div>;
};
export default Printer;
