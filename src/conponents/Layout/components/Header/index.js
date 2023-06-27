import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignIn,
  faEllipsisVertical,
  faGlobe,
  faCircleQuestion,
  faKeyboard,
  faCloudUpload,
  faMessage,
  faPaperPlane,
  faCoins,
  faUser,
  faGear,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/conponents/Button';
import Menu from '~/conponents/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: ' English',

    children: {
      title: 'language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Việt Nam',
        },
        {
          type: 'language',
          code: 'ch',
          title: 'Trung Quốc',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcut',
  },
];

function Header() {
  const currenUser = true;

  const hanleMenuChange = (menuItem) => {
    //lấy item menu languge khi select
    switch (menuItem.type) {
      case 'language':
        //
        break;
      default:
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: 'Log out',
      to: '/logout',
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={routesConfig.home}>
          <div className={cx('logo')}>
            <img src={images.logo} alt="logo error" />
          </div>
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currenUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>

              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary LeftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu items={currenUser ? userMenu : MENU_ITEMS} onChange={hanleMenuChange}>
            {currenUser ? (
              <img
                className={cx('user-avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/856d6e040a2b3181553f302cdef7f5f5.jpeg?x-expires=1687964400&x-signature=HFvgPP5Jgb%2FRC5yONhSSvZWaOTA%3D"
                alt=""
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
