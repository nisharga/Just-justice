import React from "react";
import SingleBlogs from "./SingleBlogs/SingleBlogs";

const Blogs = () => {
  const BlogsALL = [
    {
      id: 1,
      title: "Difference between authorization and authentication?",
      description:
        "Authentication is a process to verify someone and Authorization is a process to access something. In simple example, if you visit airport you have to show your id card for authenticat yourself. After that they authoriz us our seat no, our waiting room, our air craft. They give us some specific access by boarding pass.If you  authenticat prove yourself but they are not authorized then still you can't do anyting",
    },
    {
      id: 2,
      title:
        "Why are you using firebase? What other options do you have to implement authentication?",
      description:
        "Just because we are not spending too much time too developing our backend. The other reason is we can't take care of our backend properly. That's why we are using 3rd party for authentication. Firebase easy to setup, Free to use. For this reason we are using firebase. Other options we can implement authentication: 1)Two-factor authentication (2FA) 2)Fingerprint authentication 3)Token-based authentication",
    },
    {
      id: 3,
      title:
        "What other services does firebase provide other than authentication",
      description:
        "There are many services Firebase provides other then authentication, Most useful of them are: 1)Cloud Firestore  2)Cloud Function 3)Hosting 4)Cloud Storage 5)Google Analytics 6)Predictions 7)Cloud Messaging 8)Dynamic Links 9)Remote Config",
    },
  ];
  return (
    <div className="blog-container bg-light pt-3 pb-2">
      <div className="container">
        <div className="row">
          {BlogsALL.map((blogs) => (
            <SingleBlogs blogs={blogs} key={blogs.id}></SingleBlogs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
