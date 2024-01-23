//import ftr_DeclarationMoney from "../entities/Commands/ftr_DeclarationMoney";
//import ftr_DeclarationCommodity from "../entities/Declaration/ftr_DeclarationCommodity";
import { PagingInfo } from "./PagingInfo";

class BaseParam {
    public PagingInfo?: PagingInfo;
    public FunctionCodes?: string[];
    public AccountCoreBanking?: string;
    public Endpoint?: string;
    public DownloadKey?: string;
    public ApprovalToken?: string;

    //public ListDeclarationDetailMoney?: Array<ftr_DeclarationMoney>;
    //public ListDeclarationDetailCommodity?: Array<ftr_DeclarationCommodity>;
}

class BaseFilter {
    public PageIndex?: number = 0;
    public PageSize?: number;
}

class BaseState {
    public UCToken?: string;
}

export { BaseParam, BaseFilter, BaseState }