import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../ClientAuthentication/AuthProvider";


const WishList = () => {
    const wishes = useLoaderData();
    console.log(wishes)
    const user = useContext(AuthContext);
    const userWishes = wishes.filter((wish) => wish.userId === user.id);

    return (
        <div>
      <h2>wishes: {userWishes.length}</h2>
      {userWishes.map((wish) => (
        <div key={wish._id} className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center">
            <h2 className="card-title">{wish.blogTittle}</h2>
            <img src={wish.blogImage} alt="" />
            
            <p>Short Description: {wish.blogShortDescription}</p>
            <h2 className="card-title">Category: {wish.blogCategory}</h2>
            
            <div className="card-actions justify-end">
              <button>Detail</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default WishList;
