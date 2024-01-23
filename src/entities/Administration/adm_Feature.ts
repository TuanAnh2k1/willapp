class adm_Feature {
  public FEATURE_ID?: number;
  public NAME?: string;
  public PARENT_ID?: number;
  public STATUS?: number;
  public DESCRIPTION?: string;
  public DISPLAY_ORDER?: number;
  public VERSION?: number;
  public CREATED_DTG?: Date;
  public CreatedOn?: string;
  public CREATED_BY?: string;
  public UPDATED_DTG?: Date;
  public UpdatedOn?: string;
  public UPDATED_BY?: string;
  public DELETED?: number;
  public URL?: string;
  public Level?: number;
  public ON_MOBILE?: number;
  public IS_VISIBLE?: number;
  public FeatureType?: number;
  public ExtS1Name?: string;
  public ExtS2Name?: string;
  public ExtI1Name?: string;
  public ExtI2Name?: string;
  public ExtD1Name?: string;
  public ExtD2Name?: string;
  public ICON?: string;

  // Extend
  public ItemCount?: number;
  public Children?: Array<adm_Feature>;
}

export { adm_Feature }