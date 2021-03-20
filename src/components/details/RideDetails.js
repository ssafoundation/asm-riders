import React from 'react';
import { useParams } from 'react-router';
import Gmap from '../Gmap/Gmap';

// import Map_img from './img/Map.png'
import './RideDetails.css'
const RideDetails = () => {
    const { name } = useParams();

    console.log(name);
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="details-sidebar">
                        <h3>Details {name}</h3>
                        <form>
                            <div className="pick-from">
                                <p>Pick From</p>
                                <input type="text" />
                            </div>
                            <div className="pick-from">
                                <p>Pick To</p>
                                <input type="text" />
                            </div>

                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="details-map">
                        <Gmap />
                        {/* <img src={Map_img} alt="" /> */}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default RideDetails;