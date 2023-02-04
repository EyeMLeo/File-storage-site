const ReducerModal: any = (state = true, action: any) => {
  switch (action.type) {
    case 'displayModalTrue':
      return true;
    case 'displayModalFalse':
      return false;
    default:
      return state;
  }
};

export default ReducerModal;
