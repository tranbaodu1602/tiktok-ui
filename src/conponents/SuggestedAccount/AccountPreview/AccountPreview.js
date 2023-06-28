import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/conponents/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8c404c52de772d58a5a6f31d8936747c~c5_100x100.jpeg?x-expires=1688133600&x-signature=1AdSX1Zq6AuZZ9CkQdN20QUBl4E%3D"
          alt="avatar"
        />
        <div className={cx('follow-btn')}>
          <Button primary small>
            Follow
          </Button>
        </div>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>NguyenAn</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Nguyen An a</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Following </span>
          <strong className={cx('value')}>1.5K </strong>
          <span className={cx('label')}>Like</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
