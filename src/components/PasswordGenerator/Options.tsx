import { ChangeEventHandler, FC, useState } from 'react';
import styles from './Options.module.scss';

enum OptionsField {
    lowercase = 'lowercase',
    uppercase = 'uppercase',
    numbers = 'numbers',
    symbols = 'symbols',
}

const optionFieldLabels: Record<OptionsField, string> = {
    [OptionsField.lowercase]: 'Include Lowercase',
    [OptionsField.uppercase]: 'Include Uppercase',
    [OptionsField.numbers]: 'Include Numbers',
    [OptionsField.symbols]: 'Include Symbols',
}

const defaultState: Record<OptionsField, boolean> = {
    [OptionsField.lowercase]: true,
    [OptionsField.uppercase]: false,
    [OptionsField.numbers]: false,
    [OptionsField.symbols]: false,
}

const Options: FC = () => {
    const [selected, setSelected] = useState(defaultState);

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { checked, id } }) => {
        setSelected((currSelected) => {
            const updated = { ...currSelected, [id]: checked }
            // at least one option should be selected
            if (Object.values(updated).filter(Boolean).length === 0) {
                return currSelected
            }
            return updated
        })
    }

    return (
        <ul className={styles.options}>
            {Object.values(OptionsField).map((key) => (
                <li key={key}>
                    <input type="checkbox" id={key} checked={selected[key]} onChange={handleChange} />
                    <label htmlFor={key}>{optionFieldLabels[key]}</label>
                </li>
            ))}
        </ul>
    );
};

export default Options;