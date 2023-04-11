interface ListUserResult {
    users: [] | undefined | null,

}

export interface UserResult {
    Attributes: [] | undefined | null;
    Enabled: boolean;
    UserCreateDate: string | undefined | null;
    UserLastModifiedDate: string | undefined | null;
    UserStatus: string | undefined | null;
    Username: string | undefined | null;
}