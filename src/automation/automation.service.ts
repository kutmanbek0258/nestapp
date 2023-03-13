import { Injectable } from '@nestjs/common';
import { CreateAutomationDto } from './dto/create-automation.dto';
import { UpdateAutomationDto } from './dto/update-automation.dto';
import { client } from 'jsmodbus';
import { Socket, SocketConnectOpts } from 'net'
import { WriteSingleCoilDto } from './dto/write-single-coil.dto';

const socket = new Socket()

const options: SocketConnectOpts = {
  'host': '192.168.0.3',
  'port': 502
}

const modbusTCPClient = new client.TCP(socket)

socket.on('connect', function () {
  console.log('Modbus TCP connected success!');
})

socket.on('error', console.error)
socket.connect(options)

@Injectable()
export class AutomationService {
  create(createAutomationDto: CreateAutomationDto) {
    return 'This action adds a new automation';
  }

  findAll() {
    return `This action returns all automation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} automation`;
  }

  update(id: number, updateAutomationDto: UpdateAutomationDto) {
    return `This action updates a #${id} automation`;
  }

  remove(id: number) {
    return `This action removes a #${id} automation`;
  }

  writeSingleCoil(writeSingleCoilDto: WriteSingleCoilDto){
    modbusTCPClient.writeSingleCoil(writeSingleCoilDto.flagNumber, writeSingleCoilDto.status)
      .then(function (resp) {
        return resp;
        // socket.end()
      }).catch(function () {
        return arguments
      // console.error(arguments)
      // socket.end()
    })
  }
}
