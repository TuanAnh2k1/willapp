import { ftr_Command, ftr_Transport } from "@entities";
import { BaseParam, BaseFilter } from "./BaseParam";

class CommandTransportDTO extends BaseParam {
  public CommandID?: number;
  public Command?: ftr_Command;
}

class CommandTransportFilter extends BaseFilter {

}

export { CommandTransportDTO, CommandTransportFilter }