import React, { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(false);

  return (
    <button
      className="like-button"
      onClick={() => setLike((prevLike) => !prevLike)}
    >
      {like ? "\u2605" : "\u2606"}
    </button>
  );
};

export default LikeButton;
