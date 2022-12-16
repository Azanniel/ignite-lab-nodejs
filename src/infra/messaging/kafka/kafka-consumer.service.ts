import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['balanced-bluejay-11402-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'YmFsYW5jZWQtYmx1ZWpheS0xMTQwMiQkfCWCn2Dy0gXEFZU-IYK8l8pvOQZzdww',
          password:
            'SS9ordzoDwFOLZInvKiI4pg94lyHVgEs87IolIiLiHVzs5c506y84ODqzlJduYs2pK4ruw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
