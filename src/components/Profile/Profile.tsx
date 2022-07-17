import { format } from "date-fns";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Input } from "../common/Input";
import { RepoCard } from "../RepoCard";
import s from "./styles.module.scss";
import _ from "lodash";
import { useDebounce } from "../../lib/hooks";

interface Props {
	user: any;
	searchRepo: (login: string, search: string) => void;
}

export const Profile: FC<Props> = ({ user, searchRepo }) => {
	const [repoName, setRepoName] = useState("");

	const debouncedSearch = useDebounce((i: string, y: string) => searchRepo(i, y), 1000);

	const repoEl = user?.repos.map((el: any) => {
		return <RepoCard repo={el} />;
	});

	const ifFound = (check: string | undefined) => {
		return check ? check : "Not Found";
	};

	const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setRepoName(e.target?.value);
		debouncedSearch(user?.login, e.target.value);
		// _.debounce((i, y) => searchRepo(user?.login, e.target.value), 1000);
	};

	return (
		<div>
			<div className={s.flex}>
				<div className={s.column}>
					<img className={s.image} src={user?.avatar_url} alt="Avatar image" />
				</div>
				<div className={s.column}>
					<div>Username: {ifFound(user?.login)}</div>
					<div>Email: {ifFound(user?.email)}</div>
					<div>Location: {ifFound(user?.location)}</div>
					<div>
						Registration Date:{" "}
						{user?.created_at ? format(new Date(user.created_at), "dd-MM-yyyy") : "Not Found"}
					</div>
					<div>Followers: {ifFound(user?.followers)}</div>
					<div>Following: {ifFound(user?.following)}</div>
				</div>
			</div>
			<div>{ifFound(user?.bio)}</div>
			{/* <div>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ea corrupti voluptatibus,
				cupiditate harum magnam excepturi atque accusantium doloribus! Et eligendi laboriosam
				inventore ut unde praesentium possimus quaerat temporibus optio.
			</div> */}
			<Input value={repoName} onChange={onChangeSearch} />
			{repoEl}
		</div>
	);
};
