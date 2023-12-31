import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../ClientAuthentication/AuthProvider";
import Swal from "sweetalert2";

const WishList = () => {
  const wishes = useLoaderData();
  console.log(wishes)
  const { user } = useContext(AuthContext);
  console.log(user)

  const [userWishes, setUserWishes] = useState([]);

  useEffect(() => {
    const filteredWishes = wishes.filter((wish) => wish?.userEmail === user?.email);
    console.log('Filtered Wishes:', filteredWishes);
    setUserWishes(filteredWishes);
  }, [wishes, user]);
  if (!user) {
    return (
      <div>
        <h2 className="text-3xl font-bold ml-6">Please login and add some wishes to see your wishes.</h2>
      </div>
    );
  }

  const handleRemoveWish = (id) => {
    fetch(`https://travel-blog-backend-gamma.vercel.app/wishes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire('Your Wishes Removed Successfully')

        setUserWishes((prevUserWishes) =>
          prevUserWishes.filter((wish) => wish?._id !== id)
        );

      });
  };

  return (
    <div>      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userWishes.map((wish) => (
          <div key={wish._id} className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center">
              <h2 className="card-title">{wish.blogTittle}</h2>
              <img src={wish.blogImage} alt="" />
              <p>Short Description: {wish.blogShortDescription}</p>
              <h2 className="card-title">Category: {wish.blogCategory}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Detail</button>
                <button className="btn btn-accent" onClick={() => handleRemoveWish(wish._id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
