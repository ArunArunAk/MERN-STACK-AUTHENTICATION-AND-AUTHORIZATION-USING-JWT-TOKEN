// Menu.js
import React, { useEffect,useState  } from 'react';
import styles from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import {  toast } from 'react-toastify';


const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic cheese and tomato pizza with fresh basil.',
      price: '$10',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI39SBNMehtGPw1SfvmzwKV9NRwW-rbXfTyQ&s' // Add your image path here
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      description: 'Pepperoni, cheese, and tomato pizza with oregano.',
      price: '$12',
      image: 'https://media.istockphoto.com/id/1042948900/photo/pizza-pepperoni-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=2WZk35fHKdCCh1FU-fOX6hrixIWB3IlMl0FspKaOraA=' // Add your image path here
    },
    {
      id: 3,
      name: 'Butter Chicken',
      description: 'Rich and creamy chicken curry with butter and spices.',
      price: '$15',
      image: 'https://www.allrecipes.com/thmb/SIgWrOI85-BlVbtGgUeew-77B7o=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-141169-Easy-Indian-Butter-Chicken-DDMFS-4x3-beauty-588ff54d1e0f4a0788906e851e27d540.jpg' // Add your image path here
    },
    {
      id: 4,
      name: 'Paneer Tikka',
      description: 'Grilled cottage cheese cubes marinated with spices.',
      price: '$10',
      image: 'https://t4.ftcdn.net/jpg/04/75/65/21/360_F_475652107_Sx73qgHWljGylX5KRyDFeE46ftX0A4EE.jpg' // Add your image path here
    },
    {
      id: 5,
      name: 'Biryani',
      description: 'Aromatic rice dish with spices and meat or vegetables.',
      price: '$12',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qC8u8YJXqbl_KDqdxlCTVc5bcVowChUHHw&s' // Add your image path here
    },
    {
      id: 6,
      name: 'Samosa',
      description: 'Crispy pastry filled with spiced potatoes and peas.',
      price: '$5',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvYe10xwM-YcKB5jf_T0pPYJDFhBuhQCw3A&s' // Add your image path here
    },
    {
      id: 7,
      name: 'Masala Dosa',
      description: 'Thin rice crepe filled with spiced potatoes.',
      price: '$8',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8p0wb-u63bCrWZ7Wp7Kq-2ItJOEuHtR_Fw&s' // Add your image path here
    },
    {
      id: 8,
      name: 'Chole Bhature',
      description: 'Spicy chickpea curry served with deep-fried bread.',
      price: '$10',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKuGCURE71GjKKZgsAQNNH5asERcr34Bayw&s' // Add your image path here
    },
    {
      id: 9,
      name: 'Tandoori Chicken',
      description: 'Chicken marinated in yogurt and spices, cooked in a tandoor.',
      price: '$14',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSrOUgfum3eN-iuv0vtBrpao9D6BF2ULKBNg&s' // Add your image path here
    },
    {
      id: 10,
      name: 'Aloo Gobi',
      description: 'Spiced potato and cauliflower curry.',
      price: '$9',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXIL2YyMzpsXaMATz9Tt-P99uUdLXMbYYtw&s' // Add your image path here
    },
    {
      id: 11,
      name: 'Palak Paneer',
      description: 'Spinach curry with cottage cheese cubes.',
      price: '$12',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8enuFy1g1v5YJVTZ7ld4coiJMs2giWgq-g&s' // Add your image path here
    },
    {
      id: 12,
      name: 'Gulab Jamun',
      description: 'Deep-fried dough balls soaked in sugar syrup.',
      price: '$6',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXF3TN0NQaQO_vkZwGoIz9C-qRV7uCJnzNVQ&s' // Add your image path here
    }
  ];
  

const Menu = () => {
 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:4800/auth/verify')
        .then((res) => {
            if (!res.data.status) {
              toast.warning("You have no permision to access this page ,pls login!", {
                position: "top-right", 
              });
                navigate('/');
                return;
            } 
            setLoading(false);
        })
        .catch((error) => {
            console.error("Verification error:", error);
            toast.error("An error occurred while verifying authorization.", {
                position: "top-right",
            });
            navigate('/');
        });
}, [navigate]);

  if (loading) {
    return null; // or you can return a loading spinner or a placeholder
  }

  return (
    <div className={`container ${styles.menuContainer}`}>
      <h1 className="text-center">Our Menu</h1>
      <div className="row">
        {menuItems.map(item => (
          <div className="col-md-4" key={item.id}>
            <div className={styles.menuItem}>
              <img src={item.image} alt={item.name} />
              <h5>{item.name}</h5>
              <p>{item.description}</p>
              <button className='btn btn-primary px-5' style={{borderRadius:20, marginRight: '10px' }}>{item.price}</button>
              
              <button className='btn btn-success  ' style={{borderRadius:20}}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
