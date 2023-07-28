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
    versionDate: '2023-07-28T12:53:49.017Z',
    gitCommitHash: 'b1b9c3b',
    versionLong: '0.1.0-b1b9c3b',
};
export default versions;
