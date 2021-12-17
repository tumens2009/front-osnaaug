import React, { useEffect, useMemo, useContext } from 'react';
import classNames from 'classnames';
import { Avatar, ConfigProvider } from 'antd';
import { useMountMergeState } from '@/components/ant/utils/src';
import CheckCardGroup, { CardLoading, CheckCardGroupConnext } from './Group';
import type { CheckCardGroupProps } from './Group';

import './index.less';

interface CheckCardProps {
  /**
   * 自定义前缀
   *
   * @ignore
   */
  prefixCls?: string;
  /** Change 回调 */
  onChange?: (checked: boolean) => void;
  /** Click 回调 */
  onClick?: (e: Event) => void;
  /** 鼠标进入时的回调 */
  onMouseEnter?: (event: MouseEvent) => void;
  /** 鼠标出来时的回调 */
  onMouseLeave?: (event: MouseEvent) => void;
  /**
   * 默认是否勾选
   *
   * @default false
   * @title 默认勾选
   */
  defaultChecked?: boolean;
  /**
   * 强制勾选
   *
   * @default false
   * @title 强制勾选
   */
  checked?: boolean;
  /**
   * 不可用
   *
   * @default false
   * @title 禁用
   */
  disabled?: boolean;
  /**
   * 选项卡样式
   *
   * @ignore
   */
  style?: React.CSSProperties;
  /**
   * 选项卡 className
   *
   * @ignore
   */
  className?: string;
  /**
   * 左侧头像展示，可以是一个链接也可以是是一个 ReactNode
   *
   * @title 头像
   */
  avatar?: React.ReactNode;
  /**
   * 标题展示
   *
   * @title 标题
   */
  title?: React.ReactNode;
  /**
   * 描述展示
   *
   * @title 描述
   */
  description?: React.ReactNode;
  /**
   * 选项值
   *
   * @title 值
   */
  value?: any;
  /**
   * 内容是否在加载中
   *
   * @default false
   * @title 加载中
   */
  loading?: boolean;
  /**
   * 图片封面默认，该模式下其他展示值被忽略
   *
   * @title 卡片背景图片
   */
  cover?: React.ReactNode;
  /**
   * 组件尺寸，支持大，中，小三种默认尺寸，用户可以自定义宽高
   *
   * @default default
   * @title 选择框大小
   */
  size?: 'large' | 'default' | 'small' | undefined;
  /**
   * 是否显示边框
   *
   * @default true
   * @title 显示边框
   */
  bordered?: boolean;
  /**
   * 卡片右上角的操作区域
   *
   * @title 操作栏
   */
  extra?: React.ReactNode;
}

export interface CheckCardState {
  checked: boolean;
}

const CheckCard: React.FC<CheckCardProps> & {
  Group: typeof CheckCardGroup;
} = (props) => {
  const [stateChecked, setStateChecked] = useMountMergeState<boolean>(
    props.defaultChecked || false,
    {
      value: props.checked,
      onChange: props.onChange,
    },
  );
  const checkcardGroup = useContext(CheckCardGroupConnext);
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const handleClick = (e: any) => {
    props?.onClick?.(e);
    const newChecked = !stateChecked;
    checkcardGroup?.toggleOption?.({ value: props.value });
    setStateChecked?.(newChecked);
  };

  // small => sm large => lg
  const getSizeCls = (size: string | undefined) => {
    if (size === 'large') return 'lg';
    if (size === 'small') return 'sm';
    return '';
  };

  useEffect(() => {
    checkcardGroup?.registerValue?.(props.value);
    return () => checkcardGroup?.cancelValue?.(props.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

  /**
   * 头像自定义
   *
   * @param prefixCls
   * @param cover
   * @returns
   */
  const renderCover = (prefixCls: string, cover: string | React.ReactNode) => {
    return (
      <div className={`${prefixCls}-cover`}>
        {typeof cover === 'string' ? <img src={cover} alt="checkcard" /> : cover}
      </div>
    );
  };

  const {
    prefixCls: customizePrefixCls,
    className,
    avatar,
    title,
    description,
    cover,
    extra,
    style = {},
    ...others
  } = props;

  const checkCardProps: CheckCardProps = { ...others };
  const prefixCls = getPrefixCls('pro-checkcard', customizePrefixCls);

  checkCardProps.checked = stateChecked;

  let multiple = false;

  if (checkcardGroup) {
    // 受组控制模式
    checkCardProps.disabled = props.disabled || checkcardGroup.disabled;
    checkCardProps.loading = props.loading || checkcardGroup.loading;
    checkCardProps.bordered = props.bordered || checkcardGroup.bordered;

    multiple = checkcardGroup.multiple;

    const isChecked = checkcardGroup.multiple
      ? checkcardGroup.value?.includes(props.value)
      : checkcardGroup.value === props.value;

    // loading时check为false
    checkCardProps.checked = checkCardProps.loading ? false : isChecked;
    checkCardProps.size = props.size || checkcardGroup.size;
  }

  const { disabled = false, size, loading: cardLoading, bordered = true, checked } = checkCardProps;
  const sizeCls = getSizeCls(size);

  const classString = classNames(prefixCls, className, {
    [`${prefixCls}-loading`]: cardLoading,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-multiple`]: multiple,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-bordered`]: bordered,
  });

  const metaDom = useMemo(() => {
    if (cardLoading) {
      return <CardLoading prefixCls={prefixCls || ''} />;
    }

    if (cover) {
      return renderCover(prefixCls || '', cover);
    }

    const avatarDom = avatar ? (
      <div className={`${prefixCls}-avatar`}>
        {typeof avatar === 'string' ? <Avatar size={48} shape="square" src={avatar} /> : avatar}
      </div>
    ) : null;

    const headerDom = (title || extra) && (
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-title`}>{title}</div>
        {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
      </div>
    );

    const descriptionDom = description ? (
      <div className={`${prefixCls}-description`}>{description}</div>
    ) : null;

    const metaClass = classNames(`${prefixCls}-content`, {
      [`${prefixCls}-avatar-header`]: avatarDom && headerDom && !descriptionDom,
    });

    return (
      <div className={metaClass}>
        {avatarDom}
        {headerDom || descriptionDom ? (
          <div className={`${prefixCls}-detail`}>
            {headerDom}
            {descriptionDom}
          </div>
        ) : null}
      </div>
    );
  }, [avatar, cardLoading, cover, description, extra, prefixCls, title]);

  return (
    <div
      className={classString}
      style={style}
      onClick={(e) => {
        if (!cardLoading && !disabled) {
          handleClick(e);
        }
      }}
    >
      {metaDom}
    </div>
  );
};

CheckCard.Group = CheckCardGroup;

export type { CheckCardGroupProps, CheckCardProps };

export default CheckCard;
