export interface TsAppVersion {
    version: string;
    name: string;
    description?: string;
    versionLong?: string;
    versionDate: string;
    gitCommitHash?: string;
    gitCommitDate?: string;
    gitTag?: string;
};
export const versions: TsAppVersion = {
    version: '0.1.0',
    name: 'louis-login',
    versionDate: '2023-07-26T20:59:10.603Z',
    gitCommitHash: '38d5fd7',
    versionLong: '0.1.0-38d5fd7',
};
export default versions;
