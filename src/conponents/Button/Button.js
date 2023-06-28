import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  children,
  outline = false,
  small = false,
  lagre = false,
  text = false,
  disable = false,
  rounded = false,
  LeftIcon,
  RightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  //remove event when button disable
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props.key;
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    primary: primary,
    outline: outline,
    small: small,
    lagre: lagre,
    text: text,
    disable: disable,
    rounded: rounded,
  });

  return (
    <Comp className={classes} {...props}>
      {LeftIcon && <span className={cx('icon')}>{LeftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
    </Comp>
  );
}

export default Button;
