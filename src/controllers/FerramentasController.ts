import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { FerramentasRepository } from '../repositories/FerramentasRepository';

class FerramentasController {
  async create(request: Request, response: Response){
    const ferramentasRepository = getCustomRepository(FerramentasRepository);
    const {
      produto,
      pequeno_porte,
      grande_porte,
      medio_porte
    } = request.body;

    const novaFerramenta = ferramentasRepository.create({
      produto,
      pequeno_porte,
      grande_porte,
      medio_porte
    });

    await ferramentasRepository.save(novaFerramenta);
    return response.status(200).json(novaFerramenta);
  }
  async show(request: Request, response: Response){
    const ferramentasRepository = getCustomRepository(FerramentasRepository);  
    const ferramentas = await ferramentasRepository.find();

    if(!ferramentas){
      return response.status(400).json("Não há registros");
    }

    return response.status(200).json(ferramentas);
  }
  async update(request: Request, response: Response){
    const ferramentasRepository = getCustomRepository(FerramentasRepository);  
    const {id} = request.params;
    const {
      produto,
      pequeno_porte,
      grande_porte,
      medio_porte
    } = request.body;

    const ferramenta = await ferramentasRepository.findOne({
      id: id
    });

    if(!ferramenta){
      return response.status(400).json({error: "Ferramenta informado não existe"});
    }

    const ferramentaAtualizada = ferramentasRepository.create({
      produto,
      pequeno_porte,
      grande_porte,
      medio_porte
    });

    await ferramentasRepository.save(ferramentaAtualizada);
    return response.status(200).json(ferramentaAtualizada);
  }
  async delete(request: Request, response: Response){
    const ferramentasRepository = getCustomRepository(FerramentasRepository);  
    const {id} = request.params;

    const ferramenta = await ferramentasRepository.findOne({
      id
    });

    if(!ferramenta){
      return response.status(400).json({error: "Ferramenta informado não existe"});
    }

    await ferramentasRepository.delete(id);
    return response.status(200).json({info: `registro ${id} apagado com sucesso`});
  }
}

export {FerramentasController}