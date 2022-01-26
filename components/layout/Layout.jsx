import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollUp/ScrollUp';
import CopyRight from '../footer/CopyRight';

export default class Layout extends React.Component {
  render() {
    const { children, active } = this.props;
    return (
      <div>
        <Navbar active={active} />
        {children}
        <Footer />
        <CopyRight />
        <ScrollUp />
      </div>
    );
  }
}
