// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import withCart from '../../containers/withCart';
import colors from '../../styles/colors';
import CountIndicator from '../countIndicator';

type CartProps = {
  count: number
};

const CartWrapper = styled.div`
  position: relative;
`;

const Svg = styled.svg`
  fill: ${colors.subduedText};
  cursor: pointer;
  width: 42px;
  height: 42px;
  transition: fill 500ms ease;
  &:hover {
    fill: ${colors.primaryText};
  }
`;

// TODO: build a more robust <Icon /> component
export const ShoppingCart = ({ count }: CartProps) => (
  <CartWrapper>
    {count > 0 && <CountIndicator>{count}</CountIndicator>}
    <Link href="/checkout">
      <Svg
        enableBackground="new 0 0 100 100"
        viewBox="0 0 100 125"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m85.442 66.051 9.329-34.187-4.308-.709-8.34 30.556h-41.346-4.846-6l-9.595-39.638-.067-.314-4.317-3.799c.544-1.522.498-3.238-.416-4.726-1.603-2.595-5.005-3.4-7.596-1.806-2.594 1.603-3.405 5.004-1.802 7.595 1.446 2.356 4.355 3.135 6.823 2.087l3.426 3.212 10.047 41.728h7.351l-4.166 6.283c-4.038.77-7.094 4.311-7.094 8.575 0 4.824 3.911 8.735 8.737 8.735 4.071 0 7.464-2.794 8.435-6.563h31.451c.971 3.77 4.366 6.563 8.438 6.563 4.823 0 8.735-3.911 8.735-8.735 0-4.825-3.912-8.74-8.735-8.74-4.072 0-7.468 2.799-8.438 6.57h-31.451c-.716-2.788-2.759-5.024-5.431-6.007l4.365-6.682h46.811z" />
        <path d="m90.464 31.155 4.307.709" />
        <path d="m75.481 56.307h-38.797c-1.188 0-2.151-.962-2.151-2.151 0-1.188.963-2.15 2.151-2.15h38.798c1.188 0 2.151.962 2.151 2.15 0 1.189-.963 2.151-2.152 2.151z" />
        <path d="m78.885 47.702h-45.609c-1.188 0-2.151-.963-2.151-2.152 0-1.188.963-2.151 2.151-2.151h45.608c1.189 0 2.151.963 2.151 2.151.001 1.188-.961 2.152-2.15 2.152z" />
        <path d="m83.359 39.096h-54.555c-1.188 0-2.151-.963-2.151-2.151s.963-2.152 2.151-2.152h54.556c1.189 0 2.151.963 2.151 2.152 0 1.187-.962 2.151-2.152 2.151z" />
      </Svg>
    </Link>
  </CartWrapper>
);

const ConnectedShoppingCart = withCart(ShoppingCart);
export default ConnectedShoppingCart;
