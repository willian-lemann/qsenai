const LocalStorageService = () => {


    const SetToken = (token: string) => {
        localStorage.setItem('access_token', token);
    }

    const GetToken = () => {
        return localStorage.getItem('access_token');
    }

    const GetRefreshedToken = () => {
        return localStorage.getItem('refreshed_token');
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
