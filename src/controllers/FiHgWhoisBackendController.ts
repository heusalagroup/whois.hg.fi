// Copyright (c) 2022. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import {
    GetMapping,
    RequestHeader,
    RequestMapping, RequestParam
} from "../fi/hg/core/Request";
import { ResponseEntity } from "../fi/hg/core/request/ResponseEntity";
import { LogService } from "../fi/hg/core/LogService";
import { WhoisService } from "../fi/hg/core/whois/WhoisService";
import { createErrorDTO, ErrorDTO } from "../fi/hg/core/types/ErrorDTO";
import { createWhoisDTO, WhoisDTO } from "../fi/hg/core/whois/types/WhoisDTO";
import { isString } from "../fi/hg/core/modules/lodash";
import { WhoisServerRegistryService } from "../fi/hg/core/whois/WhoisServerRegistryService";
import { WhoisLookupResult } from "../fi/hg/core/whois/types/WhoisLookupResult";

const LOG = LogService.createLogger('FiHgWhoisBackendController');

@RequestMapping("/")
export class FiHgWhoisBackendController {

    private static _whois : WhoisService | undefined;
    private static _whoisServers : WhoisServerRegistryService | undefined;

    public static setWhoisService (service : WhoisService) {
        this._whois = service;
    }

    public static setWhoisRegistryService (service : WhoisServerRegistryService) {
        this._whoisServers = service;
    }

    @GetMapping("/")
    public static async lookup (
        @RequestHeader('Authorization', {
            required: false,
            defaultValue: ''
        })
        token: string,
        @RequestParam('a')
        address: string
    ): Promise<ResponseEntity<WhoisDTO | ErrorDTO>> {
        try {
            if (!( isString(address) && address )) {
                return ResponseEntity.badRequest<ErrorDTO>().body(
                    createErrorDTO('Lookup address (Query param "a") must be defined and a string', 400)
                );
            }
            const server = this._whoisServers.resolveServerFromAddress(address);
            LOG.debug(`lookup: "${address}": server: `, server);
            const payload : readonly WhoisLookupResult[] = await this._whois.whoisLookup(address, {server});
            LOG.debug(`lookup: "${address}": payload: `, payload);
            return ResponseEntity.ok<WhoisDTO>( createWhoisDTO(payload) );
        } catch (err) {
            LOG.error(`ERROR: `, err);
            return ResponseEntity.internalServerError<ErrorDTO>().body(
                createErrorDTO('Internal Server Error', 500)
            );
        }
    }

}
