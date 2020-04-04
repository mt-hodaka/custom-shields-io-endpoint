import { Usecase } from './usecase/interface/Usecase';
import { ItunesAppleComUsecase } from './usecase/ItunesAppleComUsecase';
import { ShieldsIo } from './ShieldsIo';

function doGet(e: Event): GoogleAppsScript.Content.TextOutput {
    let response: ShieldsIo.Response

    switch (e.parameter.kind) {
        case 'ItunesAppleComUsecase.lookup':
            response = ItunesAppleComUsecase.lookup(e.parameter);
    }

    const out = ContentService.createTextOutput();
    out.setMimeType(ContentService.MimeType.JSON);
    out.setContent(JSON.stringify(response));
    return out;
}

interface Event {
    queryString: string;
    parameter: Usecase.Parameter;
    contentLength: number;
}
