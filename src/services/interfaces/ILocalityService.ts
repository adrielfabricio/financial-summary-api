import Locality from "@models/locality.model";

export interface ILocalityService {
  getAllLocalities(): Promise<Locality[]>;
}
