import { ChangeEventHandler, FC } from 'react';

import styles from './LengthSlider.module.scss';

type LengthSliderProps = {
    value: number
    onChange: (value: number) => void
}

const MIN_PASSWORD_LENGTH = 6
const MAX_PASSWORD_LENGTH = 20

const LengthSlider: FC<LengthSliderProps> = ({ value, onChange }) => {
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
        onChange(Number(value))
    }

    return (
        <div className={styles.formField}>
            <div className={styles.label}>
                <label htmlFor="passwordLength">Password length</label>
                <span className={styles.value}>{value}</span>
            </div>
            <input type="range" id="passwordLength" onChange={handleOnChange} value={value} min={MIN_PASSWORD_LENGTH} max={MAX_PASSWORD_LENGTH} />
            <div className={styles.sliderLegend}>
                <span>{MIN_PASSWORD_LENGTH}</span>
                <span>{MAX_PASSWORD_LENGTH}</span>
            </div>
        </div>
    );
};

export default LengthSlider;