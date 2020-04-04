import { Lookup } from '../apiClient/itunes.apple.com/Lookup';
import { ShieldsIo } from '../ShieldsIo';
import { Usecase } from './interface/Usecase';

export namespace ItunesAppleComUsecase {
    export function lookup(parameter: LookupParameter): ShieldsIo.Response {
        const request = new Lookup.Request({ id: parameter.id, country: parameter.country });
        const response = request.send();
        const message = response.results[0][parameter.key];

        return {
            schemaVersion: 1,
            label: parameter.label,
            message: message,
        };
    }

    export interface LookupParameter extends Usecase.Parameterizable {
        kind: 'ItunesAppleComUsecase.lookup';
        id: string;
        country?: string;
    }
}
