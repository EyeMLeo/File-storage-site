const FetchingFireBaseData: any = (state = 1, action: any) => {
  switch (action.type) {
    case 'fetchingFireBaseDataTrue':
      return true;
    case 'fetchingDataFalse':
      return false;
    default:
      return state;
  }
};

export default FetchingFireBaseData;
