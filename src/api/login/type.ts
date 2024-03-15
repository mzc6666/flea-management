export namespace I_Login {
    export interface Params {
        username: string
        password: string
    }

    export interface ResponseData {
        permissions: string[];
        token: string;
    }
}
