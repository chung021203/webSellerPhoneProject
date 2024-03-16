import classNames from 'classnames/bind';
import styles from '../Header/Header.module.scss';
import images from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo"></img>
                </div>
                <div className={cx('search')}>
                    <input type="text" placeholder="Tìm kiếm" />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}>
                    <Button primary>Đăng kí/ Đăng nhập</Button>
                </div>
                <div className={cx('cart')}>
                    <FontAwesomeIcon icon={faCartPlus} />
                </div>
            </div>
        </header>
    );
}

export default Header;
