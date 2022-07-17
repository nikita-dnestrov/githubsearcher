import { FC, ReactNode } from "react";
import { useLocation } from "wouter";
import styles from "./styles.module.scss";

interface Props {
	children: ReactNode;
}

export const Headline: FC<Props> = ({ children }) => {
	const [location, setLocation] = useLocation();
	return (
		<div className={styles.wrapper}>
			<div onClick={() => setLocation("/")} className={styles.headline}>
				GitHub Searcher
			</div>
			<div>{children}</div>
		</div>
	);
};
