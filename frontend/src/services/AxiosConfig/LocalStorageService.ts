const LocalStorageService = () => {
  const SetToken = (token: string, user: string) => {
    localStorage.setItem("access_token", token);
    localStorage.setItem("logged_user", user);
  };

  const GetToken = () => {
    const token = localStorage.getItem("access_token");
    const user = localStorage.getItem("logged_user");

    return { token, user };
  };

  const GetRefreshedToken = () => {
    return localStorage.getItem("refreshed_token");
  };

  const ClearToken = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refreshed_token");
    localStorage.removeItem("logged_user");
  };

  return {
    SetToken,
    GetToken,
    GetRefreshedToken,
    ClearToken,
  };
};

export default LocalStorageService;
