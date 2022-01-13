import React from 'react';

export default function Button({ color, text }) {
  return <button className={color}>{text}</button>;
}
