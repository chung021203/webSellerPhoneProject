import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import classNames from 'classnames/bind';
import styles from '../Header/Header.module.scss';
import images from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Search from '../Search';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo"></img>
                </div>
                {/* search */}
                <Search />

                <div className={cx('action')}>
                    <Button primary>Đăng nhập</Button>
                </div>
                <div className={cx('cart')}>
                    {}
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faCartPlus} />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
