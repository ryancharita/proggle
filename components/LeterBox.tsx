import { FC } from 'react';

import styles from './components.module.css';
import { cva, VariantProps } from 'class-variance-authority';

const displayBox = cva('displayBox', {
  variants: {
    intent: {
      primary: [styles.defaultDisplayBox],
      filled: [styles.filledDisplayBox],
      correct: [styles.correctDisplayBox],
      partial: [styles.partialDisplayBox],
    },
  },
  compoundVariants: [{ intent: 'primary', class: 'uppercase' }],
  defaultVariants: {
    intent: 'primary',
  },
});

export interface ButtonProps extends React.HtmlHTMLAttributes<HTMLElement>, VariantProps<typeof displayBox> {}

const LetterBox: FC<ButtonProps> = ({ children, className, intent, ...props }) => {
  return (
    <div className={displayBox({ intent })} {...props}>
      {children}
    </div>
  );
};

export default LetterBox;
