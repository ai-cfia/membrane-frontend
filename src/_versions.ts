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
    versionDate: '2023-09-19T20:08:34.885Z',
    gitCommitHash: 'decac53',
    versionLong: '0.1.0-decac53',
};
export default versions;
