import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Nos projets</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.bretagne.bzh/app/uploads/1920_Agora_lycee-ploermel_-AIA-life-desgners.jpg'
              text="Formons les esprits de demain à l'université Denis Villeneuve"
              label='Enseignement'
              path='/services'
            />
            <CardItem
              src='https://mf.b37mrtl.ru/rbthmedia/images/2020.07/article/5f0306b315e9f90ed40dff9e.jpg'
              text='Voyagez a travers Arch grâce aux nombreuses lignes de métro du designer Dmitri Gloukhovski'
              label='Transports'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://i.f1g.fr/media/immobilier/orig/2014/11/19/PHO9c506092-6f52-11e4-b63d-ba4df661150d-805x453.jpg'
              text='Promenez vous au parc Neil Druckmann'
              label='Nature'
              path='/services'
            />
            <CardItem
              src='http://4.bp.blogspot.com/-m6qtzVkVKeI/T-nGo69bjbI/AAAAAAAAALY/4EwrlVBowA8/s1600/La-chambre-d-hopital-du-futur-va-voir-le-jour-a-Lille_article_main.jpg'
              text="Faites vous soigner grâce à des technologies de pointe dans l'hôpital Aldous Huxley"
              label='Soins'
              path='/products'
            />
            <CardItem
              src='https://i0.wp.com/www.retaildetail.be/wp-content/uploads/2022/04/Destination2028_Westfield_retail_Springwise.jpg?fit=1024%2C600&quality=100&strip=all&ssl=1'
              text="Achetez des produits issus de l'agriculture biologique au centre commercial George Orwell"
              label='Shopping'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;