// Copyright (c) 2022. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import {
    GetMapping,
    RequestHeader,
    RequestMapping,
    RequestParam
} from "../fi/hg/core/Request";
import { ResponseEntity } from "../fi/hg/core/request/ResponseEntity";
import { LogService } from "../fi/hg/core/LogService";
import { WhoisService } from "../fi/hg/core/whois/WhoisService";
import { createErrorDTO, ErrorDTO } from "../fi/hg/core/types/ErrorDTO";
import { createWhoisDTO, WhoisDTO } from "../fi/hg/core/whois/types/WhoisDTO";
import { isString } from "../fi/hg/core/modules/lodash";
import { WhoisServerRegistryService } from "../fi/hg/core/whois/WhoisServerRegistryService";
import { WhoisLookupResult } from "../fi/hg/core/whois/types/WhoisLookupResult";
import {
    API_ADDRESS_QUERY_PARAM,
    API_AUTHORIZATION_HEADER_NAME,
    API_INDEX_END_POINT,
    API_JOKER_LOOKUP_END_POINT,
    API_LOOKUP_END_POINT
} from "../constants/api";
import {
    JokerComWhoisDTO
} from "../fi/hg/core/com/joker/types/JokerComWhoisDTO";
import { JokerComWhoisService } from "../fi/hg/core/com/joker/JokerComWhoisService";

const LOG = LogService.createLogger('FiHgWhoisBackendController');

@RequestMapping(API_INDEX_END_POINT)
export class FiHgWhoisBackendController {

    private static _whois : WhoisService | undefined;
    private static _whoisServers : WhoisServerRegistryService | undefined;
    private static _jokerService : JokerComWhoisService | undefined;

    public static setJokerWhoisService (service : JokerComWhoisService) {
        this._jokerService = service;
    }

    public static setWhoisService (service : WhoisService) {
        this._whois = service;
    }

    public static setWhoisRegistryService (service : WhoisServerRegistryService) {
        this._whoisServers = service;
    }

    /**
     *
     * @param token
     * @param address
     */
    @GetMapping(API_LOOKUP_END_POINT)
    public static async lookup (
        @RequestHeader(API_AUTHORIZATION_HEADER_NAME, {
            required: false,
            defaultValue: ''
        })
        token: string,
        @RequestParam(API_ADDRESS_QUERY_PARAM)
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

    /**
     * Note! This service only works for Joker.com resellers who have activated
     * their IP address at Joker.com.
     *
     * @param token
     * @param address
     */
    @GetMapping(API_JOKER_LOOKUP_END_POINT)
    public static async lookupJoker (
        @RequestHeader(API_AUTHORIZATION_HEADER_NAME, {
            required: false,
            defaultValue: ''
        })
        token: string,
        @RequestParam(API_ADDRESS_QUERY_PARAM)
        address: string
    ): Promise<ResponseEntity<JokerComWhoisDTO | ErrorDTO>> {
        try {
            if (!( isString(address) && address )) {
                return ResponseEntity.badRequest<ErrorDTO>().body(
                    createErrorDTO('Lookup address (Query param "a") must be defined and a string', 400)
                );
            }
            LOG.debug(`lookupJoker: "${address}"`);
            const dto = await this._jokerService.jokerLookup(address);
            LOG.debug(`lookupJoker: "${address}": dto: `, dto);
            return ResponseEntity.ok<JokerComWhoisDTO>( dto );
        } catch (err) {
            LOG.error(`ERROR: `, err);
            return ResponseEntity.internalServerError<ErrorDTO>().body(
                createErrorDTO('Internal Server Error', 500)
            );
        }
    }

}
