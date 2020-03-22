import { Lookup } from './apiClient/itunes.apple.com/lookup';

function main(): void {
    const request = new Lookup.Request({ id: "1347707000", country: "jp" });
    const response = request.send();
    Logger.log(response);
}
