import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleArrows, faHouse, faVideo } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccounts from '~/conponents/SuggestedAccount/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<FontAwesomeIcon icon={faHouse} />} />
        <MenuItem title="Following" to={config.routes.following} icon={<FontAwesomeIcon icon={faPeopleArrows} />} />
        <MenuItem title="LIVE" to={config.routes.live} icon={<FontAwesomeIcon icon={faVideo} />} />
      </Menu>

      <SuggestedAccounts label="Suggested accounts" />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
