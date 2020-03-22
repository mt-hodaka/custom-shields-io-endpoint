export namespace Lookup {
    export class Request {
        id: string;
        country?: string;

        constructor({ id, country }: { id: string; country?: string; }) {
            this.id = id;
            this.country = country;
        }

        send(): Response {
            const baseUrl = "https://itunes.apple.com";
            const path = "/lookup";
            const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
                method: "get",
                payload: {
                    "id": this.id,
                    "country": this.country ?? ""
                }
            };

            const response = UrlFetchApp.fetch(baseUrl + path, options);
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

    export class Convert {
        static toResponse(json: string): Response {
            return JSON.parse(json);
        }

        static toJson(response: Response): string {
            return JSON.stringify(response);
        }
    }

}
