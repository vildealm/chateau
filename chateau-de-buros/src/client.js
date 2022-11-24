import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "13j3hr4a", // find this at manage.sanity.io or in your sanity.json
  dataset: "booking", // this is from those question during 'sanity init'
});