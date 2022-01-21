import React from 'react';

import { useTheme } from '../contexts/themeContext';

const Footer = () => {
  const { footerText } = useTheme();

  return <footer>{footerText}</footer>;
};

export default Footer;
