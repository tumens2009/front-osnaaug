/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import ProField from '@/components/ant/field/src';
import type { InputProps, SelectProps } from 'antd';
import type { ProSchema } from '@/components/ant/utils/src';
import { runFunction, isDeepEqualReact } from '@/components/ant/utils/src';
import createField from '../../BaseForm/createField';
import type { ProFormFieldItemProps } from '../../interface';
import ProFormDependency from '../Dependency';

export type ProFormFieldProps<T = any, FiledProps = InputProps & SelectProps<string>> = ProSchema<
  T,
  ProFormFieldItemProps<FiledProps> & {
    mode?: 'edit' | 'read' | 'update';
    // 用来判断是不是被嵌套渲染的 dom
    isDefaultDom?: boolean;
    ref?: any;
    plain?: boolean;
    text?: any;
  },
  any,
  any
>;

class ProFormField extends React.Component<
  ProFormFieldProps & {
    onChange?: Function;
    autoFocus?: boolean;
  }
> {
  filedRef = React.createRef<any>();
  renderDom(values?: Record<string, any>) {
    const {
      fieldProps,
      children,
      labelCol,
      label,
      autoFocus,
      isDefaultDom,
      render,
      proFieldProps,
      renderFormItem,
      valueType,
      initialValue,
      onChange,
      valueEnum,
      params,
      name,
      valuePropName = 'value',
      ...restProps
    } = this.props;
    const propsParams = values ? { ...params, ...(values || {}) } : params;
    return (
      <ProField
        valuePropName={valuePropName}
        text={fieldProps?.[valuePropName]}
        render={render as any}
        renderFormItem={renderFormItem as any}
        valueType={(valueType as 'text') || 'text'}
        fieldProps={{
          autoFocus,
          ...fieldProps,
          onChange: (...restParams: any) => {
            if (fieldProps?.onChange) {
              (fieldProps?.onChange as any)?.(...restParams);
              return;
            }
            onChange?.(...restParams);
          },
        }}
        valueEnum={runFunction(valueEnum)}
        {...proFieldProps}
        {...restProps}
        mode={proFieldProps?.mode || 'edit'}
        params={propsParams}
        ref={this.filedRef}
      />
    );
  }
  shouldComponentUpdate(
    nextProps: ProFormFieldProps & {
      onChange?: Function;
      autoFocus?: boolean;
    },
  ) {
    return !isDeepEqualReact(nextProps, this.props, ['onChange', 'onBlur']);
  }
  render() {
    const {
      fieldProps,
      children,
      labelCol,
      label,
      autoFocus,
      isDefaultDom,
      render,
      proFieldProps,
      renderFormItem,
      valueType,
      initialValue,
      onChange,
      valueEnum,
      params,
      name,
      ...restProps
    } = this.props;

    // 防止 formItem 的值被吃掉
    if (children) {
      if (React.isValidElement(children)) {
        return React.cloneElement(children, {
          ...restProps,
          onChange: (...restParams: any) => {
            if (fieldProps?.onChange) {
              (fieldProps?.onChange as any)?.(...restParams);
              return;
            }
            onChange?.(...restParams);
          },
          ...children.props,
        });
      }
      return children as JSX.Element;
    }

    if (restProps.dependencies && restProps.request) {
      return (
        <ProFormDependency name={restProps.dependencies}>
          {(values) => {
            return this.renderDom(values);
          }}
        </ProFormDependency>
      );
    }

    return this.renderDom();
  }
}

export default createField<ProFormFieldProps>(ProFormField) as <FiledProps, DataType = {}>(
  props: ProFormFieldProps<DataType, FiledProps>,
) => React.ReactElement;
