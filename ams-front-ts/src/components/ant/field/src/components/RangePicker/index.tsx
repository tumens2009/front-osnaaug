import { DatePicker } from 'antd';
import React, { useCallback } from 'react';
import moment from 'moment';
import { parseValueToMoment } from '@/components/ant/utils/src';
import { useIntl } from '@/components/ant/provider/src';
import type { ProFieldFC } from '../../index';

/**
 * 日期范围选择组件
 *
 * @param
 */
const FieldRangePicker: ProFieldFC<{
  text: string[];
  format: string;
  showTime?: boolean;
}> = ({ text, mode, format, render, renderFormItem, plain, showTime, fieldProps }, ref) => {
  const intl = useIntl();
  const [startText, endText] = Array.isArray(text) ? text : [];
  const genFormatText = useCallback(
    (formatValue: moment.Moment) => {
      if (typeof fieldProps?.format === 'function') {
        return fieldProps?.format?.(formatValue);
      }
      return fieldProps?.format || format || 'YYYY-MM-DD';
    },
    [fieldProps, format],
  );
  // activePickerIndex for https://github.com/ant-design/ant-design/issues/22158
  const parsedStartText: string = startText
    ? moment(startText).format(genFormatText(moment(startText)))
    : '';
  const parsedEndText: string = endText
    ? moment(endText).format(genFormatText(moment(endText)))
    : '';

  if (mode === 'read') {
    const dom = (
      <div ref={ref}>
        <div>{parsedStartText || '-'}</div>
        <div>{parsedEndText || '-'}</div>
      </div>
    );
    if (render) {
      return render(text, { mode, ...fieldProps }, <span>{dom}</span>);
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    const momentValue = parseValueToMoment(fieldProps.value) as moment.Moment;
    const dom = (
      <DatePicker.RangePicker
        ref={ref}
        format={format}
        showTime={showTime}
        placeholder={[
          intl.getMessage('tableForm.selectPlaceholder', 'Please choose'),
          intl.getMessage('tableForm.selectPlaceholder', 'Please choose'),
        ]}
        bordered={plain === undefined ? true : !plain}
        {...fieldProps}
        value={momentValue}
      />
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};

export default React.forwardRef(FieldRangePicker);
