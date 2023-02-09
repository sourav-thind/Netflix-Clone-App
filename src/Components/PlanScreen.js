import React, { useState , useEffect} from 'react'
import db from '../firebase';
import '../CSS/PlanScreen.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { loadStripe } from '@stripe/stripe-js';

const PlanScreen = () => {
    const [products, setproducts] = useState([]);
const user =useSelector(selectUser);
    useEffect(() => {
      db.collection("products")
      .where("active","==",true)
      .get().then((querySnapshot)=>{
        const products ={};
        querySnapshot.forEach(async (productDoc) =>{
            products[productDoc.id]= productDoc.data();
            const priceSnap = await productDoc.ref.collection("prices").get();
            priceSnap.docs.forEach((price) =>{
                products[productDoc.id].prices ={
                priceId: price.id,
                priceData: price.data()
        };
    });
        });
        setproducts(products);
      });
    
      
    }, [])
    

    const loadCheckout = async (priceId)=>{
    
        const docRef = await db
        .collection("customers")
        .doc(user.uid)
        .collection("checkout_Sessions")
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });
        console.log(window.location.origin);
        try {
        docRef.onSnapshot(async (snap)=>{
          const { error, sessionId } = snap.data();
          if(error){
            alert(`An error occured : ${error.message}`);
          }
          
  
            if(sessionId){
              //we have a session let's redirect
              const stripe = await loadStripe("pk_test_51MV7V2L88I5tS5uzKfJjBPo6uF80HmPZQe158n4naGefXmwZtaXbwxYjRfHhhfZNpHtZ6S4KlcCl3pupNIQXqjOv00qKscGjvR"); 
              stripe.redirectToCheckout({ sessionId });
            }
          
      })
    } catch (error) {
      console.log(error.message);
    }
  
  }
    
  return (
    <div className='planScreen'>
      {Object.entries(products).map(([productId, productData])=>{
        return(
          <div className="planScreen_plan">
            <div className="planScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
          </div>
      )
      })}
    </div>
  )
}

export default PlanScreen
