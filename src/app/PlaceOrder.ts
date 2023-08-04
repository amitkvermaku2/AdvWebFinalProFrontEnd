export class PlaceOrder{
    constructor(
        public orderId:number,
        public time:string,
        public date:string,
        public longArray: number[],
        public userId:number,
    ){}
}
