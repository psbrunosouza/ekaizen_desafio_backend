import {EntityRepository, Repository} from 'typeorm';
import {Ferramentas} from '../models/Ferramentas';

@EntityRepository(Ferramentas)
class FerramentasRepository extends Repository<Ferramentas> {}

export {FerramentasRepository}