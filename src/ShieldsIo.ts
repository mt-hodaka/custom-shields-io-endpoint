export namespace ShieldsIo {
    export interface Response {
        schemaVersion: 1;
        label:         string;
        message:       string;
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
