class ftr_Transport {
  public TRANSPORT_ID?: number;
  public CAR_ID?: number;
  public ROUTE_ID?: number;
  public LONGITUDE?: string;
  public LATITUDE?: string;
  public START_DTG?: Date;
  public END_DTG?: Date;
  public CREATED_TRANSPORT_BY?: number;
  public CREATED_TRANSPORT_DTG?: Date;
  public REQUESTED_BY?: number;
  public REQUESTED_DTG?: Date;
  public APPROVED_BY?: number;
  public APPROVED_DTG?: string;
  public REJECTED_BY?: number;
  public REJECTED_DTG?: Date;
  public REJECTED_COMMENT?: string;
  public CODE?: string;

  public DELETED?: number;
  public VERSION?: number;
  public CREATED_BY?: string;
  public CREATED_DTG?: Date;
  public UPDATED_BY?: string;
  public UPDATED_DTG?: Date;
  public STATUS?: number;
  //exten
  public PlateNumber?: string;
  public PLATE_NUMBER?: string;
  public CarType?: string;
  public CAR_TYPE?: string;
  public CarTypeName?: string;
  public Car_ParentID?: number;
  public ISSUED_UNIT_ID?: number;
  public ISSUED_UNIT_NAME?: string;
  public HAS_SECURITY?: boolean;
  public HAS_SECURITY_DTG?: Date;
  public DRIVER_NAME?: string;
  public ESCORT_NAME?: string;

  public COMMAND_SUM?: number;
  public COMMAND_TRANSFERED?: number;

  public CreatedTransportBy_Username?: string;
  public CreatedTransportBy_Name?: string;

  public RejectedBy_Username?: string;
  public RejectedBy_Name?: string;

  public APPROVING_BY?: string;
  public CALCULATE_TRANSPORT_DISTANCE?: boolean;
}

export { ftr_Transport };