import { Lookup } from './apiClient/itunes.apple.com/Endpoints';

function doGet(e: Event): GoogleAppsScript.Content.TextOutput {
    const response = sendRequest(e.parameter.url);

    const out = ContentService.createTextOutput();
    out.setMimeType(ContentService.MimeType.JSON);
    out.setContent(response);
    return out;
}

function sendRequest(url: string): string {
    let response: string;

    if (url.indexOf(Lookup.Request.endpoint) != -1) {
        const req = new Lookup.Request(url);
        const res = req.send();
        response = JSON.stringify(res);
    } else {
        const res = UrlFetchApp.fetch(url);
        response = JSON.stringify(res);
    }

    return response;
}

interface Event {
    queryString: string;
    parameter: Parameter;
    contentLength: number;
}

interface Parameter {
    url: string;
}

function test(): void {
    const response = sendRequest('https://itunes.apple.com/lookup?country=jp&id=640199958');
    Logger.log(response);
}
