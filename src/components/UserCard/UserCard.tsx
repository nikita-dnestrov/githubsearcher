import { FC } from "react";
import { useLocation } from "wouter";
import { useStore } from "../../lib/store/users";
import { CardUser } from "../../lib/types/user";
import s from "./styles.module.scss";

interface Props {
	user: CardUser;
}

export const UserCard: FC<Props> = ({ user }) => {
	const [location, setLocation] = useLocation();
	const handleClick = () => {
		setLocation(`/${user.login}`);
	};

	console.log(user);

	return (
		<div onClick={() => handleClick()} className={`${s.card} ${s.rowWrapper}`}>
			<div className={s.rowWrapper}>
				<img height={50} width={50} src={user.avatar} alt="" />
				<span>{user.login}</span>
			</div>
			<div>Repos: {user.repos}</div>
		</div>
	);
};
