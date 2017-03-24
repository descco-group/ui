import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// style
import styles from '../../../scss/06-components/form.scss';

/**
 * Form
 * @extends {PureComponent }
 * @class
 */
class Form extends PureComponent {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props){
    super(props)
  }
  /**
   * defaultProps
   * @property {Boolean} onSubmit
   * @property {Style} style
   */
  static defaultProps = {
    onSubmit: false,
    style: 'form'
  };

  /**
   * propTypes
   * @property {Function} onSubmit
   * @property {String} style
   */
  static propTypes = {
    onSubmit: PropTypes.func,
    style: PropTypes.oneOf(['form', 'horizontal', 'inline'])
  };

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { style, onSubmit, className, ...elementProps } = this.props;

    return (
      <form
        {...elementProps}
        ref={c => { this.form = c }}
        onSubmit={onSubmit}
        className={classNames(className, styles[style])}
      >
      </form>
    );
  }
}

/**
 * @example <Form onSubmit={ ()=>{} } />
 */
export default CSSModules(Form, styles);
