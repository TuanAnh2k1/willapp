import { ftr_Command, ftr_Transport } from "@entities";
import { BaseParam } from "./BaseParam";

class TransportDTO extends BaseParam {
  public HubID?: string;
  //public Cars?: Array<FundExtCar>;
  public Commands?: ftr_Command[];
  public Transport?: ftr_Transport;
  public Transports?: ftr_Transport[];
  public TransportID?: number;
  public Comment?: string;
  public CarID?: number;
  public Version?: number;
  //public Car?: FundExtCar;
  public PlateNumber?: string;
  //public Escort?: ftr_TransportEmployee;
  //public Driver?: ftr_TransportEmployee;
  //public Security?: ftr_TransportEmployee;
}

export { TransportDTO }