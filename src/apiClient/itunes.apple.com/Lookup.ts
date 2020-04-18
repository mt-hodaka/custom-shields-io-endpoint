export namespace Lookup {
    export class Request {
        static endpoint = 'https://itunes.apple.com/lookup' as const;

        constructor(private _url: string) {
        }

        send(): Response {
            const response = UrlFetchApp.fetch(this._url);
            return Convert.toResponse(response.getContentText());
        }
    }

    export interface Response {
        resultCount: number;
        results:     Result[];
    }

    export interface Result {
        screenshotUrls:                     string[];
        ipadScreenshotUrls:                 string[];
        appletvScreenshotUrls:              string[];
        artworkUrl60:                       string;
        artworkUrl512:                      string;
        artworkUrl100:                      string;
        artistViewUrl:                      string;
        supportedDevices:                   string[];
        advisories:                         any[];
        isGameCenterEnabled:                boolean;
        kind:                               string;
        features:                           string[];
        trackCensoredName:                  string;
        languageCodesISO2A:                 string[];
        fileSizeBytes:                      string;
        sellerUrl:                          string;
        contentAdvisoryRating:              string;
        averageUserRatingForCurrentVersion: number;
        userRatingCountForCurrentVersion:   number;
        averageUserRating:                  number;
        trackViewUrl:                       string;
        trackContentRating:                 string;
        trackId:                            number;
        trackName:                          string;
        releaseDate:                        Date;
        genreIds:                           string[];
        formattedPrice:                     string;
        primaryGenreName:                   string;
        minimumOsVersion:                   string;
        currentVersionReleaseDate:          Date;
        releaseNotes:                       string;
        primaryGenreId:                     number;
        sellerName:                         string;
        currency:                           string;
        version:                            string;
        wrapperType:                        string;
        artistId:                           number;
        artistName:                         string;
        genres:                             string[];
        price:                              number;
        description:                        string;
        isVppDeviceBasedLicensingEnabled:   boolean;
        bundleId:                           string;
        userRatingCount:                    number;
    }

    export interface Result {
        localizedReleaseDate: string;
        localizedCurrentVersionReleaseDate: string;
        fileSizeMegaBytes: string;
        roundedAverageUserRating: string;
    }

    export class Convert {
        static toResponse(json: string): Response {
            const response: Response = JSON.parse(json);
            response.results = response.results.map(result => {
                result.releaseDate = new Date(result.releaseDate);
                result.currentVersionReleaseDate = new Date(result.currentVersionReleaseDate);
                result.localizedReleaseDate = result.releaseDate.toLocaleDateString();
                result.localizedCurrentVersionReleaseDate = result.currentVersionReleaseDate.toLocaleDateString();
                result.fileSizeMegaBytes = (Number(result.fileSizeBytes) / 1_000_000).toFixed(1);
                result.roundedAverageUserRating = result.averageUserRating.toFixed(1);
                return result;
            });
            return response;
        }

        static toJson(response: Response): string {
            return JSON.stringify(response);
        }
    }

}
