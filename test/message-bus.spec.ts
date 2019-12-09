import { MessageBus } from '../src/services/message-bus';
import { ConnectorConfig } from '@provide/types';

describe('MessageBus.create()', () => {
  const token = process.env['PROVIDE_API_TOKEN'];
  const networkId = 'aa51a87f-f142-4341-8e94-b4b0214a009f'; // default "dawn" testnet network id
  const name = `magic bus ${new Date().toUTCString()}`;

  it('it should create a new message bus', () => {
    const cfg = new ConnectorConfig();
    const mb = MessageBus.create(token, networkId, name, cfg);
    expect(mb).toBeTruthy();
  });
});
