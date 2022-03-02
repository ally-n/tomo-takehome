import './index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpiceDetail = () => {
  const { id } = useParams();
  const [spice, setSpice] = useState(null);
  const [name, setName] = useState('');
  const [heat, setHeat] = useState(1);
  // const [recipes, setRecipes] = useState([]); <--Bonus feature that isn't working, but I wanted to explain

  //I wanted to use the Tasty API that would take the name of the spice and search for it in recipes. The request works
  //in Postman, but I couldn't figure out how to make it work with Mirage. Explain more below

  useEffect(async () => {
    const { data } = await axios.get(`/api/v1/spices/${id}`);
    setSpice(data);
    setName(data.name);
    setHeat(data.heat);
    // getRecipe(name) <-- commented out for recipe feature
  }, []);

  //Bonus Feature Idea: recipes that contain the spice you clicked on
  //Tried via Mirage this.passthrough in backend, but didn't work so commented out

  //   const getRecipe = (name) => {
  //     axios.get('https://tasty.p.rapidapi.com/recipes/list', {
  //       headers: {
  //         'x-rapidapi-host': 'tasty.p.rapidapi.com',
  //         'x-rapidapi-key': 'b90d91600cmsh13851f98a95db90p194c21jsne2c401f19db7',
  //       },
  //    params: {
  //        from: '0',
  //        size: '20',
  //        tags: name
  //        }
  //    })
  //    .then(res => {
  //        setRecipes(res.data)
  //    })
  //    .catch(err => console.log(err))
  // }

  //Bonus Feature: Pepper emoji for how hot a spice is on a scale from 1-5
  let pepperEmoji = () => {
    switch (heat) {
      case 1:
        return (
          <span role="img" aria-label="sheep">
            🌶
          </span>
        );
      case 2:
        return (
          <span role="img" aria-label="sheep">
            🌶🌶
          </span>
        );
      case 3:
        return (
          <span role="img" aria-label="sheep">
            🌶🌶🌶
          </span>
        );
      case 4:
        return (
          <span role="img" aria-label="sheep">
            🌶🌶🌶🌶
          </span>
        );
      case 5:
        return (
          <span role="img" aria-label="sheep">
            🌶🌶🌶🌶🌶
          </span>
        );
      default:
        return 'Insert spice joke here';
    }
  };

  return (
    <div>
      <h2>Spice Detail Page</h2>
      {spice && (
        <div className="detail-container">
          <div>Spice Name: {spice.name}</div>
          <div>Spice Color: {spice.color}</div>
          <div>Spice Cost: {spice.price}</div>
          <div>Spice Heat Level: {pepperEmoji(heat)}</div>
        </div>
      )}
      {/* <h2>Recipes with {name} in it</h2> <-- This would have been where I mapped through recipes 
      arr for 20 recipes that include that spice with the Tasty API. Would have shown name, description, picture with link */}
    </div>
  );
};

export default SpiceDetail;
