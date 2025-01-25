import styles from './Spinner.module.css';

interface SpinnerProps {
  message?: string;
}

export default function Spinner({ message = "Loading..." }: SpinnerProps) {
  return (
    <div className={styles.spinner}>
      {message}
    </div>
  );
}