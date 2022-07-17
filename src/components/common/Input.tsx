import { ChangeEvent, FC } from "react";
import styles from "./styles.module.scss";

interface Props {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<Props> = ({ value, onChange }) => {
	return (
		<input
			value={value}
			onChange={onChange}
			className={styles.input}
			type="text"
			placeholder="Search for Users"
		/>
	);
};
