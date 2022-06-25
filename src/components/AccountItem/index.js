import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a922437c02fcfe4dd9ec733858f94d76~c5_100x100.jpeg?x-expires=1656298800&x-signature=9dQ443E%2BMpXwnP96uaJBsFzv3wQ%3D"
                alt="Hoaa"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguye Van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
