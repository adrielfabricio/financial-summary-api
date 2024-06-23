import Locality from "@models/locality.model";

export interface ILocalityRepository {
  getAllLocalities(): Promise<Locality[]>;
}
