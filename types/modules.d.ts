declare module "abi-decoder" {
    import * as Web3 from "web3";

    interface DecodedLog {
        name: string;
        events: DecodedMethodParam[];
        address: string;
    }

    interface DecodedMethodParam {
        name: string;
        value: string | boolean;
        type: string;
    }

    interface DecodedMethod {
        name: string;
        params: DecodedMethodParam[];
    }

    export function addABI(abi: Web3.AbiDefinition[]): void;
    export function removeABI(abi: Web3.AbiDefinition[]): void;
    export function decodeLogs(logs: Web3.LogEntry[]): DecodedLog[];
    export function decodeMethod(data: string): DecodedMethod;
}

declare module "tiny-promisify";
