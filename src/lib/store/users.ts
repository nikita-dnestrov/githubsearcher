import { useEffect } from "react";
import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { getUserByLogin, getUserRepos, searchUserRepos, searchUsers } from "../api/githubApi";
import { UserList } from "../types/user";

type SearchFn = (data: string) => void;

interface UserState {
	users: UserList;
	user: any | null;
	setUser: SearchFn;
	setUsers: SearchFn;
	setUserRepos: (login: string, search: string) => void;
}

export const useStore = create<UserState>()(
	immer((set) => ({
		users: [],
		user: null,
		setUser: async (data: any) => {
			const res = await getUserByLogin(data);
			const repos = await getUserRepos(data);

			set((state) => {
				state.user = { ...res, repos };
			});
		},
		setUserRepos: async (login: string, search: string) => {
			const res = await searchUserRepos(login, search);
			set((state) => {
				state.user.repos = res;
			});
		},
		setUsers: async (data: any) => {
			const res = await searchUsers(data);
			set((state) => {
				state.users = res;
			});
		},
	}))
);
