const ReducerFileDataArr: any = (state = [null], action: any) => {
  switch (action.type) {
    case 'updatefiledataarr':
      return ['some data Test'];
    case 'clearfiledataarr':
      return [null];
    default:
      return state;
  }
};

export default ReducerFileDataArr;
