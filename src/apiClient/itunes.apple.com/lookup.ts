// To parse this data:
//
//   import { Convert, LookupResponse } from "./file";
//
//   const lookupResponse = Convert.toLookupResponse(json);

interface LookupResponse {
    resultCount: number;
    results:     Result[];
}

interface Result {
    screenshotUrls:                     string[];
    ipadScreenshotUrls:                 any[];
    appletvScreenshotUrls:              any[];
    artworkUrl60:                       string;
    artworkUrl512:                      string;
    artworkUrl100:                      string;
    artistViewUrl:                      string;
    supportedDevices:                   string[];
    advisories:                         any[];
    isGameCenterEnabled:                boolean;
    kind:                               string;
    features:                           any[];
    trackCensoredName:                  string;
    languageCodesISO2A:                 string[];
    fileSizeBytes:                      string;
    contentAdvisoryRating:              string;
    averageUserRatingForCurrentVersion: number;
    userRatingCountForCurrentVersion:   number;
    averageUserRating:                  number;
    trackViewUrl:                       string;
    trackContentRating:                 string;
    minimumOsVersion:                   string;
    trackId:                            number;
    trackName:                          string;
    releaseDate:                        Date;
    currentVersionReleaseDate:          Date;
    formattedPrice:                     string;
    genreIds:                           string[];
    primaryGenreName:                   string;
    isVppDeviceBasedLicensingEnabled:   boolean;
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
    bundleId:                           string;
    userRatingCount:                    number;
}

// Converts JSON strings to/from your types
class Convert {
    static toLookupResponse(json: string): LookupResponse {
        return JSON.parse(json);
    }

    static lookupResponseToJson(value: LookupResponse): string {
        return JSON.stringify(value);
    }
}

namespace LookupRequest {
    export function send(id: string, country?: string): LookupResponse {
        const baseUrl = "https://itunes.apple.com";
        const path = "/lookup";
        const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
            method: "get",
            payload: {
                "id": id,
                "country": country ?? ""
            }
        };
        
        const response = UrlFetchApp.fetch(baseUrl + path, options);
        return Convert.toLookupResponse(response.getContentText());
    }
}
