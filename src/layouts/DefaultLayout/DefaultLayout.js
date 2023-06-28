import classNames from 'classnames/bind';
import Header from '../components/Header/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
      <div className={cx('container')}>
        <Sidebar></Sidebar>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
