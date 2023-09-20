import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentSeedling } from '../../redux/store/reducer'
import { SeedlingPhoto } from '../seedling-photo'
import { SeedlingBuy } from '../seedling-buy'
import './seedling-item.css'

import samshitImage from '../../images/samshit.png';
import hortenziyaImage from '../../images/hortenziya.jpg';
import tuyaImage from '../../images/tuya.jpeg';
import gauraImage from '../../images/gaura.jpg';
import mazusImage from '../../images/mazus.webp';
import verbaImage from '../../images/verba.png';
import plyushImage from '../../images/plyush.jpg';
import lohynaImage from '../../images/lohyna.jpg';
import tisImage from '../../images/tis.webp';
import kostrytsyaImage from '../../images/kostrytsya.jpg';
import yalytsyaImage from '../../images/yalytsya.jpg';
import pavloniyaImage from '../../images/pavloniya.jpeg';

export const SeedlingItem = ({ seedling }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentSeedling(seedling));
        navigate(`/app/${seedling.title}`);
    }

    let image = null;

    switch (seedling.image) {
        case "Sumshit":
            image = samshitImage;
            break;
        case "Hortenziya":
            image = hortenziyaImage;
            break;
        case "Tuya":
            image = tuyaImage;
            break;
        case "Gaura":
            image = gauraImage;
            break;
        case "Mazus":
            image = mazusImage;
            break;
        case "Verba":
            image = verbaImage;
            break;
        case "Plyush":
            image = plyushImage;
            break;
        case "Lohyna":
            image = lohynaImage;
            break;
        case "Tis":
            image = tisImage;
            break;
        case "Kostrytsya":
            image = kostrytsyaImage;
            break;
        case "Yalytsya":
            image = yalytsyaImage;
            break;
        case "Pavloniya":
            image = pavloniyaImage;
            break;
        default:
            break;
    }

    return (
        <div className='seedling-item' onClick={handleClick}>
            <SeedlingPhoto image={image} />
            <div className='seedling-item__details'>
                <span className='seedling-item__title'>{seedling.title}</span>
                <div className='seedling-item__buy'>
                    <SeedlingBuy seedling={seedling} />
                </div>
            </div>
        </div>
    )
}