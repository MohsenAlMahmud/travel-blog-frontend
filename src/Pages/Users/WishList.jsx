import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../ClientAuthentication/AuthProvider";

const WishList = () => {
  const wishes = useLoaderData();
  console.log(wishes)
  const { user } = useContext(AuthContext);
  console.log(user)
  
  const [userWishes, setUserWishes] = useState([]);
  
  useEffect(() => {
    const filteredWishes = wishes.filter((wish) => wish?.email === user?.email);
    
    setUserWishes(filteredWishes);
  }, [wishes, user]);

  const handleRemoveWish = (id) => {

    
    fetch(`http://localhost:5000/wishes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
        setUserWishes((prevUserWishes) =>
          prevUserWishes.filter((wish) => wish?._id !== id)
        );

      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">      
      {userWishes.map((wish) => (
        <div key={wish._id} className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center">
            <h2 className="card-title">{wish.blogTittle}</h2>
            <img src={wish.blogImage} alt="" />
            <p>Short Description: {wish.blogShortDescription}</p>
            <h2 className="card-title">Category: {wish.blogCategory}</h2>
            <div className="card-actions justify-end">
              <button>Detail</button>
              <button onClick={() => handleRemoveWish(wish._id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
