import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as PopperWraper } from '~/conponents/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const rendrtItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <PopperWraper className={cx('menu-popper')}>
        {history.length > 1 && <Header title="Languge" onBack={handleBack} />}
        <div className={cx('menu-body')}>{rendrtItem()}</div>
      </PopperWraper>
    </div>
  );

  const handleResetToFirstPageMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };
  return (
    <Tippy
      interactive
      delay={[0, 800]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
      onHide={handleResetToFirstPageMenu}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
