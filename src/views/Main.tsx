import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { UserCard } from "../components";
import { Input } from "../components/common/Input";
import { useStore } from "../lib/store/users";

interface Props {}

export const Main: FC<Props> = ({}) => {
	const [name, setName] = useState("");
	const { users, setUsers } = useStore(
		(state) => ({
			users: state.users,
			setUsers: state.setUsers,
		}),
		shallow
	);

	const submit = (e: FormEvent) => {
		e.preventDefault();
		setUsers(name);
	};

	const userEl = users.map((el) => {
		return <UserCard key={el.id} user={el} />;
	});

	return (
		<div>
			<form onSubmit={submit}>
				<Input value={name} onChange={(e) => setName(e.target.value)} />
			</form>
			{userEl}
		</div>
	);
};
