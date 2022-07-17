import { FC } from "react";
import { useLocation } from "wouter";
import { useStore } from "../../lib/store/users";
import s from "./styles.module.scss";

interface Props {
	repo: any;
}

export const RepoCard: FC<Props> = ({ repo }) => {
	const [location, setLocation] = useLocation();
	const set = useStore((state) => state.setUser);

	return (
		<div className={`${s.rowWrapper} ${s.card}`}>
			<span>{repo.full_name}</span>
			<div>
				<div>{repo.forks_count} Forks</div>
				<div>{repo.stargazers_count} Stars</div>
			</div>
		</div>
	);
};
