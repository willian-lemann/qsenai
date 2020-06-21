const LocalStorageService = () => {


    const SetToken = (token: string) => {
        localStorage.setItem('access_token', token);
    }

    const GetToken = () => {
        localStorage.getItem('access_token');
    }

    const GetRefreshedToken = () => {
        localStorage.getItem('refreshed_token');
    }

    const ClearToken = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refreshed_token');
    }

    return {
        SetToken,
        GetToken,
        GetRefreshedToken,
        ClearToken
    }
};

export default LocalStorageService;
