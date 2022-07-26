import axios from "axios";

export const searchUsers = async (query: string) => {
	const res = (await axios.get(`https://api.github.com/search/users?q=${query}&type=users`)).data;
	const reposRes = await Promise.all(
		res.items.map(async (el: any) => {
			const repoRes = await getUserByLogin(el.login);
			return { ...el, repos: repoRes.public_repos };
		})
	);
	const final = reposRes.map((el) => {
		return { login: el?.login, avatar: el?.avatar_url, repos: el?.repos, id: el?.id };
	});
	return final;
};

export const getUserByLogin = async (login: string) => {
	return (await axios.get(`https://api.github.com/users/${login}`)).data;
};

export const getUserRepos = async (login: string) => {
	return (await axios.get(`https://api.github.com/users/${login}/repos`)).data;
};

export const searchUserRepos = async (login: string, repoName: string) => {
	const enc = encodeURIComponent(` user:${login}`);
	return (
		await axios.get(
			`https://api.github.com/search/repositories?q=${repoName}${enc}&type=Repositories`
		)
	).data.items;
};
