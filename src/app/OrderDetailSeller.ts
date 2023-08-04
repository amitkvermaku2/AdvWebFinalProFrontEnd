export class OrderDetailSeller{
    constructor(
        public oId:number,
        public shipped:string,
        public sellerId:number,
        public userAddress: string,
        public uFirstName:string,
        public uLastName:string,
        public userContact:string,
        public productName:string,
        public productId:string,
    ){}
}
