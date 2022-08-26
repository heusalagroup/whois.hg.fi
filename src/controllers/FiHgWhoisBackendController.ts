// Copyright (c) 2022. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import {
    GetMapping,
    RequestHeader,
    RequestMapping,
} from "../fi/hg/core/Request";
import { ReadonlyJsonObject } from "../fi/hg/core/Json";
import { ResponseEntity } from "../fi/hg/core/request/ResponseEntity";
import { LogService } from "../fi/hg/core/LogService";
import { WhoisLookupResult, WhoisService } from "../fi/hg/core/whois/WhoisService";

const LOG = LogService.createLogger('FiHgWhoisBackendController');

@RequestMapping("/")
export class FiHgWhoisBackendController {

    private static _whois : WhoisService | undefined;

    public static setWhoisService (service : WhoisService) {
        this._whois = service;
    }

    @GetMapping("/")
    public static async getIndex (
        @RequestHeader('Authorization', {
            required: false,
            defaultValue: ''
        })
        token: string
    ): Promise<ResponseEntity<ReadonlyJsonObject | {readonly error: string}>> {
        try {

            const payload : readonly WhoisLookupResult[] = await this._whois.whoisLookup('google.com');

            return ResponseEntity.ok({
                payload: payload
            } as unknown as ReadonlyJsonObject);

        } catch (err) {
            LOG.error(`ERROR: `, err);
            return ResponseEntity.internalServerError<{readonly error: string}>().body({
                error: 'Internal Server Error'
            });
        }
    }

}
