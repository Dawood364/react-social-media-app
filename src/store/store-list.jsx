import { createContext, useCallback, useContext, useReducer } from "react";
// const DefaultValue = {
//   PostLists: [],
//   AddPost: () => {},
//   DeletePost: () => {},
// };

export const PostList = createContext();

const PostListReducer = (CurrPost, Action) => {
  let newVariable = CurrPost;
  if (Action.type === "DELETE_POST") {
    newVariable = newVariable.filter(
      (post) => post.id !== Action.payload.postid
    );
  } else if (Action.type === "ADD_POST") {
    newVariable = [Action.payload, ...CurrPost];
  }
  return newVariable;
};

const PostListProvider = ({ children }) => {
  const [PostLists, DispatchPostLists] = useReducer(
    PostListReducer,
    DefaultPost
  );
  const AddPost = (User_ID, Title, Body, Reactions, Tags) => {
    DispatchPostLists({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        User_ID: User_ID,
        Title: Title,
        Body: Body,
        Reactions: Reactions,
        Tags: Tags,
      },
    });
  };

  const DeletePost = useCallback((postid) => {
    DispatchPostLists({
      type: "DELETE_POST",
      payload: {
        postid: postid,
      },
    });
  }, []);
  return (
    <>
      <PostList.Provider
        value={{
          PostLists: PostLists,
          AddPost: AddPost,
          DeletePost: DeletePost,
        }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};
const DefaultPost = [
  {
    id: "1",
    Title: "Going to Mumbai",
    Body: "Hi Friends i am going to Mumbai For my Vaacation ",
    Reactions: 2,
    userId: "user-9",
    Tags: ["vacations", "Mumbai"],
  },

  {
    id: "2",
    Title: "Pass Ho Bahi",
    Body: "Masti Full phr bi Pass",
    Reactions: 18,
    userId: "user-12",
    Tags: ["Graduating", "Unbeleiveable"],
  },
];

export default PostListProvider;
