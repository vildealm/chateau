import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "13j3hr4a", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  token: "skiItlCgTyClLxnhLw4OeHxS5PcZBwbRVUE8nmxKjNQ3YGwoAMptqpua9llUWO55TK2EUlyMHtiFQkwE1qTwdNyHuC4eTK41sqfJKP4isdl4whiXtmFl2dhIb31z70VLTuafONVkn8EC44NwZqEd5RjqeABRUb9Kig6vu7lcSxi46MOqOSn2",
  useCdn: "false",
  apiVersion: "v1"
});

//sanityClient.create({ _type: "post", title: "Hello World" }).then(console.log)
