import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../ClientAuthentication/AuthProvider";

const WishList = () => {
  const wishes = useLoaderData();
  const user = useContext(AuthContext);
  
  const [userWishes, setUserWishes] = useState([]);
  
  useEffect(() => {
    const filteredWishes = wishes.filter((wish) => wish.userId === user.id);
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
          prevUserWishes.filter((wish) => wish._id !== id)
        );

      });
  };

  return (
    <div>
      {/* <h2>wishes: {userWishes.length}</h2> */}
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
