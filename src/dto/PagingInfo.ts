class PagingInfo {
  public static DEFAULT_PAGE_SIZE: number;
  public PageCount?: number;
  public PageIndex?: number = 0;
  public PageSize?: number;
  public RecordCount?: number;
  public RowsSkip?: number;
}

export { PagingInfo };