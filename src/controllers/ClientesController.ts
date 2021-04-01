import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ClientesRepository } from '../repositories/ClientesRepository';

class ClientesController {
  async create(request: Request, response: Response){
    const clienteRepository = getCustomRepository(ClientesRepository);
    const {
      nome,
      nome_fantasia,
      cnpj,
      telefone,
      telefone_comercial,
      email,
      email_comercial,
      cep,
      endereco,
      bairro,
      cidade,
      estado,
      quantidade_funcionarios,
      porte
    } = request.body;

    const novoCliente = clienteRepository.create({
      nome,
      nome_fantasia,
      cnpj,
      telefone,
      telefone_comercial,
      email,
      email_comercial,
      cep,
      endereco,
      bairro,
      cidade,
      estado,
      quantidade_funcionarios,
      porte
    });

    const cliente = await clienteRepository.findOne({
      cnpj: cnpj
    });

    if(cliente){
      return response.status(404).json({error: "Esse cnpj já está cadastrado"});
    }

    await clienteRepository.save(novoCliente);
    return response.status(200).json(novoCliente);
  }
  async show(request: Request, response: Response){
    const clienteRepository = getCustomRepository(ClientesRepository);  
    const clientes = await clienteRepository.find();
    return response.status(200).json(clientes);
  }
  async update(request: Request, response: Response){
    const clienteRepository = getCustomRepository(ClientesRepository);
    const {id} = request.params;
    const {
      nome,
      nome_fantasia,
      cnpj,
      telefone,
      telefone_comercial,
      email,
      email_comercial,
      cep,
      endereco,
      bairro,
      cidade,
      estado,
      quantidade_funcionarios,
      porte
    } = request.body;

    const cliente = await clienteRepository.findOne({
      id: id
    });

    if(!cliente){
      return response.status(400).json({error: "Cliente informado não existe"});
    }

    const clienteAtualizado = clienteRepository.create({
      id,
      nome,
      nome_fantasia,
      cnpj,
      telefone,
      telefone_comercial,
      email,
      email_comercial,
      cep,
      endereco,
      bairro,
      cidade,
      estado,
      quantidade_funcionarios,
      porte
    });

    await clienteRepository.save(clienteAtualizado);
    return response.status(200).json(clienteAtualizado);
  }
  async delete(request: Request, response: Response){
    const clienteRepository = getCustomRepository(ClientesRepository);
    const {id} = request.params;

    const cliente = await clienteRepository.findOne({
      id: id
    });

    if(!cliente){
      return response.status(400).json({error: "Cliente informado não existe"});
    }

    await clienteRepository.delete(id);
    return response.status(200).json({info: `registro ${id} apagado com sucesso`});
  }
}

export {ClientesController}