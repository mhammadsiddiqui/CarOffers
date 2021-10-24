
import React, { useEffect } from 'react';
import AjaxCallApi from "../../../services/service";
import fallBackImg from "../../../assets/img/fallback_car.png";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { update } from '../../../redux/offers';

const Offers: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const offers = useSelector((state: RootState) => state.offers);
    
    useEffect(() => {
        getCarOffers();
    }, []);

    //call api to get offers data
    const getCarOffers = () => {
        const res: IOffers = AjaxCallApi.getCarOffers();
        if (res) {
            //filter only cars
            const availableCars: ICar[] = res.offers.filter(car => car.vehicleType === "car");
            //dispatch to redux
            dispatch(update(availableCars));
        }
    };

    //incase of corrupt image url
    const getFallBackImg = (ev: any) => {
        ev.target.src = fallBackImg;
    };

    return (
        <div className="carOffers">
            <div className="grid">
                <h2>Sixt Car Offers</h2>
                <div className="grid__row">
                    {offers.offers.map((car: ICar, index: number) => {
                        return (
                            <div key={car.id + "__" + index} className="grid__col">
                                <div className="teaser">
                                    <div className="teaser__image">
                                        <img className="teaser__header"
                                            src={car.carGroupInfo?.modelExample?.imageUrl}
                                            onError={getFallBackImg}>
                                        </img>
                                    </div>
                                    <div className="teaser__txt">
                                        <div className="teaser__title">
                                            <span className="teaser__type t-clr-primary icon">Sixt</span>
                                            <span className="teaser__date t-clr-secondary">{car.carGroupInfo.bodyStyle}</span>
                                        </div>
                                        <div className="teaser__body">
                                            <h3 className="teaser__subtitle">{car.carGroupInfo?.modelExample?.name}</h3>
                                            <div className="teaser__descr">
                                                <p>{car.mileageInfo.display}</p>
                                                <p>{car.prices.basePrice.amount.display} | €</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Offers;