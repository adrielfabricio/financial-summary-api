import { Repository } from "typeorm";
import Locality from "@models/locality.model";
import { dataSource } from "@config/database";
import { ILocalityRepository } from "@repositories/interfaces/ILocalityRepository";

export default class LocalityRepository implements ILocalityRepository {
  private localityRepository: Repository<Locality>;

  constructor() {
    this.localityRepository = dataSource.getRepository(Locality);
  }

  async getAllLocalities(): Promise<Locality[]> {
    return await this.localityRepository.find();
  }
}
