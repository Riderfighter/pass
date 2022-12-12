import { type Permit, SecretNetworkClient } from "secretjs";

interface IStoredData {
  key: string; // Hopefully base64
  data: string; // Hopefully base64
}

interface IQueryStoredData {
  permit: Permit;
  query: any;
}

export class SecretNetworkProvider {
  //Todo: latency measurements
  private client: SecretNetworkClient | undefined;

  constructor() {
    // https://wgrpc.spartanapi.dev/
    // https://secret-4.api.trivium.network:9091
    // https://grpc.mainnet.secretsaturn.net
    // https://scrt-grpc.agoranodes.com

    this.client = new SecretNetworkClient({
      chainId: "secret-4",
      url: ""
    });
  }

  private async fetchEncryptedData() {
    const query: IQueryStoredData = {
      permit: {
        params: {
          permit_name: "",
          permissions: [],
          allowed_tokens: [],
          chain_id: "secret-4"
        },
        signature: {
          pub_key: {
            type: "",
            value: ""
          },
          signature: ""
        }
      },
      query: {}
    };

    if (this.client) {
      const resp: IStoredData = await this.client.query.compute.queryContract({
        contract_address: "",
        code_hash: "",
        query: query

      });
    }
  }
}