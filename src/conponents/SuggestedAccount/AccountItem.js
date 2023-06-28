import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWraper } from '~/conponents/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWraper>
          <AccountPreview />
        </PopperWraper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-18, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8c404c52de772d58a5a6f31d8936747c~c5_100x100.jpeg?x-expires=1688133600&x-signature=1AdSX1Zq6AuZZ9CkQdN20QUBl4E%3D"
            alt="avatar"
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>NguyenAn</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Nguyen An a</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
