import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4a15d779150158b8031be772839544e5~c5_100x100.jpeg?x-expires=1687874400&amp;x-signature=GBNUQuvyBpPI8C9V6KEGwLR9ZeI%3D"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>AAAAAAAA</span>
      </div>
    </div>
  );
}

export default AccountItem;
