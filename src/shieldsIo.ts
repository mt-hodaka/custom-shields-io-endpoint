export namespace ShieldsIo {
    export interface Response {
        schemaVersion: number;
        label:         string;
        message:       string;
        color:         string;
    }

    export class Convert {
        public static toResponse(json: string): Response {
            return JSON.parse(json);
        }

        public static toJson(value: Response): string {
            return JSON.stringify(value);
        }
    }
}
