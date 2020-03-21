import { LookupRequest } from './apiClient/itunes.apple.com/lookup';

function main(): void {
    let response = LookupRequest.send("1496112584", "jp");
    Logger.log(response);
}
