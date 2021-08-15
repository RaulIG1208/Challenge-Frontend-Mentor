import bookmarkLogo from "../assets/icon-bookmark.svg";
import bookmarkedLogo from "../assets/icon-bookmark-active.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

const ChoiceBookmark = () => {

  const [bookmarked, setBookmarked] = useState(false);

  const handlefigure = ()=>setBookmarked(bookmarked?false:true);

  const responsiveFigcaption = useMediaQuery("(min-width: 560px)");
  return (
    <figure onClick={handlefigure}>
      <img src={bookmarked?bookmarkedLogo:bookmarkLogo} alt="Bookmark" />
      {responsiveFigcaption&&<figcaption className={bookmarked?"active":"disable"}>{bookmarked?"Bookmarked":"Bookmark"}</figcaption>}
    </figure>
  );
};

export default ChoiceBookmark;