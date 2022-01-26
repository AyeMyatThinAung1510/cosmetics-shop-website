import React from 'react';
import classNames from 'classnames';
import { isMobileOnly } from 'react-device-detect';
import Link from 'next/link';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import Container from '../container/Container';
import Button from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends React.Component {
  state = {
    isOpen: false,
    isItMobile: false,
    scrolling: false,
  };

  componentDidMount() {
    const isXR = screen.width === 414 && screen.height === 896;
    const is11 = screen.width === 828 && screen.height === 1792;
    const isIpad = screen.width === 768 && screen.height === 1024;
    window.addEventListener('scroll', this.onScroll);
    if (isMobileOnly || isXR || is11 || isIpad) {
      this.setState((prevState) => ({
        ...prevState,
        isItMobile: true,
      }));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
  onScroll = () => {
    const scrollHeight = Math.ceil(window.scrollY / 50) * 50;
    const shouldBeScrolling = scrollHeight > 0;
    const { scrolling } = this.state;
    if (shouldBeScrolling !== scrolling) {
      this.setState((prevState) => ({
        ...prevState,
        scrolling: shouldBeScrolling,
      }));
    }
  };

  render() {
    const { isItMobile, scrolling } = this.state;
    const { active } = this.props;

    return (
      <nav
        className={
          !isItMobile && scrolling
            ? classNames('navbar is-scrolling')
            : 'navbar not-scrolling'
        }
        // className={classNames(
        //   `${scrolling ? 'navbar is-scrolling' : 'navbar not-scrolling'}`
        // )}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center py-2">
            <Link href="/">
              <img
                src="/image/logo.png"
                alt="not available"
                className="cursor-pointer"
              />
            </Link>
            {!isItMobile ? (
              <DeskTopMenu active={active} />
            ) : (
              <MobileMenu active={active} />
            )}
          </div>
        </Container>
      </nav>
    );
  }
}

class DeskTopMenu extends React.Component {
  // state = {
  //   isOpenSubMenu: false,
  //   isOpenProductMenu: false,
  // };

  // toggleMenu = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     isOpenSubMenu: !prevState.isOpenSubMenu,
  //     isOpenProductMenu: false,
  //   }));
  // };

  // toggleProductMenu = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     isOpenProductMenu: !prevState.isOpenProductMenu,
  //     isOpenSubMenu: false,
  //   }));
  // };
  render() {
    const { active } = this.props;
    return (
      <>
        <div className="menu px-3">
          <div className="d-flex justify-content-end">
            <div className="nav-link">
              <Link href="/">
                <a href="/" style={{ color: active === 'home' && '#ee2d7a' }}>
                  Home
                </a>
              </Link>
              <Link href="/aboutus">
                <a
                  href="/aboutus"
                  style={{ color: active === 'aboutus' && '#ee2d7a' }}
                >
                  About Us
                </a>
              </Link>

              <Link href="/products">
                <a
                  href="/products"
                  style={{ color: active === 'products' && '#ee2d7a' }}
                >
                  Products
                </a>
              </Link>

              <Link href="/blogs">
                <a
                  href="/blogs"
                  style={{ color: active === 'blogs' && '#ee2d7a' }}
                >
                  Blogs
                </a>
              </Link>

              <Link href="/contact">
                <a
                  href="/contact"
                  style={{ color: active === 'contact' && '#ee2d7a' }}
                  className="contactUs"
                >
                  Contact
                </a>
              </Link>

              <FontAwesomeIcon
                icon={faShoppingCart}
                className="nav-shopping-cart"
              />
              {/* <span className="nav-cart-number">0</span> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
class MobileMenu extends React.Component {
  state = {
    isOpen: false,
    blogOpen: false,
    productOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    const { active } = this.props;

    return (
      <div>
        <BurgerMenu
          onClick={() => this.toggleMenu()}
          className={classNames(isOpen ? 'open' : undefined)}
        />

        <div
          className={classNames(
            'mobile-menu animated fadeIn',
            isOpen ? 'open' : 'not-open'
          )}
        >
          <div className="m-menu">
            <div>
              <div className="pt-4">
                <Link href="/">
                  <img
                    src="/image/logo.png"
                    alt="not available"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <ul>
                <li>
                  <Link href="/">
                    <a
                      href="/"
                      className={
                        active === 'home'
                          ? 'mobile-menu-link-active'
                          : 'mobile-menu-link'
                      }
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus">
                    <a
                      href="/"
                      className={
                        active === 'aboutus'
                          ? 'mobile-menu-link-active'
                          : 'mobile-menu-link'
                      }
                    >
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="products">
                    <a
                      href="/products"
                      className={
                        active === 'products'
                          ? 'mobile-menu-link-active'
                          : 'mobile-menu-link'
                      }
                    >
                      Products
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/blog">
                    <a
                      href="/blog"
                      className={
                        active === 'blog'
                          ? 'mobile-menu-link-active'
                          : 'mobile-menu-link'
                      }
                    >
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a
                      href="/contact"
                      className={
                        active === 'contact'
                          ? 'mobile-menu-link-active'
                          : 'mobile-menu-link'
                      }
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
