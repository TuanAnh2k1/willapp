class ftr_Command {
  public ListCommandID?: any[];
  public IsSelect?: boolean;
  public COMMAND_ID?: number;
  public HubID?: number;
  public FundID?: number;
  public CODE?: string;
  public TYPE?: number;
  public TYPE_NAME?: string;
  public CREATED_COMMAND_BY?: number;
  public CREATED_COMMAND_DTG?: Date;
  public RequestedBy?: number;
  public RequestedDTG?: Date;
  public HubRequestedBy?: number;
  public HubRequestedDTG?: Date;
  public ApprovedBy?: number;
  public ApprovedDTG?: Date;
  public RejectedBy?: number;
  public RejectedDTG?: Date;
  public RejectedComment?: string;
  public STATUS?: number;
  public TRANSFER_START_DTG?: Date;
  public COMPLETED_DTG?: Date;
  public IsFundRequest?: boolean;
  public DELETED?: number;
  public VERSION?: number;
  public CREATED_BY?: string;
  public CREATED_DTG?: Date;
  public UPDATED_BY?: string;
  public UPDATED_DTG?: Date;
  public PROPOSAL_ID?: number;
  public NumberDeclaration?: number;
  public DESCRIPTION?: string;//ghi chú build khi nhập BK
  public HAS_CHECKED_CURRENT_AMOUNT?: boolean;
  // Extends
  public Hub_Name?: string;
  public Fund_Name?: string;
  public CreatedCommandBy_Username?: string;
  public CreatedCommandBy_Name?: string;
  public CreatedCommandBy_Code?: string;
  public RequestedBy_Name?: string;
  public RequestedBy_Code?: string;
  public HubRequestedBy_Name?: string;
  public HubRequestedBy_Code?: string;
  public ApprovedBy_Name?: string;
  public ApprovedBy_Code?: string;
  public RejectedBy_Name?: string;
  public RejectedBy_Code?: string;
  public SourceName?: string;
  public SOURCE_ID?: string;
  public DestinationName?: string;
  public DESTINATION_ID?: string;
  public Route_Name?: string;
  public SourceLat?: string;
  public SourceLong?: string;
  public DestinationLat?: string;
  public DestinationLong?: string;
  public DELIVERY_UNIT_ID?: number;
  public DELIVERY_UNIT_NAME?: string;

  public Source_Code?: string;
  public Des_Code?: string;

  // Mô tả thống kê tiền và hàng trong lệnh
  public CommandDetail_Tien_Desc?: string;
  public CommandDetail_HangHoa_Desc?: string;

  // Command - Transport
  public Currency_ID?: number;
  public Currency_Name?: string;
  public Currency_Amount?: number;
  public Commidity_ID?: number;
  public Commidity_Name?: string;
  public Select_Command?: boolean;
  public Currency_Names?: Array<string>;

  public Car_PlateNumber?: string;
  public Currency_Code?: string;
  public Commidity_Description?: string;

  public TRANSPORT_ID?: number;
  public EXECUTION_ORDER?: number;
  public Count_TransportBox?: number;
  public Transport_Code?: string;
  public Queue_Status?: number;
  public TransportSetting_Name?: string;
  public TRANSPORT_SETTING_ID?: number;
  //lịch sử lệnh
  public CreatedProposalDTG?: any;
  public CreatedProposalBy_Username?: string;
  public CreatedProposalBy_Name?: string;
  public CreatedProposalBy_Code?: string;
  public ProposalDetail_HangHoa_Desc?: string;
  public ProposalDetail_Tien_Desc?: string;
  public DeliveryUnit_Name?: string;
  //bảng kê
  public Declaration?: any;
  // public RecordsConfirmation?: any;

  public Declaration_T24?: string;
  public Declaration_T24_InputerDTG?: Date;
  public RecordsConfirmation_T24?: string;
  public RecordsConfirmation_T24_InputerDTG?: Date;
  public RecordStatus?: number;
  public DeclarationStatus?: number;
  // Lịch thu hộ
  public CollectionScheduleID?: number;
  public GIAO_DICH_TAO_DIEN_T24_TRANSACTION_CODE?: string;
  public GIAO_DICH_TAO_DIEN_T24_TRANSACTION_INFO?: string;
  public SUMMARY_MONEY?: string;
  public SUMMARY_ASSET?: string;

  public TRANSPORT_DISTANCE?: number;
  public TRANSPORT_PATHS?: string;
}

class ftr_CommandFilter {
  public Type?: number;
}

export { ftr_Command, ftr_CommandFilter };