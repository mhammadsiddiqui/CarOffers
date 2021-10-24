interface IOffers {
   offers: ICar[]; 
}

interface ICar {
   id: string;
   mileageInfo: any;
   prices: any;
   vehicleType: string;
   status: string;
   carGroupInfo: any;
}