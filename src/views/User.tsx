import { FC, useEffect, useState } from "react";
import { useLocation } from "wouter";
import shallow from "zustand/shallow";
import { RepoCard } from "../components";
import { Profile } from "../components/Profile/Profile";
import { getUserByLogin } from "../lib/api/githubApi";
import { useStore } from "../lib/store/users";

export const User: FC = ({}) => {
	const [location, setLocation] = useLocation();
	const { user, setUser, setUserRepos } = useStore(
		(state) => ({
			user: state.user,
			setUser: state.setUser,
			setUserRepos: state.setUserRepos,
		}),
		shallow
	);

	useEffect(() => {
		setUser(location.slice(1));
	}, []);

	return (
		<div>
			<Profile user={user} searchRepo={setUserRepos} />
		</div>
	);
};
