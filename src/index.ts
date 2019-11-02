import promiseSettled from './PromiseSettled';
import style from './css.css';
import styles from './demo.css';

export default {
    someStyle: style.someSelector + styles.prefix,
    settled: promiseSettled
};
