import { ItunesAppleComUsecase } from '../ItunesAppleComUsecase';

export namespace Usecase {
    export interface Parameterizable {
        kind: string;
        label: string;
        key: string;
    }

    export type Parameter = ItunesAppleComUsecase.LookupParameter;
}
