import React from 'react';
import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import Button from '~/conponents/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const VideoInfo = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cc90ff074f35064b3c92e4658398a622~c5_100x100.jpeg?x-expires=1688223600&x-signature=r6dku90BMNw1Yc3v2NTHFWIj7F0%3D"
        alt=""
      />
      <div className={cx('info')}>
        <div>
          <strong>
            <a href="#" className={cx('name')}>
              Tran Van An
            </a>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          </strong>
          <a href="#" className={cx('nickname')}>
            @TranVanAn
          </a>
        </div>
        <div>Hay tham gia cung toi</div>
        <div>
          <FontAwesomeIcon icon={faMusic} />
          <strong>
            <span className={cx('music')}>bai hat dang phat</span>
          </strong>
        </div>
      </div>

      <div>
        <Button outline small>
          Follow
        </Button>
      </div>
    </div>
  );
};
const VideoContent = () => {
  return (
    <div className={cx('video-content')}>
      <video className={cx('video')} src={require('~/assets/images/video.mp4')} controls></video>
      <div className={cx('contact')}>
        {/* icon tym */}
        <div className={cx('icon')}>
          <div className={cx('covers')}>
            <FontAwesomeIcon className={cx('tym')} icon={faHeart} />
          </div>
          <span className={cx('number')}>1.2k</span>
        </div>
        {/* icon commnent */}
        <div className={cx('icon')}>
          <div className={cx('covers')}>
            <FontAwesomeIcon className={cx('comment')} icon={faComment} />
          </div>
          <span className={cx('number')}>952k</span>
        </div>
        {/* icon tym */}
        <div className={cx('icon')}>
          <div className={cx('covers')}>
            <FontAwesomeIcon className={cx('share')} icon={faShare} />
          </div>
          <span className={cx('number')}>9999</span>
        </div>
      </div>
    </div>
  );
};

const Following = () => {
  return (
    <div className={cx('body')}>
      <VideoInfo />
      <VideoContent />
      <VideoInfo />
      <VideoContent />
    </div>
  );
};

export default Following;
