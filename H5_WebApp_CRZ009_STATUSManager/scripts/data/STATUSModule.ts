module h5.application {
    export interface ISTATUSModule {

        reload: boolean;
        transactionStatus: {
            STATUSList: boolean,
            STATUSRecord: boolean,
            isMultipleAdd: boolean,
        };


        STATUSList: any; //list of table names
        STATUSListGrid: IUIGrid;
        selectedSTATUSListRow: any;
        STATUSRecord: any;
        loadSTATUSRecordModule: any //the function that will be called when a selection is made
        isMultipleAdd: boolean,

    }
}