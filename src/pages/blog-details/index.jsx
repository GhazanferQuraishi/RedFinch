import React from "react";
// import MainLayout from "../../layouts/main";
import LightLayout from "../../layouts/light";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <LightLayout>
      <PageHeader
        title="post details"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "blogs", url: "/blogs" },
          { id: 3, name: "post details", url: "/blog-details" },
        ]}
      />
      <PostDetails />
    </LightLayout>
  );
};

export default BlogDetails;
