import { ILocalityRepository } from "@repositories/interfaces/ILocalityRepository";
import { ILocalityService } from "@services/interfaces/ILocalityService";

export default class LocalityService implements ILocalityService {
  private localityRepository: ILocalityRepository;

  constructor(localityRepository: ILocalityRepository) {
    this.localityRepository = localityRepository;
  }

  async getAllLocalities() {
    return await this.localityRepository.getAllLocalities();
  }
}
