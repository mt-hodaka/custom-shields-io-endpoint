import { Lookup } from './apiClient/itunes.apple.com/lookup';
import { ShieldsIo } from './shieldsIo';

function main(): void {
    const response = itunesAppleComLookup({ id: "1347707000", country: "jp" });
    Logger.log(ShieldsIo.Convert.toJson(response));
}

function itunesAppleComLookup({ id, country }: { id: string; country?: string; }): ShieldsIo.Response {
    const request = new Lookup.Request({ id: id, country: country });
    const response = request.send();
    const lastReleaseDate = new Date(response.results[0].currentVersionReleaseDate);

    return {
        schemaVersion: 1,
        label: "last release",
        message: lastReleaseDate.toLocaleDateString(),
        color: "orange"
    };
}
