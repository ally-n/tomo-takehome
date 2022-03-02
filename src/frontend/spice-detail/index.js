import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpiceDetail = () => {
  const { id } = useParams();
  const [spice, setSpice] = useState(null);
  const [name, setName] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get(`/api/v1/spices/${id}`);
    setSpice(data);
    setName(data.name);
  }, []);

  let recipeList = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: { from: '0', size: '20', tags: name },
    headers: {
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
      'x-rapidapi-key': 'b90d91600cmsh13851f98a95db90p194c21jsne2c401f19db7',
    },
  };

  axios
    .request(recipeList)
    .then(function (response) {
      console.log(response.body);
    })
    .catch(function (error) {
      console.error(error);
    });

  console.log(recipeList[0]);

  //  async function recipeArr() {
  //    const {data} = await recipeArr()
  //     axios.get('https://tasty.p.rapidapi.com/recipes/list', {
  //       headers: {
  //           'x-rapidapi-host': 'tasty.p.rapidapi.com',
  //           'x-rapidapi-key': 'b90d91600cmsh13851f98a95db90p194c21jsne2c401f19db7'
  //         },
  //         params: {from: '0', size: '20', tags: name},
  //       })
  //       .then(res => {
  //           setRecipes(res.data)
  //           console.log(recipes)
  //       })
  //       .catch(err => console.log(err))
  //     }

  return (
    <div>
      <h2>Spice Detail Page</h2>
      {spice && (
        <div>
          <div>Spice Name: {spice.name}</div>
          <div>Spice Color: {spice.color}</div>
          <div>Spice Cost: {spice.price}</div>
          <div>Spice Heat Level: {spice.heat}</div>
        </div>
      )}
      <h2>Recipes with {name} in it</h2>
    </div>
  );
};

export default SpiceDetail;
